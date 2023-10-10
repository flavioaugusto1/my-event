import { Text, View } from "react-native"

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016'
    }}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 36,
        marginTop: 48,
        color: '#FDFCFE'
      }}>
        Hello World!
      </Text>
    </View>
  )
}