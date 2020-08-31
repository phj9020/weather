import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1a2a6c", "#b21f1f", "#fdbb2d"],
    title: "Lightning",
    subtitle: "Thun-thun-thunder feel the thunder 🎶",
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#73C8A9", "#373B44"],
    title: "Cloudy",
    subtitle: "Every cloud has a silver lining ",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#F1F2B5", "#135058"],
    title: "It's raining Men~ hallelujah",
    subtitle: "It rains, it pours ☂",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
    title: "Drizzle",
    subtitle: "It's only drizzling",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#BE93C5", "#7BC6CC"],
    title: "Snowing",
    subtitle: "Do you wanna Build a Snowman? ☃",
  },
  Sunny: {
    iconName: "weather-sunny",
    gradient: ["#e1eec3", "#f05053"],
    title: "Sunny Day",
    subtitle: "Ways to Avoid the Sun 🕶",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Hazy",
    subtitle: "The haze cleared, and the earth settled.",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"],
    title: "Foggy 🌫",
    subtitle: "The ocean was hidden beneath the fog and the air chilled",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#1F1C2C", "#928DAB"],
    title: "Tornado is coming 🌪",
    subtitle: "Tornado WARNING ⚠",
  },
  Wind: {
    iconName: "weather-windy",
    gradient: ["#acb6e5", "#86fde8"],
    title: "Windy 🌬",
    subtitle: "Close your eyes and turn your face into the wind",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions["Wind"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions["Wind"].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.text}>{temp}°</Text>
      </View>
      {/* {...styles.halfContainer, ...styles.textContainer} 두개에 같이 스타일 주는 es6방식 */}
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions["Wind"].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions["Wind"].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Wind",
    "Rain",
    "Drizzle",
    "Snow",
    "Clouds",
    "Sunny",
    "Haze",
    "Fog",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    flex:1,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
