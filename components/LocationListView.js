import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/locationListView_style';
import { locationEvent } from '../api/Api';


export default class LocationListView extends Component {

    constructor(props){
        super(props);
        this.state = {
            locationEvent: []
          };
    }

    componentDidMount() {
        this.setState({ locationEvent: this.props.locationEvent });
    }

    render () {
        // let {navigation} = this.props;
        // const  data  = this.state;
        // const { navigate } = this.props.navigation;


        return (

            <View>
                { locationEvent.map(locationEvent => (
                    <TouchableOpacity style={styles.containerBox} key={locationEvent.id} 
            
                    onPress={() => this.props.navigation.navigate('EventDetailsScreen',{data: locationEvent})}
                    // onPress={() => this.props.navigation.navigate('Root',{screen:'EventDetailsScreen',data:{locationEvent}})}
                  

                    >
                            <View style={styles.shadow} />
                            <View style={styles.imageContainer}>
                                <Image
                                source={ locationEvent.image }
                                style={styles.image}
                                />
                                <View style={styles.radiusMask} />
                            </View>
                            <View style={styles.saleCard}>
                                <Text style={styles.textSale}>$ Free</Text>
                            </View>
                        
                        <View style={styles.textContainer}>
                            <View style={styles.row}>
                                <View style={styles.containerWrapper}>
                                    <Text style={styles.textEvent}  numberOfLines={1}>{locationEvent.eventname}</Text>
                                    <Text style={styles.textEventName} numberOfLines={1}>BigExpo 2020 </Text>
                                    <Text style={styles.textLocation} >Hotel Name - Tangerang</Text>
                                </View>

                                <View style={styles.containerWrapper}>
                                    <View style={styles.row}>
                                        <View>
                                            <Text style={styles.textMonth}>FEB</Text>
                                            <Text style={styles.textDay}>17</Text>
                                            <Text style={styles.textYear}>2020</Text>
                                        </View>
                                        <View>
                                            <Text></Text>
                                            <Text style={styles.textDash}>-</Text>
                                            <Text></Text>
                                        </View>
                                        <View>
                                            <Text style={styles.textMonth}>FEB</Text>
                                            <Text style={styles.textDay}>25</Text>
                                            <Text style={styles.textYear}>2020</Text>
                                                
                                        </View>
                                    </View>
                                </View>
                            </View>   
                        </View>
                    
                    </TouchableOpacity>
                )) }
            </View>
        );
    }
}

// LocationListView.defaultProps = {
//     locationEvent: locationEvent,
// };

