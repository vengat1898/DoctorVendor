import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/doctorLoginStyles';
import doctorImage from '../../assets/images/login1.jpg';

export default function DoctorLogin() {
  const [mobile, setMobile] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [agreeTnC, setAgreeTnC] = useState(true);
  const [subscribeOffers, setSubscribeOffers] = useState(true);
  const router = useRouter();

  const handleLogin = () => {
    if (mobile.length === 10 && agreeTnC) {
      router.push('/components/PharmacyOtp');
    } else if (!agreeTnC) {
      alert('Please agree to the Terms and Conditions');
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  const renderCheckbox = (value) => (
    <View
      style={[
        styles.checkboxBox,
        { backgroundColor: value ? '#116C89' : '#fff' },
      ]}
    >
      {value && <Ionicons name="checkmark" size={14} color="#fff" />}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Image source={doctorImage} style={styles.image} />

        <View style={styles.dotWrapper}>
          <View style={[styles.dot, { opacity: 0.3 }]} />
          <View style={[styles.dot, { opacity: 1 }]} />
          <View style={[styles.dot, { opacity: 0.3 }]} />
        </View>

        <Text style={styles.heading}>Pharmacy Login</Text>

        <View style={styles.inputContainer}>
          <View style={styles.mobileRow}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              keyboardType="phone-pad"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <TextInput
            style={styles.inputFull}
            placeholder="Enter referral code (optional)"
            value={referralCode}
            onChangeText={setReferralCode}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Offers Checkbox */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setSubscribeOffers(!subscribeOffers)}
        >
          {renderCheckbox(subscribeOffers)}
          <Text style={styles.checkboxText}>
            Send me personalised health tips & offers on
          </Text>
        </TouchableOpacity>

        {/* T&C Checkbox */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setAgreeTnC(!agreeTnC)}
        >
          {renderCheckbox(agreeTnC)}
          <Text style={styles.checkboxText}>
            I agree to the T&C and Privacy Policy of doctor
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}