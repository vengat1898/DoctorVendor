import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './styles/labHomeStyles';
import profilePic from '../../assets/images/login1.jpg'; // Profile photo

export default function LabHome() {
  const [activeTab, setActiveTab] = useState('Home');
  const router = useRouter();

  const dashboardItems = [
    { title: 'Laboratory Info', icon: 'information-circle-outline' },
    { title: 'Our Test', icon: 'flask-outline' },
    { title: 'Reply Ratings', icon: 'thumbs-up-outline' },
    { title: 'Add Test', icon: 'medkit-outline' },
    { title: 'Enquiries Received', icon: 'mail-outline', badge: 2 },
    { title: 'Today Enquires', icon: 'mail-open-outline', badge: 2 },
  ];

  const enquiries = [
    {
      id: 1,
      name: 'Rakesh',
      location: 'Chennai,Keelkattalai',
      request: 'Requested for Blood test',
      time: '2.00pm',
      date: '19-Jan-25',
    },
    {
      id: 2,
      name: 'Ramesh',
      location: 'Chennai,Keelkattalai',
      request: 'Requested for full body checkup',
      time: '2.00pm',
      date: '19-Jan-25',
    },
    {
      id: 3,
      name: 'Rakesh',
      location: 'Chennai,Keelkattalai',
      request: 'Requested for full body checkup',
      time: '2.00pm',
      date: '19-Jan-25',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profileImage} />
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.notificationBadge}>
          <Ionicons name="notifications-outline" size={20} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Dashboard Grid */}
      <View style={styles.dashboard}>
        {dashboardItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.dashboardItem}>
            <View style={styles.iconWrapper}>
              <Ionicons name={item.icon} size={24} color="#0c667b" />
              {item.badge && (
                <View style={styles.badgeOverlay}>
                  <Text style={styles.badgeTextSmall}>{item.badge}</Text>
                </View>
              )}
            </View>
            <Text style={styles.dashboardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Enquiries */}
      <Text style={styles.sectionTitle}>Recent Enquires</Text>

      <ScrollView contentContainerStyle={styles.cardList}>
        {enquiries.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardLocation}>{item.location}</Text>
                <Text style={styles.cardInfoNote}>{item.request}</Text>
              </View>
              <View style={styles.iconGroup}>
                <View style={styles.iconCall}>
                  <Ionicons name="call-outline" size={18} color="#fff" />
                </View>
                <View style={styles.iconWhatsapp}>
                  <FontAwesome name="whatsapp" size={18} color="#fff" />
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardTime}>{item.time}</Text>
              <TouchableOpacity>
                <Text style={styles.details}>Details</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        {[
          { name: 'Home', icon: 'home-outline' },
          { name: 'My Enquiry', icon: 'document-text-outline' },
          { name: 'Help & Support', icon: 'headset-outline' },
          { name: 'Refer & earn', icon: 'person-add-outline' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setActiveTab(item.name);
              if (item.name === 'My Enquiry') {
                router.push('/components/LabMyEnquiry');
              }
            }}
            style={styles.footerItem}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color={activeTab === item.name ? '#0c667b' : '#aaa'}
            />
            <Text
              style={[
                styles.footerText,
                activeTab === item.name && { color: '#0c667b', fontWeight: 'bold' },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
