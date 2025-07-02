
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,


      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Welcome!</Text>

      <TouchableOpacity
        onPress={() => router.push('/components/Login')}
        style={{
          backgroundColor: "#116C89",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
 
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}


