import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

  selectItem = (key) => {
    const selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigation.push('PlaceDetail', {
      key: selectedPlace.key,
      name: selectedPlace.name,
      image: selectedPlace.image
    });
  }

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.selectItem}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.placesReducer.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);