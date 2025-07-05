import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width,
    height: height * 0.45,
    resizeMode: 'cover',
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#116C89',
    marginHorizontal: 5,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#116C89',
    marginBottom: 25,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  mobileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
  },
  prefix: {
    fontSize: 16,
    marginRight: 10,
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  inputFull: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    color: '#000',
    marginBottom: 25,
  },
  loginButton: {
    backgroundColor: '#116C89',
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  checkboxBox: {
  width: 20,
  height: 20,
  borderRadius: 4,
  borderWidth: 1.5,
  borderColor: '#116C89',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 2,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 10,
    color: '#444',
    flex: 1,
    flexWrap: 'wrap',
    lineHeight: 20,
  },
});