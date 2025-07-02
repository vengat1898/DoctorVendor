import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import login1 from '../../assets/images/login.jpg';
import login2 from '../../assets/images/login1.jpg';
import login3 from '../../assets/images/login2.jpg';
import styles from './styles/loginStyles';

const { width } = Dimensions.get('window');
const images = [login1, login2, login3];

export default function Login() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const navigateTo = (screen) => {
    router.push(`/components/${screen}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={item} style={styles.image} />
            <LinearGradient
              colors={['transparent', 'rgba(255,255,255,0.8)', '#ffffff']}
              style={styles.whiteOverlay}
            />
          </View>
        )}
      />

      <View style={styles.dotsWrapper}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { opacity: activeIndex === i ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.button} onPress={() => router.push('/components/DoctorLogin')}>
    <Text style={styles.buttonText}>Doctors</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => router.push('/components/PharmacyLogin')}>
    <Text style={styles.buttonText}>Pharmacy</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={() => router.push('/LabProfile')}>
    <Text style={styles.buttonText}>Laboratory</Text>
  </TouchableOpacity>
</View>

    </KeyboardAvoidingView>
  );
}


