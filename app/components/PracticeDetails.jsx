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
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox';

export default function PracticeDetails() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [clinicName, setClinicName] = useState('');
  const [address, setAddress] = useState('');
  const [degree, setDegree] = useState('');
  const [patientsPerSlot, setPatientsPerSlot] = useState('');
  const [inClinic, setInClinic] = useState(true);
  const [teleconsultation, setTeleconsultation] = useState(true);
  const [homeVisit, setHomeVisit] = useState(true);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />
      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? insets.top : 50 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Practice Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          placeholder="Enter Clinic/Hospital Name"
          value={clinicName}
          onChangeText={setClinicName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address & Pincode"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Consultation Types</Text>
        <View style={styles.checkboxRow}>
          <View style={styles.checkboxItem}>
            <Checkbox value={inClinic} onValueChange={setInClinic} style={styles.checkbox} />
            <Text style={styles.checkboxText}>In-clinic</Text>
          </View>
          <View style={styles.checkboxItem}>
            <Checkbox value={teleconsultation} onValueChange={setTeleconsultation} style={styles.checkbox} />
            <Text style={styles.checkboxText}>Teleconsultation (Video/Voice)</Text>
          </View>
          <View style={styles.checkboxItem}>
            <Checkbox value={homeVisit} onValueChange={setHomeVisit} style={styles.checkbox} />
            <Text style={styles.checkboxText}>Home Visit</Text>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Select your degree"
          value={degree}
          onChangeText={setDegree}
        />

        <TouchableOpacity style={styles.upload}>
          <Text style={styles.uploadText}>Upload Degree & Registration Certificate</Text>
          <Ionicons name="cloud-upload-outline" size={20} color="#888" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Maximum Patients per Slot"
          keyboardType="numeric"
          value={patientsPerSlot}
          onChangeText={setPatientsPerSlot}
        />

        <TouchableOpacity style={styles.upload}>
          <Text style={styles.uploadText}>Upload Degree & Registration Certificate</Text>
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
    marginTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
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
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
    color: '#333',
  },
  checkboxRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  checkbox: {
    transform: [{ scale: 0.7 }],
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 10,
    color: '#333',
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
    marginBottom: 20,
  },
  uploadText: {
    color: '#666',
    fontSize: 14,
    flex: 1,
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

