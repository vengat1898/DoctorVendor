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
import styles from './styles/pharmacyHomeStyles';
import login2 from '../../assets/images/login1.jpg'; // Profile image

export default function PharmacyHome() {
  const [activeTab, setActiveTab] = useState('Home');
  const router = useRouter();

  const dashboardItems = [
    { title: 'Pharmacy Info', icon: 'medkit-outline' },
    { title: 'My Products', icon: 'cube-outline' },
    { title: 'Reply Ratings', icon: 'star-outline' },
    { title: 'Add products', icon: 'add-circle-outline' },
    { title: 'Enquiries Received', icon: 'mail-outline', badge: 2 },
    { title: 'Today Enquires', icon: 'mail-open-outline', badge: 2 },
  ];

  const enquiries = [
    { id: 1, name: 'Rakesh', location: 'Chennai,Keelkattalai', time: '2.00pm', date: '19-Jan-25' },
    { id: 2, name: 'Rajesh', location: 'Chennai,Keelkattalai', time: '2.00pm', date: '19-Jan-25' },
    { id: 3, name: 'Revanth', location: 'Chennai,Keelkattalai', time: '2.00pm', date: '19-Jan-25' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
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

      {/* Dashboard */}
      <View style={styles.dashboard}>
        {dashboardItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dashboardItem}
            // onPress={() => {
            //   if (item.title === 'Pharmacy Info') {
            //     router.push('/components/PharmacyInfo');
            //   } else if (item.title === 'My Products') {
            //     router.push('/components/MyProducts');
            //   } else if (item.title === 'Add products') {
            //     router.push('/components/AddProducts');
            //   } else if (item.title === 'Reply Ratings') {
            //     router.push('/components/ReplyRatings');
            //   } else if (item.title === 'Enquiries Received') {
            //     router.push('/components/EnquiriesReceived');
            //   } else if (item.title === 'Today Enquires') {
            //     router.push('/components/TodayEnquires');
            //   }
            // }}
          >
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

      <Text style={styles.sectionTitle}>Recent Enquiries</Text>

      {/* Updated Enquiry Card Style */}
      <ScrollView contentContainerStyle={styles.cardList}>
        {enquiries.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => {
              router.push('/components/PharmacyEnquiryInfo');
            }}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardLocation}>{item.location}</Text>
                <Text style={styles.cardInfoNote}>Click to view Product info</Text>
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
              <TouchableOpacity
                onPress={() => router.push(`/components/EnquiryDetails/${item.id}`)}
              >
                <Text style={styles.details}>Details</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
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
                router.push('/components/PharmacyMyEnquiry');
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




