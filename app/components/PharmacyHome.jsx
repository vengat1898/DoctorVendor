import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/pharmacyHomeStyles';
import login2 from '../../assets/images/login1.jpg';

export default function PharmacyHome() {
  const enquiries = [
    {
      id: 1,
      name: 'Rakesh',
      date: '19-Jan-25',
      location: 'Chennai,Keelkattalai',
      time: '2.00pm',
    },
    {
      id: 2,
      name: 'Rajesh',
      date: '19-Jan-25',
      location: 'Chennai,Keelkattalai',
      time: '2.00pm',
    },
    {
      id: 3,
      name: 'Revanth',
      date: '19-Jan-25',
      location: 'Chennai,Keelkattalai',
      time: '2.00pm',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={login2} style={styles.profileImage} />
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.notificationBadge}>
          <Ionicons name="notifications-outline" size={20} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <View style={styles.menuRow}>
        <View style={styles.menuBox}>
          <Ionicons name="medkit-outline" size={24} color="#0c667b" />
          <Text style={styles.menuText}>Pharmacy Info</Text>
        </View>
        <View style={styles.menuBox}>
          <Ionicons name="cube-outline" size={24} color="#0c667b" />
          <Text style={styles.menuText}>My Products</Text>
        </View>
        <View style={styles.menuBox}>
          <Ionicons name="star-outline" size={24} color="#0c667b" />
          <Text style={styles.menuText}>Reply Ratings</Text>
        </View>
      </View>
      <View style={styles.menuRow}>
        <View style={styles.menuBox}>
          <Ionicons name="add-circle-outline" size={24} color="#0c667b" />
          <Text style={styles.menuText}>Add Products</Text>
        </View>
        <View style={styles.menuBox}>
          <Ionicons name="mail-outline" size={24} color="#0c667b" />
          <Text style={styles.menuText}>Enquiries Received</Text>
          <View style={styles.menuBadge}>
            <Text style={styles.menuBadgeText}>2</Text>
          </View>
        </View>
        <View style={styles.menuBox}>
          <Ionicons name="today-outline" size={24} color="#0c667b" />
          <Text style={styles.menuText}>Today Enquires</Text>
          <View style={styles.menuBadge}>
            <Text style={styles.menuBadgeText}>2</Text>
          </View>
        </View>
      </View>

      {/* Recent Enquiries */}
      <Text style={styles.sectionTitle}>Recent Enquires</Text>

      {enquiries.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
          </View>

          <View style={styles.cardGrayBox}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardLocation}>{item.location}</Text>
              <Text style={styles.cardInfoNote}>Click to view Product info</Text>
            </View>
            <View style={styles.cardIcons}>
              <Ionicons name="call" size={20} color="#fff" style={styles.callIcon} />
              <FontAwesome name="whatsapp" size={20} color="#fff" style={styles.whatsappIcon} />
            </View>
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.cardTime}>{item.time}</Text>
            <TouchableOpacity>
              <Text style={styles.details}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}



