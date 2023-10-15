import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ['Flávio', 'Isabel', 'Vanessa', 'Lúcia', 'Sandra', 'Augusto', 'André', 'Diego', 'Fabio', 'Mayk']

  function handleParticipantAdd() {
    if(participants.includes('Isabel')){
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.')
    }
    console.log('Adicionou');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log(`Removeu o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 29 de novembro de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text
            style={styles.buttonText}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione alguém a sua lista de eventos.
          </Text>
        )}
      />
    </View>
  )
}