import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 16
  },
  container: {
    flex: 1,
},
greeting:{
    marginTop: 40,
    marginBottom: 70,
    fontSize: 35,
    fontWeight: "500",
    textAlign: "center"
},


errorMessage:{
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
},
form: {
    marginBottom: 48,
    marginHorizontal: 30
},
inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
},
inputBox:{
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
},
input:{
    marginBottom: 15
},

button:{
    marginHorizontal: 30,
    marginBottom: 10,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
},
signUpButton:{
    marginHorizontal: 90
}












});