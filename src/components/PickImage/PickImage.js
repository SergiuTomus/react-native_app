import React, { Component } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';

export default class PickImage extends Component {
  state = {
    pickedImaged: null
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImaged}  style={styles.previewImage}/>
        </View>
        <View style={styles.button}>
          <Button title="Alege imagine" onPress={() => alert('Pick Image!')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: "#eee",
    width: '80%',
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});
