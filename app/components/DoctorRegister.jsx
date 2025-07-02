import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/doctorRegisterStyles';
import { useRouter } from 'expo-router';

// Static options for pickers
const GENDER_OPTIONS = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Other', value: 'Other' },
];

const CITY_OPTIONS = [
  { label: 'Chennai', value: 'Chennai' },
  { label: 'Bangalore', value: 'Bangalore' },
  { label: 'Hyderabad', value: 'Hyderabad' },
];

const SPECIALIZATION_OPTIONS = [
  { label: 'Cardiologist', value: 'Cardiologist' },
  { label: 'Dermatologist', value: 'Dermatologist' },
  { label: 'Neurologist', value: 'Neurologist' },
];

export default function DoctorProfile() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (name && specialization && gender && city && address) {
      router.push('/components/DoctorHome');
      // router.push('/NextStep');
    } else {
      alert('Please fill out all fields');
    }
  };

  const pickerStyle = {
    inputAndroid: styles.pickerInput,
    inputIOS: styles.pickerInput,
    iconContainer: {
      top: 18,
      right: 10,
    },
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcome}>Hello Dr. kathir! Lets build your dedicated profile.</Text>
        <Text style={styles.sectionTitle}>Profile Details</Text>

        {/* Title + Name */}
        <View style={styles.nameRow}>
          <TextInput
            style={styles.titleInput}
            placeholder="Dr./Mr./Ms."
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Please enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Specialization Picker */}
        <View style={styles.input}>
          <RNPickerSelect
            onValueChange={setSpecialization}
            value={specialization}
            placeholder={{ label: 'Select specialization', value: '' }}
            items={SPECIALIZATION_OPTIONS}
            useNativeAndroidPickerStyle={false}
            style={pickerStyle}
            Icon={() => <Ionicons name="chevron-down" size={20} color="#888" />}
          />
        </View>

        {/* Gender and City Pickers */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <RNPickerSelect
              onValueChange={setGender}
              value={gender}
              placeholder={{ label: 'Select gender', value: '' }}
              items={GENDER_OPTIONS}
              useNativeAndroidPickerStyle={false}
              style={pickerStyle}
              Icon={() => <Ionicons name="chevron-down" size={20} color="#888" />}
            />
          </View>

          <View style={styles.halfInput}>
            <RNPickerSelect
              onValueChange={setCity}
              value={city}
              placeholder={{ label: 'Select City', value: '' }}
              items={CITY_OPTIONS}
              useNativeAndroidPickerStyle={false}
              style={pickerStyle}
              Icon={() => <Ionicons name="chevron-down" size={20} color="#888" />}
            />
          </View>
        </View>

        {/* Address */}
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />

        {/* Next Button */}
        <TouchableOpacity style={[styles.nextButton, { marginTop: 30 }]} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}



