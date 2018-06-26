/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet, Text, TouchableOpacity,
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
                style={styles.map}
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
                {this.renderMap()}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("go to")}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text>View Jobs</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexAlignment:''
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    }

});