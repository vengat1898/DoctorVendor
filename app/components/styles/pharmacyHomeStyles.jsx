import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#0c667b',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  notificationBadge: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    backgroundColor: 'orange',
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  menuBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  menuText: {
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
  },
  menuBadge: {
    position: 'absolute',
    top: 6,
    right: 12,
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  menuBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 13,
    color: '#999',
  },
  cardGrayBox: {
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  cardLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardInfoNote: {
    fontSize: 13,
    color: '#999',
  },
  cardIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  callIcon: {
    backgroundColor: '#005EFF',
    padding: 6,
    borderRadius: 6,
    marginRight: 6,
  },
  whatsappIcon: {
    backgroundColor: '#25D366',
    padding: 6,
    borderRadius: 6,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  cardTime: {
    fontSize: 14,
    color: '#444',
  },
  details: {
    color: '#006B8F',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;

