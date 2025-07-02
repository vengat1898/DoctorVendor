import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import login2 from '../../assets/images/login1.jpg'; // Profile image
import styles from './styles/doctorHomeStyles'; // Your separate style file

const screenHeight = Dimensions.get('window').height;

export default function DoctorHome() {
  const [activeTab, setActiveTab] = useState('Home');
  const router = useRouter();

  const menuItems = [
    { title: 'Personal Info', icon: 'person-circle-outline', route: '/components/DoctorPersonalInformation' },
    { title: 'Professional Credentials', icon: 'medal-outline',route: '/components/ProfessionalCredentials'  },
    { title: 'Edit Profile', icon: 'create-outline',route: '/components/PracticeDetails'  },
    { title: 'Practice Details', icon: 'business-outline',route: '/components/PracticeDetails'  },
    { title: 'Identity & Legal', icon: 'document-text-outline',route: '/components/IdentityLegal' },
    { title: 'Services & Regions', icon: 'location-outline' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={login2} style={styles.profileImage} />
          <Text style={styles.headerTitle}>Doctor Consultant</Text>
          <TouchableOpacity style={styles.notificationBadge}>
            <Ionicons name="notifications-outline" size={20} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                if (item.route) {
                  router.push(item.route);
                }
              }}
            >
              <View style={styles.menuCircle}>
                <Ionicons name={item.icon} size={20} color="#0c667b" />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Title */}
        <Text style={styles.sectionTitle}>Recent Enquiries</Text>

        {/* Scrollable Recent Enquiries */}
        <ScrollView style={styles.enquiryScroll} contentContainerStyle={{ paddingBottom: 90 }}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardName}>Rakesh</Text>
                <Text style={styles.cardDate}>19-Jan-25</Text>
              </View>
              <View style={styles.cardBody}>
                <View style={styles.cardLeft}>
                  <Text style={styles.cardTopic}>Diapedesis</Text>
                  <Text style={styles.cardLocation}>Chennai, Keelkattalai</Text>
                  <Text style={styles.cardTime}>Slot : 10.00 am - 10.30 am</Text>
                </View>
                <View style={styles.cardRight}>
                  <TouchableOpacity>
                    <Ionicons name="call" size={16} color="#0a4c93" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesome name="whatsapp" size={16} color="green" style={{ marginTop: 6 }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.cardActions}>
                {['Accepted', 'Rejected', 'Completed'].map((action, idx) => (
                  <TouchableOpacity key={idx} style={styles.actionBtn}>
                    <Text style={styles.actionText}>{action}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
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
          router.push('/components/MyEnquiry');
        }
        // Add more routes as needed
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

      </View>
    </SafeAreaView>
  );
}


