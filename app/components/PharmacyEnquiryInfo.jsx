import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import doctorImage from '../../assets/images/login1.jpg'; // Replace with actual product images if available
import styles from './styles/PharmacyEnquiryInfoStyles';

const productList = [
  { id: 1, name: 'Paracetamol', desc: 'Effective for fever and mild to moderate pain relief.', image: doctorImage },
  { id: 2, name: 'Ibuprofen', desc: 'Effective for fever and mild to moderate pain relief.', image: doctorImage },
  { id: 3, name: 'Aspirin', desc: 'Effective for fever and mild to moderate pain relief.', image: doctorImage },
  { id: 4, name: 'Paracetamol', desc: 'Effective for fever and mild to moderate pain relief.', image: doctorImage },
];

export default function PharmacyEnquiryInfo() {
  const [status, setStatus] = useState({});

  const updateStatus = (id, value) => {
    setStatus((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rakesh Enquiry Info</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {productList.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardTop}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDesc}>{item.desc}</Text>
              </View>
            </View>
            <View style={styles.buttonRow}>
              {['Accepted', 'Rejected', 'Out of Stock'].map((btn) => (
                <TouchableOpacity
                  key={btn}
                  style={[
                    styles.actionButton,
                    status[item.id] === btn && styles.selectedButton,
                  ]}
                  onPress={() => updateStatus(item.id, btn)}
                >
                  <Text style={styles.buttonText}>{btn}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Enquiry</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
