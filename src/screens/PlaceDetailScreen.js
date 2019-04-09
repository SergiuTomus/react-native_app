import React, {Component} from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../store/actions/index';


class PlaceDetailScreen extends Component {
    placeDeleted = () => {
        const key = this.props.navigation.getParam('key', 'no_key');
        this.props.deletePlace(key);
        this.props.navigation.pop();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.props.navigation.getParam('image', 'no_image')} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{this.props.navigation.getParam('name', 'default_name')}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeleted}>
                        <View style={{ alignItems: "center"}}>
                            <Icon size={30} name="md-trash" color="red" />
                        </View> 
                    </TouchableOpacity>
                </View>
            </View>
        );
    } 
};

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
    
});

const mapStateToProps = (state) => {
    return {
      places: state.placesReducer.places
    };
  };

export default connect(null, {deletePlace})(PlaceDetailScreen);