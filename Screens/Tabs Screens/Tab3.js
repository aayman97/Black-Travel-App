import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Platform,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import { multiply } from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Rating, AirbnbRating } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const Tab3 = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#16171D", "#465155", "#191B1F"]}
      style={styles.container}
    >
      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        Tab3
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab3;
