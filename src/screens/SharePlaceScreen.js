import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../components/PlaceInput/PlaceInput';
import PickImage from '../components/PickImage/PickImage';
import HeaderText from '../components/UI/HeaderText';
import DefaultInput from '../components/UI/DefaultInput';
import { addPlace } from '../store/actions/index';

class SharePlaceScreen extends Component {
  placeAdded = (placeName) => {
    this.props.addPlace(placeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText>Adauga o locatie</HeaderText>
        <PickImage />
        <DefaultInput placeholder="Nume Locatie"/>
        <View style={{ margin: 8}}>
          <Button title="Distribuie"/>
        </View>
        {/* <PlaceInput onPlaceAdded={this.placeAdded}/> */}
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
  },

});

export default connect(null, {addPlace})(SharePlaceScreen);
