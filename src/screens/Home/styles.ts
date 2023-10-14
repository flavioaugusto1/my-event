import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 16
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 48,
    color: '#FFF'
  },
  eventDate: {
    fontSize: 16,
    color: '#6B6B6B'
  },
  form: {
    flexDirection: "row",
    width:'100%', 
    gap: 12,
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
})