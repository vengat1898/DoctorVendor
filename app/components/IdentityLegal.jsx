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

export default function IdentityLegal() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />
      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? insets.top : 50 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identity & Legal</Text>
      </View>

      <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          placeholder="Enter Your Aadhaar Number"
          keyboardType="numeric"
          value={aadhaarNumber}
          onChangeText={setAadhaarNumber}
        />

        <TouchableOpacity style={styles.upload}>
          <Text style={styles.uploadText}>Upload Your Aadhaar</Text>
          <Ionicons name="cloud-upload-outline" size={20} color="#888" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Enter Your PAN Number"
          value={panNumber}
          onChangeText={setPanNumber}
        />

        <TouchableOpacity style={styles.upload}>
          <Text style={styles.uploadText}>Upload Your PAN</Text>
          <Ionicons name="cloud-upload-outline" size={20} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.upload}>
          <Text style={styles.uploadText}>Upload Digital Signature</Text>
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
    paddingBottom: 100,
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
