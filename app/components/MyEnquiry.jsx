import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MyEnquiry() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('All Enquiries');

  const tabs = ['All Enquiries', 'New Enquiries', 'Missed Enquiries'];

  const dummyData = [
    {
      id: '1',
      name: 'Rakesh',
      date: '19-Jan-25',
      condition: 'Diapedesis',
      location: 'Chennai, Keelkattalai',
      slot: '10.00 am - 10.30 am',
      time: '2.00pm',
    },
    {
      id: '2',
      name: 'Rakesh',
      date: '19-Jan-25',
      condition: 'Diapedesis',
      location: 'Chennai, Keelkattalai',
      slot: '10.00 am - 10.30 am',
      time: '2.00pm',
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <View style={styles.cardBodyContainer}>
        <View style={styles.cardBody}>
          <View style={{ flex: 1 }}>
            <Text style={styles.condition}>{item.condition}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.slot}>Slot : {item.slot}</Text>
          </View>

          <View style={styles.actions}>
            <Ionicons name="call-outline" size={24} color="#005EFF" style={styles.iconButton} />
            <Ionicons name="logo-whatsapp" size={24} color="#25D366" style={styles.iconButton} />
          </View>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.time}>{item.time}</Text>
        <TouchableOpacity>
          <Text style={styles.details}>Show Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />
      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? insets.top : 50 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My enquiry</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabBar}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Date</Text>
          <Ionicons name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Enquiry status</Text>
          <Ionicons name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Ratings</Text>
          <Ionicons name="chevron-down" size={16} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Enquiry List */}
      <FlatList
        data={dummyData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#116C89',
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
    marginTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginRight: 16,
  },
  tabText: {
    color: '#777',
    fontSize: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#116C89',
  },
  activeTabText: {
    color: '#116C89',
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flex: 1,
  },
  dropdownText: {
    fontSize: 8,
    color: '#333',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  date: {
    fontSize: 11,
    color: '#666',
  },
  cardBodyContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 6,
    padding: 10,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  condition: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  location: {
    fontSize: 13,
    color: '#777',
  },
  slot: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    gap: 12,
  },
  iconButton: {
    padding: 6,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  time: {
    fontSize: 13,
    color: '#333',
  },
  details: {
    fontSize: 13,
    color: '#116C89',
    fontWeight: 'bold',
  },
});

