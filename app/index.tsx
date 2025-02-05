import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-pblack text-3xl">Welcome</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-700">
        Go to Home
      </Link>
    </View>
  );
}
