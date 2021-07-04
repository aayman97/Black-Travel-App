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
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.75 : width * 0.74;

const Screen2 = ({ navigation, route }) => {
  const { place } = route.params;
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#16171D", "#465155", "#191B1F"]}
      style={styles.container}
    >
      <View
        style={{
          width: "100%",
          height: "10%",
          marginTop: "8%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
      >
        <Ionicons name="ios-notifications" size={width * 0.07} color="white" />
        {/* <Text style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
          Featured {""}{" "}
          <Fontisto name="fire" size={width * 0.04} color="#ff4500" />
        </Text> */}
        <Ionicons name="earth" size={width * 0.07} color="white" />
      </View>

      <View
        style={{
          width: "100%",
          height: "12%",
          marginTop: "0%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            {place}
          </Text>
          <Text style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
            Featured {""}{" "}
            <Fontisto name="fire" size={width * 0.04} color="#ff4500" />
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <AntDesign
            name="heart"
            size={width * 0.07}
            color="white"
            style={{
              marginRight: 35,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "14%",
          marginTop: "0%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 33,
            }}
          >
            Visit {place} 1 week
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: 40 }}>
                <Image
                  source={require("../assets/star.png")}
                  style={{
                    width: 21,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={{
                    width: 21,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={{
                    width: 21,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={{
                    width: 21,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
                <Image
                  source={require("../assets/star.png")}
                  style={{
                    width: 21,
                    height: 20,
                    resizeMode: "contain",
                  }}
                />
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 5,
                  marginLeft: 40,
                }}
              >
                4,5 Reviews
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          height: "18%",
          marginTop: "4%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={require("../assets/maps.jpg")}
          style={{
            width: width * 0.9,
            height: "100%",
            resizeMode: "cover",
            borderRadius: 20,
          }}
        />

        <Text
          style={{
            position: "absolute",
            color: "white",
            fontSize: 18,
            bottom: 15,
            fontWeight: "bold",
            right: 40,
          }}
        >
          View map
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          // paddingHorizontal: 15,
          fontWeight: "600",
          fontSize: 16,
          width: width * 0.9,
          alignSelf: "center",
          letterSpacing: 0.7,
          marginTop: "5%",
        }}
      >
        Exciting week-long trip through the best corners of {place}, discover
        the wonderful culture and gastronomy
      </Text>

      <View
        style={{
          width,
          height: height * 0.16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 20 }}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
            width: "35%",
            height: "60%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            789$
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen2;
