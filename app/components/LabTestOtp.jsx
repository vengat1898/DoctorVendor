import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './styles/LabTestOtpStyles';
import { useRouter } from 'expo-router';


export default function Otp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 3) {
        inputs.current[index + 1].focus();
      }
    }
  };

//   const handleVerify = () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 4) {
//       router.push('/components/DoctorRegister');
//       // navigation or verification logic here
//     } else {
//       alert('Please enter a valid 4-digit OTP');
//     }
//   };

const handleVerify = () => {
  const enteredOtp = otp.join('');
  if (enteredOtp.length === 4) {
    // Navigate to the next screen after successful OTP verification
    router.push('/components/LabRegister'); // 👈 change to your actual route
  } else {
    alert('Please enter a valid 4-digit OTP');
  }
};

  const handleResend = () => {
    alert('OTP resent!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>OTP</Text>
        <Text style={styles.subtitle}>Please enter valid OTP</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyText}>VERIFY</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Haven’t Received OTP?{' '}
          <Text style={styles.resendLink} onPress={handleResend}>
            Resend
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}