import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    };
    
    placeNameChanged = (val) => {
        this.setState({
            placeName: val
        });
    };

    placeSubmit = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };
    
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.placeInput}
                placeholder='Please enter text'
                value={this.state.placeName}
                onChangeText={this.placeNameChanged} />
                <Button 
                title="Add" 
                style={styles.placeButton} 
                onPress={this.placeSubmit}/>
            </View>
        );
    }  
};

const styles = StyleSheet.create({
    inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
    // alignItems: 'center',
    },
    placeInput: {
        width: '87%',
        backgroundColor: 'white'
    },
    placeButton: {
    // width: 55
    }
});

export default PlaceInput;