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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import { multiply } from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Rating, AirbnbRating } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
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

const Screen1 = ({ navigation }) => {
  // const a = axios
  //   .get(
  //     "https://api.unsplash.com/photos/?client_id=tZib3yR_NFsCidWSJIrOrPxxmv3cBvPQMaOoELMEnGw"
  //   )
  //   .then((res) => {
  //     console.log(res);
  //   });

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [scrollXIndex, setIndex] = React.useState(-1);
  const fadeAnim = React.useRef(new Animated.Value(width * 0.34)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: -width * 0.34 * scrollXIndex,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [scrollXIndex]);
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

        <Text style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>
          Featured {""}{" "}
          <Fontisto name="fire" size={width * 0.04} color="#ff4500" />
        </Text>

        <AntDesign name="search1" size={width * 0.07} color="white" />
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(_, i) => i}
        horizontal
        bounces={false}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        decelerationRate={"fast"}
        contentContainerStyle={{ marginTop: width * 0.1 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
            listener: () => setIndex(Math.ceil(scrollX._value / ITEM_SIZE)),
          }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const scaleImageDown = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
          });

          const textPosition = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.35, 0, width * 0.35],
          });
          const scaleText = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1.2, 0.5],
          });

          const textHeight = scrollX.interpolate({
            inputRange,
            outputRange: [20, 0, 20],
          });

          const opacityViewAnimation = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          const translateYViewAnimation = scrollX.interpolate({
            inputRange,
            outputRange: [-30, 0, -30],
          });
          if (index === 0) {
            return <View style={{ width: (width - ITEM_SIZE) / 2 }} />;
          } else if (index === data.length - 1) {
            return <View style={{ width: (width - ITEM_SIZE) / 2 }} />;
          } else {
            return (
              <TouchableWithoutFeedback
                style={{
                  width: ITEM_SIZE,
                  height: height * 0.65,
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("Trip", {
                    place: item.place,
                  });
                }}
              >
                <Animated.Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "white",
                    transform: [
                      {
                        translateX: textPosition,
                      },
                      {
                        scale: scaleText,
                      },
                      {
                        translateY: textHeight,
                      },
                    ],
                  }}
                >
                  {item.place}
                </Animated.Text>

                <Animated.Image
                  source={{ uri: item.imageURL }}
                  style={{
                    flex: 1,
                    width: "100%",
                    height: "70%",
                    resizeMode: "cover",
                    borderRadius: 40,
                    marginTop: 50,
                    position: "relative",
                    transform: [
                      {
                        scale: scaleImageDown,
                      },
                    ],
                  }}
                />

                <Animated.View
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "30%",
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    bottom: -1,
                    overflow: "hidden",
                    opacity: opacityViewAnimation,
                    transform: [
                      {
                        translateY: translateYViewAnimation,
                      },
                    ],
                  }}
                >
                  <BlurView intensity={70} style={{ flex: 1 }} tint="light">
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 25,
                          fontWeight: "bold",
                          width: "45%",
                          marginLeft: 20,
                          marginTop: 10,
                        }}
                      >
                        Visit {item.place} 1 week
                      </Text>
                    </View>

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
                        <View style={{ flexDirection: "row" }}>
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
                          }}
                        >
                          4,5 Reviews
                        </Text>
                      </View>

                      <View
                        style={{
                          flex: 0.9,
                          backgroundColor: "black",
                          borderTopLeftRadius: 40,
                          borderBottomLeftRadius: 20,
                          justifyContent: "center",
                          alignItems: "center",
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
                      </View>
                    </View>
                  </BlurView>
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          }
        }}
      />
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

export default Screen1;
