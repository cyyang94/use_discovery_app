import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import InputSpinner from "react-native-input-spinner";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import vendor001 from '../assets/vendor001.png';

export class OrderCompleteScreen extends Component {


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
                <View style={{flex: 0.9,marginTop:60}}>
                    <View style={styles.containerHeader}>
                        <View style={styles.rowBetween}>
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('TicketsScreen')}>
                                    <Text style={styles.viewTicket}>View Ticket</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnUnknow}>
                                    <IconFontAwesome5 style={styles.btnStyle} name="question-circle" size={18} color={'#999999'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.headerTitle}>Order Completed !</Text>
                    </View>
                    <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                    <ScrollView>
                        <View style={styles.containerWrapper}>
                            <View>
                                <Text style={styles.remind}>Join popular activities in this event !</Text>
                                <View style={styles.paddContainerVendor}>
                                    <View style={styles.row}>
                                        <View style={styles.imgContainer3}>
                                            <Image style={styles.imgVendor} source={vendor001}></Image>
                                        </View>
                                        <View style={styles.vendorDetailBox}>
                                            <Text style={styles.boldText}>Vendor A</Text>
                                            <Text style={styles.vendorDetail}>- Lucky Prizes</Text>
                                            <Text style={styles.vendorDetail}>- Eating Competition</Text>
                                            <Text style={styles.vendorDetail}>- ETC</Text>
                                            <View style={styles.rowBetween}>
                                                <View>
                                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Vendor Details')}>
                                                        <Text style={styles.readMore}>
                                                            Read more
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={styles.btnJoin}>
                                                        <Text style={styles.textBtnJoin}>Join</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    
                                    
                                    </View>
                                    
                                </View>
                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                                <View style={styles.paddContainerVendor}>
                                    <View style={styles.row}>
                                        <View style={styles.imgContainer3}>
                                            <Image style={styles.imgVendor} source={vendor001}></Image>
                                        </View>
                                        <View style={styles.vendorDetailBox}>
                                            <Text style={styles.boldText}>Vendor A</Text>
                                            <Text style={styles.vendorDetail}>- Lucky Prizes</Text>
                                            <Text style={styles.vendorDetail}>- Eating Competition</Text>
                                            <Text style={styles.vendorDetail}>- ETC</Text>
                                            <View style={styles.rowBetween}>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={styles.readMore}>
                                                            Read more
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={styles.btnJoin}>
                                                        <Text style={styles.textBtnJoin}>Join</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    
                                    
                                    </View>
                                    
                                </View>
                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                                <View style={styles.paddContainerVendor}>
                                    <View style={styles.row}>
                                        <View style={styles.imgContainer3}>
                                            <Image style={styles.imgVendor} source={vendor001}></Image>
                                        </View>
                                        <View style={styles.vendorDetailBox}>
                                            <Text style={styles.boldText}>Vendor A</Text>
                                            <Text style={styles.vendorDetail}>- Lucky Prizes</Text>
                                            <Text style={styles.vendorDetail}>- Eating Competition</Text>
                                            <Text style={styles.vendorDetail}>- ETC</Text>
                                            <View style={styles.rowBetween}>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={styles.readMore}>
                                                            Read more
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={styles.btnJoin}>
                                                        <Text style={styles.textBtnJoin}>Join</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    
                                    
                                    </View>
                                    
                                </View>
                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                                <View style={styles.paddContainerVendor}>
                                    <View style={styles.row}>
                                        <View style={styles.imgContainer3}>
                                            <Image style={styles.imgVendor} source={vendor001}></Image>
                                        </View>
                                        <View style={styles.vendorDetailBox}>
                                            <Text style={styles.boldText}>Vendor A</Text>
                                            <Text style={styles.vendorDetail}>- Lucky Prizes</Text>
                                            <Text style={styles.vendorDetail}>- Eating Competition</Text>
                                            <Text style={styles.vendorDetail}>- ETC</Text>
                                            <View style={styles.rowBetween}>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={styles.readMore}>
                                                            Read more
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={styles.btnJoin}>
                                                        <Text style={styles.textBtnJoin}>Join</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    
                                    
                                    </View>
                                    
                                </View>
                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                                <View style={styles.paddContainerVendor}>
                                    <View style={styles.row}>
                                        <View style={styles.imgContainer3}>
                                            <Image style={styles.imgVendor} source={vendor001}></Image>
                                        </View>
                                        <View style={styles.vendorDetailBox}>
                                            <Text style={styles.boldText}>Vendor A</Text>
                                            <Text style={styles.vendorDetail}>- Lucky Prizes</Text>
                                            <Text style={styles.vendorDetail}>- Eating Competition</Text>
                                            <Text style={styles.vendorDetail}>- ETC</Text>
                                            <View style={styles.rowBetween}>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={styles.readMore}>
                                                            Read more
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={styles.btnJoin}>
                                                        <Text style={styles.textBtnJoin}>Join</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    
                                    
                                    </View>
                                    
                                </View>
                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                                <View style={styles.paddContainerVendor}>
                                    <View style={styles.row}>
                                        <View style={styles.imgContainer3}>
                                            <Image style={styles.imgVendor} source={vendor001}></Image>
                                        </View>
                                        <View style={styles.vendorDetailBox}>
                                            <Text style={styles.boldText}>Vendor A</Text>
                                            <Text style={styles.vendorDetail}>- Lucky Prizes</Text>
                                            <Text style={styles.vendorDetail}>- Eating Competition</Text>
                                            <Text style={styles.vendorDetail}>- ETC</Text>
                                            <View style={styles.rowBetween}>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={styles.readMore}>
                                                            Read more
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity style={styles.btnJoin}>
                                                        <Text style={styles.textBtnJoin}>Join</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    
                                    
                                    </View>
                                    
                                </View>
                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>

                            </View>
                           
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex: 0.1}}>
                    <View style={styles.bottomView}>
                        <View style={styles.centerButton}>
                           
                            <View style={styles.shadow}>
                                <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('OrderCompleteScreen')}>
                                    <Text style={styles.textBtnRegister}>Register</Text>
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

    containerHeader:{
        paddingHorizontal: 20,
    },
    rowBetween:{
		flexDirection:'row',
		justifyContent:'space-between'
    },
    viewTicket:{
        fontSize: 16,
        color: '#6247AA',
        fontWeight: '500',
        paddingTop: 6
    },
    btnUnknow:{
        width:30,
        height: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(118,118,128,0.12)',
        borderRadius: 100,
    },
    btnStyle:{
        textAlign: 'center'
    },
    headerTitle:{
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 10
    },
    remind:{
        paddingHorizontal: 20,
        paddingTop: 20,
        color: '#999999'
    },
    paddContainerVendor: {
        paddingVertical: 20,
        width: viewportWidth
    },

    imgContainer3: {
        paddingHorizontal: 20
    },

    imgVendor: {
        borderRadius: 10
    },

    boldText: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10
    },

    vendorDetail: {
        color: '#999999',
        marginBottom: 3,
        fontSize: 12
    },

    readMore: {
        color: '#6247AA',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10
    },

    btnJoin: {
        // backgroundColor: '#fff',
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

    vendorDetailBox: {
        width: viewportWidth * 0.55 - 4,
    },
    row: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
       
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
        // paddingHorizontal:20
    },

    btnRegister: {
        backgroundColor: '#6247AA',
        borderRadius: 20,
        height: 37,
        width: viewportWidth * 0.6 / 2,
        // width: viewportWidth,
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    shadow: {
        position: 'relative',
        top: 0,
        // left: 8,
        // right: 8,
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