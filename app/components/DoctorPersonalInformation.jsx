import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DoctorPersonalInformation() {
  const [gender, setGender] = useState(null);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.root}>
      {/* Set the StatusBar background */}
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header with Safe Padding */}
      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? insets.top : 50 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Information</Text>
      </View>

      {/* Form */}
      <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
        <TextInput style={styles.input} placeholder="Enter full name" />
        <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Enter Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Date of birth" />

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {gender ? gender : 'Select your gender'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#888" />
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="Languages Spoken" />
        <TextInput style={styles.input} placeholder="Enter your address" />

        <TouchableOpacity style={styles.upload}>
          <Text style={styles.uploadText}>Upload your passport size photo</Text>
          <Ionicons name="cloud-upload-outline" size={20} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
    marginTop:20
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:20
  },
  form: {
    padding: 16,
    paddingBottom: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 14,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 20,
  },
  dropdownText: {
    color: '#666',
    fontSize: 14,
  },
  upload: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 30,
  },
  uploadText: {
    color: '#666',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#116C89',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});




