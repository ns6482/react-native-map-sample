/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button, FlatList,
    StyleSheet, Text, TouchableHighlight, TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
//import ClusteredMapView from 'react-native-maps-super-cluster';
import image from './images/flag-pink.png';
// import * as Dimensions from "react-native/Libraries/Utilities/Dimensions";
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

        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         this.setState(
        //             {
        //                 userLatitude: position.coords.latitude,
        //                 userLongitude: position.coords.longitude,
        //             });
        //     },
        // );

    }

    renderMarker(c) {
        return (
            <MapView.Marker
                key={c.id}
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

    renderJobs() {
        return (
            <FlatList
                data={[...this.state.data]}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, separators}) => (
                    <TouchableHighlight
                        onPress={() => this._onPress(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{backgroundColor: 'white'}}>
                            <Text style={styles.jobItem}>{item.customer}</Text>
                        </View>
                    </TouchableHighlight>
                )}
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>
                {this.renderMap()}
                {/*<View style={styles.buttonContainer}>*/}
                    {/*<TouchableOpacity*/}
                        {/*onPress={() => console.log("go to")}*/}
                        {/*style={[styles.bubble, styles.button]}*/}
                    {/*>*/}
                        {/*<Text>View Jobs</Text>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
                <View style={styles.jobs}>
                    {this.renderJobs()}
                </View>
            </View>
        );
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 10,
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    map: {
        flex: 7,
        width,
        height
    },
    jobs: {
        flex: 3
    },
    jobItem: {
        padding: 10,
        fontSize: 18,
        height: 44
    }

});
