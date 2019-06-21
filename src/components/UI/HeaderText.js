import React from 'react';
import { StyleSheet, Text } from 'react-native';

const headerText = props => {
  return (
    <Text {...props} style={[styles.textHeader, props.style]} >
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "white",
    backgroundColor: 'transparent'
  }
});

export default headerText;
