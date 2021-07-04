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
import {
  Ionicons,
  Fontisto,
  AntDesign,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { multiply } from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Rating, AirbnbRating } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Tab2 from "./Screens/Tabs Screens/Tab2";
import Tab3 from "./Screens/Tabs Screens/Tab3";
import Tab4 from "./Screens/Tabs Screens/Tab4";

const data = [
  {
    place: "empty",
    imageURL: "empty",
  },
  {
    place: "Spain",
    imageURL:
      "https://images.unsplash.com/photo-1554939437-ecc492c67b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    place: "Japan",
    imageURL:
      "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    place: "Italy",
    imageURL:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80",
  },
  {
    place: "Egypt",
    imageURL:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=325&q=80",
  },
  {
    place: "Poland",
    imageURL:
      "https://images.unsplash.com/photo-1541260799012-1383b2807fdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    place: "empty",
    imageURL: "empty",
  },
];
const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.75 : width * 0.74;

const stack = createStackNavigator();
const tabs = createBottomTabNavigator();

const screens = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Home" component={Screen1} />
      <stack.Screen name="Trip" component={Screen2} />
    </stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <tabs.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "transparent",
            position: "absolute",
            borderColor: "transparent",
            borderTopColor: "transparent",
            bottom: 10,
          },
          showLabel: false,
        }}
      >
        <tabs.Screen
          name="Explore"
          component={screens}
          options={{
            tabBarIcon: (props) => {
              return (
                <View style={{ flex: 1, alignItems: "center" }}>
                  {props.focused ? (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      Explore
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      {"       "}
                    </Text>
                  )}

                  {props.focused ? (
                    <View
                      style={{
                        shadowColor: "white",
                        shadowOpacity: 1,
                        shadowRadius: 8,
                      }}
                    >
                      <Entypo name="dot-single" size={30} color="white" />
                    </View>
                  ) : (
                    <MaterialIcons name="explore" size={30} color="white" />
                  )}
                </View>
              );
            },
          }}
        />
        <tabs.Screen
          name="Tab2"
          component={Tab2}
          options={{
            tabBarIcon: (props) => {
              return (
                <View style={{ flex: 1, alignItems: "center" }}>
                  {props.focused ? (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      Tab2
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      {"       "}
                    </Text>
                  )}

                  {props.focused ? (
                    <View
                      style={{
                        shadowColor: "white",
                        shadowOpacity: 1,
                        shadowRadius: 8,
                      }}
                    >
                      <Entypo name="dot-single" size={30} color="white" />
                    </View>
                  ) : (
                    <MaterialCommunityIcons
                      name="ticket-confirmation"
                      size={30}
                      color="white"
                    />
                  )}
                </View>
              );
            },
          }}
        />
        <tabs.Screen
          name="Tab3"
          component={Tab3}
          options={{
            tabBarIcon: (props) => {
              return (
                <View style={{ flex: 1, alignItems: "center" }}>
                  {props.focused ? (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      Tab3
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      {"       "}
                    </Text>
                  )}

                  {props.focused ? (
                    <View
                      style={{
                        shadowColor: "white",
                        shadowOpacity: 1,
                        shadowRadius: 8,
                      }}
                    >
                      <Entypo name="dot-single" size={30} color="white" />
                    </View>
                  ) : (
                    <AntDesign name="heart" size={27} color="white" />
                  )}
                </View>
              );
            },
          }}
        />
        <tabs.Screen
          name="Tab4"
          component={Tab4}
          options={{
            tabBarIcon: (props) => {
              return (
                <View style={{ flex: 1, alignItems: "center" }}>
                  {props.focused ? (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      Tab4
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      {"       "}
                    </Text>
                  )}

                  {props.focused ? (
                    <View
                      style={{
                        shadowColor: "white",
                        shadowOpacity: 1,
                        shadowRadius: 8,
                      }}
                    >
                      <Entypo name="dot-single" size={30} color="white" />
                    </View>
                  ) : (
                    <Ionicons name="person" size={27} color="white" />
                  )}
                </View>
              );
            },
          }}
        />
      </tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
