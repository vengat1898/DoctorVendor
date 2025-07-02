import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './styles/pharmacyMyEnquiryStyles';

export default function PharmacyMyEnquiry() {
  const [activeTab, setActiveTab] = useState('All Enquiries');
  const router = useRouter();

  const enquiries = [
    {
      id: 1,
      name: 'Rakesh',
      location: 'Chennai,Keelkattalai',
      date: '19-Jan-25',
      time: '2.00pm',
    },
    {
      id: 2,
      name: 'Rajesh',
      location: 'Chennai,Keelkattalai',
      date: '19-Jan-25',
      time: '2.00pm',
    },
    {
      id: 3,
      name: 'Ramesh',
      location: 'Chennai,Keelkattalai',
      date: '19-Jan-25',
      time: '2.00pm',
    },
    {
      id: 4,
      name: 'Rakesh',
      location: 'Chennai,Keelkattalai',
      date: '19-Jan-25',
      time: '2.00pm',
    },
  ];

  const filters = ['Date', 'Enquiry status', 'Ratings'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My enquiry</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['All Enquiries', 'New Enquiries', 'Missed Enquiries'].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity key={filter} style={styles.filterButton}>
            <Text style={styles.filterText}>{filter}</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Enquiry List */}
      <ScrollView contentContainerStyle={styles.cardList}>
        {enquiries.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => router.push('/components/PharmacyEnquiryInfo')}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardBody}>
              <View>
                <Text style={styles.cardLocation}>{item.location}</Text>
                <Text style={styles.cardNote}>Click to view Product info</Text>
              </View>
              <View style={styles.iconGroup}>
                <Ionicons name="call-outline" size={20} color="#fff" style={styles.callIcon} />
                <FontAwesome name="whatsapp" size={20} color="#fff" style={styles.whatsappIcon} />
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardTime}>{item.time}</Text>
              <TouchableOpacity onPress={() => router.push(`/components/EnquiryDetails/${item.id}`)}>
                <Text style={styles.detailsText}>Details</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
