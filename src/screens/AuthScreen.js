import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import axios from 'axios';

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
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler}/>
      </View>
    )
  }
}

export default AuthScreen;
