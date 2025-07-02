import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function PharmacyDetails() {
  const [photo, setPhoto] = useState(null);
  const [pharmacyName, setPharmacyName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handlePhotoUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setPhoto(result.assets?.[0]?.uri || result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="dark-content" />

      <Text style={styles.welcomeText}>
        Hello <Text style={styles.userName}>kathir!</Text> Lets build your{'\n'}
        dedicated profile.
      </Text>

      <Text style={styles.sectionTitle}>Pharmacy Details</Text>

      {/* Upload Photo */}
      <TouchableOpacity style={styles.uploadButton} onPress={handlePhotoUpload}>
        <Text style={styles.uploadText}>
          {photo ? 'Photo Selected' : 'Upload Photo'}
        </Text>
        <Ionicons name="cloud-upload-outline" size={20} color="#888" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Please enter Pharmacy name"
        value={pharmacyName}
        onChangeText={setPharmacyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Please enter License Number"
        value={licenseNumber}
        onChangeText={setLicenseNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter current address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity
      style={styles.nextButton}
      onPress={() => router.push('/components/PharmacyHome')}
    >
      <Text style={styles.nextText}>Next</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 50 : 70,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  userName: {
    color: '#000',
  },
  sectionTitle: {
    color: '#116C89',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 14,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uploadText: {
    color: '#666',
    fontSize: 14,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 16,
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#116C89',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
