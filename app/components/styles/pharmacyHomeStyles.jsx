import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header
  header: {
    backgroundColor: '#0c667b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    marginLeft: 12,
    flex: 1,
  },
  notificationBadge: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: 'orange',
    borderRadius: 6,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },

  // Dashboard
  dashboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  dashboardItem: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#eaf9ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  badgeOverlay: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: 'orange',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  badgeTextSmall: {
    color: '#fff',
    fontSize: 10,
  },
  dashboardText: {
    fontSize: 11,
    textAlign: 'center',
    color: '#444',
  },

  // Section Title
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  // Enquiry Cards
  cardList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  cardDate: {
    fontSize: 11,
    color: '#888',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
  },
  cardLocation: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  cardInfoNote: {
    fontSize: 11,
    color: '#888',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconCall: {
    backgroundColor: '#005EFF',
    padding: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  iconWhatsapp: {
    backgroundColor: '#25D366',
    padding: 6,
    borderRadius: 6,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardTime: {
    fontSize: 13,
    color: '#333',
  },
  details: {
    fontSize: 13,
    color: '#116C89',
    fontWeight: 'bold',
  },

  // Footer Navigation
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    marginTop: 2,
    color: '#999',
  },
});

export default styles;

