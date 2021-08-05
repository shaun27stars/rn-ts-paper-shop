import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

const Spacer = (props) => {
  const { margin } = useTheme();
  const styles = StyleSheet.create({
    view: {
      width: props.width || margin.horizontal,
      height: props.height || margin.vertical,
    },
  });

  return <View style={styles.view}></View>;
};

export default Spacer;
