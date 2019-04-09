import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../components/PlaceInput/PlaceInput';
import { addPlace } from '../store/actions/index';

class SharePlaceScreen extends Component {
  placeAdded = (placeName) => {
    this.props.addPlace(placeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAdded}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eef',
  }
});

export default connect(null, {addPlace})(SharePlaceScreen);
