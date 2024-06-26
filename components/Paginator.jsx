import React, { useContext } from "react";
import { StyleSheet, useWindowDimensions, Animated, View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp"
        });

        return <Animated.View key={i.toString()} style={[styles.dot(theme), { width: dotWidth, opacity }]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    gap: 14
  },
  dot: (theme) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.secondary,
    // marginHorizontal: 8
  })
});

export default Paginator;
