import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c667b',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 16,
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 12,
    color: '#555',
  },
  tabTextActive: {
    color: '#0c667b',
    fontWeight: 'bold',
  },
  tabUnderline: {
    height: 2,
    backgroundColor: '#0c667b',
    marginTop: 4,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#efefef',
  },
  filterText: {
    marginRight: 4,
    fontSize: 10,
    color: '#333',
  },
  cardList: {
    padding: 12,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  cardDate: {
    fontSize: 12,
    color: '#666',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  cardLocation: {
    fontSize: 13,
    color: '#555',
  },
  cardNote: {
    fontSize: 12,
    color: '#888',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  callIcon: {
    backgroundColor: '#005EFF',
    padding: 3,
    borderRadius: 5,
  },
  whatsappIcon: {
    backgroundColor: '#25D366',
    padding: 4,
    borderRadius: 5,
    marginLeft: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTime: {
    fontSize: 10,
    color: '#444',
  },
  detailsText: {
    fontSize: 10,
    color: '#0c667b',
    fontWeight: '500',
  },
});
