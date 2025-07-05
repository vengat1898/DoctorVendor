import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Modal,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/labRegisterStyle';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const SPECIALIZATION_OPTIONS = [
  { label: 'Blood Testing', value: 'Blood Testing' },
  { label: 'Pathology', value: 'Pathology' },
  { label: 'Radiology', value: 'Radiology' },
];

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function LabRegister() {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [license, setLicense] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handlePhotoPick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const toggleDay = (day) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        open: !prev?.[day]?.open,
        from: prev?.[day]?.from || '',
        to: prev?.[day]?.to || '',
      },
    }));
  };

  const handleTimeChange = (day, type, value) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  const formatHoursSummary = () => {
    const list = Object.entries(hours)
      .filter(([_, val]) => val.open)
      .map(([day, val]) => `${day}(${val.from}-${val.to})`);
    return list.length > 0 ? list.join(', ') : '';
  };

  const handleNext = () => {
      router.push('/components/LabHome');
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
        <Text style={styles.welcome}>Hello kathir! Lets build your dedicated profile.</Text>
        <Text style={styles.sectionTitle}>Laboratory Details</Text>

        {/* Photo Upload */}
        <TouchableOpacity style={styles.uploadContainer} onPress={handlePhotoPick}>
          <Text style={styles.uploadText}>{photo ? 'Photo Selected' : 'Upload Photo'}</Text>
          <Ionicons name="cloud-upload-outline" size={24} color="#555" />
        </TouchableOpacity>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Please enter Laboratory name"
          value={name}
          onChangeText={setName}
        />

        {/* License Input */}
        <TextInput
          style={styles.input}
          placeholder="Please enter License Number"
          value={license}
          onChangeText={setLicense}
        />

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

        {/* Operating Hours Modal Trigger */}
        <TouchableOpacity style={styles.input} onPress={() => setModalVisible(true)}>
          <Text style={{ color: formatHoursSummary() ? '#000' : '#999', fontSize: 14 }}>
            {formatHoursSummary() || 'Operating Hours/Day'}
          </Text>
        </TouchableOpacity>

        {/* Address Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter current address"
          value={address}
          onChangeText={setAddress}
        />

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* MODAL FOR OPERATING HOURS */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView contentContainerStyle={styles.modalContent}>
          <Text style={styles.sectionTitle}>Set Operating Hours</Text>

          {WEEKDAYS.map((day) => (
            <View key={day} style={styles.dayRow}>
              <View style={styles.dayHeader}>
                <Text style={styles.dayLabel}>{day}</Text>
                <Switch
                  value={hours[day]?.open || false}
                  onValueChange={() => toggleDay(day)}
                />
              </View>
              {hours[day]?.open && (
                <View style={styles.timeInputs}>
                  <TextInput
                    style={styles.timeInput}
                    placeholder="From (e.g. 09:00)"
                    value={hours[day]?.from}
                    onChangeText={(val) => handleTimeChange(day, 'from', val)}
                  />
                  <TextInput
                    style={styles.timeInput}
                    placeholder="To (e.g. 18:00)"
                    value={hours[day]?.to}
                    onChangeText={(val) => handleTimeChange(day, 'to', val)}
                  />
                </View>
              )}
            </View>
          ))}

          <TouchableOpacity style={styles.nextButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.nextText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
  );
}


