import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width,
    height: height * 0.6,
    position: 'relative',
  },
  image: {
    width,
    height: height * 0.6,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },
  whiteOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
    marginBottom: 10,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#116C89',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#116C89',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

