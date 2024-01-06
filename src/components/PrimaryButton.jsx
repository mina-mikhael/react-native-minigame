import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = (props) => {
  const { children } = props;

  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
