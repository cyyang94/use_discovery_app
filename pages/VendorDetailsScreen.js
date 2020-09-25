import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import InputSpinner from "react-native-input-spinner";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import calendar from '../assets/calendar.png';
import pinlocation from '../assets/pinlocation.png';
import booth from '../assets/booth.png';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export class VendorDetailsScreen extends Component {


    constructor(props) {
		super(props);
		this.state = {
			value: 1,
			valueReal: 1.5,
			// colorLeft: this.getRandomColor(),
			// colorRight: this.getRandomColor(),
		};
	}

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: "#6247AA", marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
    
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: "#6247AA", marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
      }
    
      _handleTextReady = () => {
        // ...
      }

	render(){

		return (
        
            <View style={{flex: 1}}>
                <View style={{flex: 0.9}}>
                    <ScrollView>
                        <View style={styles.containerWrapper}>
                            <Text style={styles.bigVendorName}>Vendor A</Text>
                            <View style={styles.card}>
                                <ReadMore
                                    numberOfLines={2}
                                    onReady={this._handleTextReady}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                >
                                    
                                <Text style={styles.cardText}>
                                    We have many product to sell here, don’t forget to come this tuesday to our booth. We also have many activies and rewards ! Our activities is :
                                </Text>
                                </ReadMore>
                            </View>
                            

                            <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>

                            <View style={styles.containerSection}>
                                <View style={styles.row}>
                                    <View style={styles.imgContainer}>
                                        <Image style={styles.imgCalendar} source={calendar}/>
                                    </View>
                                    <View style={styles.detailContainer}>
                                        <Text style={styles.date}>14 May 2020 - 28 Jun 2020</Text>
                                        <Text style={styles.date}>10:00 - 23:59 (Monday - Saturday)</Text>
                                        <Text style={styles.date}>Closed on Sunday</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={styles.imgContainer2}>
                                        <Image style={styles.imgPinLocation} source={pinlocation}/>
                                    </View>
                                    <View style={styles.detailContainer2}>
                                        <Text style={styles.date}>Hotel ABC</Text>
                                        <Text style={styles.date}>East Pademangan no.12 Block C</Text>
                                        <Text style={styles.date}>North Jakarta, Indonesia</Text>
                                        


                                    </View>
                                </View>
                                
                            </View>
                   

                            <View style={styles.containerSectionImage}>
                                <Text style={styles.boldBooth}>Booth Location</Text>  
                            </View>
                            <View>
                                <Image style={styles.imgBooth} source={booth} />  
                            </View>

                            <View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity style={styles.btnJoin}>
                                        <Text style={styles.textBtnJoin}>Join</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textSmall}>*Scan QR only applicable on the booth</Text>
                                </View>
                            </View>
                           
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex: 0.1}}>
                    <View style={styles.bottomView}>
                        <View style={styles.centerButton}>
                           
                            <View style={styles.shadow}>
                                <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('OrderCompleteScreen')}>
                                    <Text style={styles.textBtnRegister}>Scan OR on Booth</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        
                    </View>
                  
                </View>
            </View>
                  
            
            
        );
    }
	
}

const styles = StyleSheet.create({

    containerWrapper:{
        paddingTop:20
    },

    bigVendorName:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    card:{
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    cardTitle:{
        color: '#999999',
        marginBottom: 3
    },
    cardText:{
        color: '#999999',
    },
    containerSection:{
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    rowBetween:{
		flexDirection:'row',
		justifyContent:'space-between'
    },
    row:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row', 
    },

    imgContainer:{
        paddingVertical: 10,
        paddingHorizontal: 43
    },
    imgCalendar:{
        width: 20,
        height: 21
    },
    detailContainer:{
        paddingTop: 13,
        paddingBottom: 20
    },
    date:{
        marginBottom:10
    },
    imgContainer2:{
        paddingHorizontal: 43
    },
    imgPinLocation:{
        width: 20,
        height: 21
    },

   
    boldBooth:{
        fontSize: 25,
        fontWeight: '600',
        marginBottom:10,
    },

    containerSectionImage:{
        paddingVertical:10,
        paddingHorizontal:20
    },
    imgBooth:{
        width: '100%',
        height: 180,
        resizeMode: 'stretch'
    },

    btnContainer:{
        paddingVertical: 20,
        alignItems: 'center'
    },
    btnJoin: {
        borderColor: '#6247AA',
        borderWidth: 1,
        borderRadius: 20,
        height: 37,
        width: viewportWidth * 0.23 - 4,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textBtnJoin:{
        color: '#6247AA',
        fontWeight: '600'
    },

    textSmall:{
        color:'#999999',
        paddingVertical: 14
    },

    bottomView: {
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 82,
        width: '100%',
        backgroundColor: '#f8f8f6',
        padding: 20
    },

    centerButton:{
        alignItems: 'center',
    },

    btnRegister: {
        backgroundColor: '#6247AA',
        borderRadius: 20,
        height: 37,
        width: viewportWidth * 0.8 / 1.6,
        // width: viewportWidth,
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    shadow: {
        position: 'relative',
        top: 0,
        bottom: 18,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
        borderRadius: 2
    },
    textBtnRegister: {
        color: '#fff',
        width: '100%',
        textAlign:'center',
        fontWeight: 'bold'
    },

    




    
});