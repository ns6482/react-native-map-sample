/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    View,
    // Image
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
//import ClusteredMapView from 'react-native-maps-super-cluster';
import image from './images/flag-pink.png';

export default class App extends Component<{}> {

    constructor(props) {
        super(props);

        const userLatitude = 52.617806;
        const userLongitude = -1.143139;

        this.state = {
            data: [
                {
                    id: 1,
                    customer: "Mr Putney Road",
                    description: "Interim Breakdown",
                    latitude: 52.618159,
                    longitude: -1.134403
                },
                {
                    id: 2,
                    customer: "Mr Old Saffron Lane",
                    description: "Boiler Installation",
                    latitude: 52.615306,
                    longitude: -1.137658
                },
                {
                    id: 3,
                    customer: "Mr Filbert Street",
                    description: "Dishwasher Repair",
                    latitude: 52.624112,
                    longitude: -1.136586
                }

            ], isLoading: false, userLatitude, userLongitude
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    {
                        userLatitude: position.coords.latitude,
                        userLongitude: position.coords.longitude,
                    });
            },
        );

    }

    renderMarker(c) {
        return (
            <MapView.Marker
                key={c.id}
                image={image}
                coordinate={{
                    latitude: c.latitude,
                    longitude: c.longitude,
                }}
                title={c.customer}
                description={c.description}
            />
        );
    }

    renderMap() {
        return (
            <MapView
                style={{flex: 1, height: 450}}
                showsUserLocation
                initialRegion={{
                    latitude: this.state.userLatitude,
                    longitude: this.state.userLongitude,
                    latitudeDelta: 0.019,
                    longitudeDelta: 0.019,
                }}
            >
                {this.state.data.map(c => this.renderMarker(c))}
            </MapView>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                </View>
                <View style={styles.box2}>
                    {this.renderMap()}
                </View>
                <View style={styles.box3}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    //header
    box1: {
        flex: 1,
        backgroundColor: '#2196F3'
    },
    //content
    box2: {
        flex: 10,
    },
    //footer
    box3: {
        flex: 1,
    }
});