import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  greeting: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 50,
  },
  logo: {
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 150,
    height: 293,
  },

  form: {
    flex: 1,
    margin: 25,
  },
  authInput: {marginTop: 5},
  authButton: {marginTop: 15},
  authSwitch: {
    marginTop: 15,
    alignItems: 'center',
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  inputBox: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
    marginBottom: 15,
  },

  appBar: {
    color: '#1e90ff',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 20,
  },
  card: {
    marginTop: 20,
  },
});
