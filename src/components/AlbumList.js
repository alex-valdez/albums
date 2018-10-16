import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(resp => console.log(resp));
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