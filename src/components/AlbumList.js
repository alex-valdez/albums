import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

    state = {
        albums: [],
    };

    componentWillMount() {
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => console.log(response.data));
    }

    render() {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}


export default AlbumList;