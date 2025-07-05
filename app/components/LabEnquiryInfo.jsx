import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LabEnquiryInfo() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rakesh Enquiry Info</Text>
      </View>

      {/* Enquiry Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>Rakesh</Text>
          <Text style={styles.date}>19-Jan-25</Text>
        </View>

        {/* Info section with gray box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Chennai</Text>
          <Text style={styles.infoText}>Blood Test</Text>
          <View style={styles.rowBetween}>
            <Text style={styles.infoText}>Requested time: 10pm</Text>
            <View style={styles.iconGroup}>
              <View style={styles.iconCall}>
                <Ionicons name="call" size={18} color="#fff" />
              </View>
              <View style={styles.iconWhatsapp}>
                <FontAwesome name="whatsapp" size={18} color="#fff" />
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Accepted</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Rejected</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Unavailable</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c667b',
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 9,
    color: '#888',
  },
  infoBox: {
    backgroundColor: '#f2f2f2',
    padding: 7,
    borderRadius: 4,
  },
  infoText: {
    fontSize: 10,
    color: '#555',
    marginBottom: 6,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconGroup: {
    flexDirection: 'row',
    bottom:25
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
    borderRadius: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#0c667b',
    paddingVertical: 2,
    marginHorizontal: 6,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
    fontSize:12
  },
});

