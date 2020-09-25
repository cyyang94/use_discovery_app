import  React, { Component,useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image, Switch} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

import avatar from '../assets/avatar.png';



export class ProfileScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            switchValue:false
        };
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }
 
	render(){

		return (
			<View>
                <View style={styles.containerWrapper}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.imgProfile} source={avatar}/>
                        <Text style={styles.userName}>User A</Text>
                    </View>
                    <View style={styles.alignCenter}>
                        <View style={styles.rowBetween}>
                            <View>
                                <Text style={styles.textCenter}>2</Text>
                                <Text style={styles.textCenter}>Coupons</Text>
                            </View>
                            <View>
                                <Text style={styles.textCenter}>2</Text>
                                <Text style={styles.textCenter}>Tickets</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.bigTitle}>Settings</Text>
                        <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                        <View style={styles.conatinerPadd}>
                            <View >
                               <View style={styles.rowBetween}>
                                    <Text style={styles.subTitle}>Primary City</Text>
                                    <Text style={styles.colored}>Tangerang</Text>
                               </View>
                            </View>
                            
                        </View>
                        <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                        <View style={styles.conatinerPadd}>
                            <View >
                               <View style={styles.rowBetween}>
                                    <Text style={styles.subTitle}>Copy event to calendar</Text>
                                    <Switch onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
                               </View>
                            </View>
                            
                        </View>
                        <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                            <Text style={styles.bigTitle2}>About</Text>
                        <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                        <View style={styles.conatinerPadd}>
                            <View >
                               <View style={styles.rowBetween}>
                                    <Text style={styles.subTitle}>Version</Text>
                                    <Text style={styles.colored}>1.0.0</Text>
                               </View>
                            </View>
                            
                        </View>
                        <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                       <TouchableOpacity>
                            <View style={styles.conatinerPadd}>
                                <View >
                                <View style={styles.rowBetween}>
                                        <Text style={styles.subTitle}>Privacy Policy</Text>
                                        <IconFontAwesome5 style={styles.question} name="question-circle" size={18} color={'#999999'} />
                                    
                                </View>
                                </View>
                                
                            </View>
                       </TouchableOpacity>
                        <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                        
                    </View>
                    
                </View>
            </View>
        );
    }
	
}


const styles = StyleSheet.create({
    containerWrapper:{
        width: viewportWidth,
        height: viewportHeight,
    },
    imgContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    imgProfile:{
        width: 89,
        height: 89,
        borderRadius: 100
    },
    userName:{
        paddingVertical: 0,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    alignCenter:{
        paddingHorizontal: 80,
        marginBottom: 50
    },
    rowBetween:{
		flexDirection:'row',
        justifyContent:'space-between',
    },
    textCenter:{
        textAlign: 'center',
        fontWeight: '500'
    },
    bigTitle:{
        fontSize: 27,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    conatinerPadd:{
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    subTitle:{
        fontSize: 18,
        fontWeight: '400'
    },
    colored:{
        fontSize: 18,
        fontWeight: '400',
        color: '#999999'
    },
    bigTitle2:{
        paddingVertical: 16,
        paddingHorizontal: 20,
        fontSize: 27,
        fontWeight: 'bold',
    },
    question:{
        paddingTop:2
    }


})