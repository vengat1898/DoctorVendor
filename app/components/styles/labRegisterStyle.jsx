import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00789e',
    marginBottom: 20,
    alignSelf:"center"
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  uploadText: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  pickerInput: {
    fontSize: 14,
    color: '#000',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  nextButton: {
    backgroundColor: '#0c667b',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
  padding: 20,
  paddingTop: 50,
  backgroundColor: '#fff',
},
dayRow: {
  marginBottom: 10,
  borderBottomWidth: 1,
  borderColor: '#eee',
  paddingBottom: 10,
},
dayHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 6,
},
dayLabel: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#333',
},
timeInputs: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
timeInput: {
  width: '48%',
  height: 40,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 6,
  paddingHorizontal: 10,
  fontSize: 14,
  backgroundColor: '#fff',
},

});

