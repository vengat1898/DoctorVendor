import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#0c667b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  content: {
    padding: 16,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 14,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  productDesc: {
    fontSize: 13,
    color: '#666',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#0c667b',
    paddingVertical: 10,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: '#055262',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
  },

  submitButton: {
    backgroundColor: '#0c667b',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
