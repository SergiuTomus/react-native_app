import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Button } from 'react-native';
import axios from 'axios';
import DefaultInput from '../components/UI/DefaultInput';
import HeaderText from '../components/UI/HeaderText';
import Image from '../assets/background.jpg';

class AuthScreen extends Component {
  componentDidMount(){
    axios.get('http://192.168.1.7:3002/products/')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loginHandler = () => {
    this.props.navigation.navigate('FindPlace');
  }

  render() {
    return (
      <ImageBackground source={Image} style={styles.backImage}>
        <View style={styles.container}>
          <HeaderText>Sign in</HeaderText>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Email" style={styles.input}/>
            <DefaultInput placeholder="Password" style={styles.input}/>
            <DefaultInput placeholder="Confirm Password" style={styles.input}/>
          </View>
          <Button title="Register" onPress={this.loginHandler} style={styles.button}/>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: '#bbb'
  },
  button: {
    backgroundColor: "transparent",
  }
});

export default AuthScreen;
