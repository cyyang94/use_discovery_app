import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import InputSpinner from "react-native-input-spinner";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export class TicketDetailsScreen extends Component {


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
                <View style={{flex: 0.9,paddingVertical:25}}>
                    <ScrollView>
                        <View style={styles.containerWrapper}>
                            <Text style={styles.bigEventName}>Event Name Big Expo 2020</Text>
                            <View style={styles.card}>
                                <ReadMore
                                    numberOfLines={1}
                                    onReady={this._handleTextReady}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                >
                                    
                                <Text style={styles.cardText}>
                                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                                </Text>
                                </ReadMore>
                        </View>
                            <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                            <View>
                                <View style={styles.containerSection}>
                                    <View style={styles.rowBetween}>
                                        <View>
                                            <Text style={styles.ticketName}>General Ticket</Text>
                                            <Text style={styles.ticketDetailsList}>- No Coupon</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.textPrice}>$ Free</Text>
                                            <InputSpinner
                                                value={this.state.value}
                                                style={styles.spinner}
                                                buttonLeftText={
                                                    <Text>
                                                        <IconFontAwesome5 name="angle-left" size={20} color={'#6247AA'} />
                                                    </Text>
                                                }
                                                buttonRightText={
                                                    <Text>
                                                        <IconFontAwesome5 name="angle-right" size={20} color={'#6247AA'} />
                                                    </Text>
                                                }
                                                rounded={false}
                                                showBorder
                                                color={'transparent'}
                                                buttonStyle={{width:35,top:-5,}}
                                                inputStyle={{fontSize:18, top:-5}}
                                            />
                                            
                                        </View>
                                    </View>
                                </View>

                                <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>

                                <View style={styles.containerSection}>
                                    <View style={styles.rowBetween}>
                                        <View>
                                            <Text style={styles.ticketName}>VIP Ticket</Text>
                                            <Text style={styles.ticketDetailsList}>- Include Coupon</Text>
                                            <Text style={styles.ticketDetailsList}>- Free Food & Drink</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.textPrice}>$ 20</Text>
                                            <InputSpinner
                                                value={this.state.value}
                                                style={styles.spinner}
                                                buttonLeftText={
                                                    <Text>
                                                        <IconFontAwesome5 name="angle-left" size={20} color={'#6247AA'} />
                                                    </Text>
                                                }
                                                buttonRightText={
                                                    <Text>
                                                        <IconFontAwesome5 name="angle-right" size={20} color={'#6247AA'} />
                                                    </Text>
                                                }
                                                rounded={false}
                                                showBorder
                                                color={'transparent'}
                                                buttonStyle={{width:35,top:-5,}}
                                                inputStyle={{fontSize:18, top:-5}}
                                            />
                                            
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
                        <View style={styles.rowBetween}>
                            <View>
                            <Text style={styles.ticketPrice}>Ticket Price</Text>
                            <Text stylee={styles.priceDetail}>$ 20</Text>
                            </View>
                            <View style={styles.shadow}>
                            <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('Form Details')}>
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

    bigEventName:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    card:{
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    cardText:{
        color: '#999999',
        paddingHorizontal: 20
    },
    containerSection:{
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    rowBetween:{
		flexDirection:'row',
		justifyContent:'space-between'
    },
    ticketName:{
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 14
    },
    ticketDetailsList:{
        color: '#999999'
    },
    textPrice:{
        textAlign: 'center',
        fontWeight: '500',
        marginBottom:15
    },
    spinner:{
        borderRadius:100,
        borderColor: '#6247AA',
        borderWidth: 1.2,
        width: 100,
        height: 40
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
    ticketPrice: {
        color: '#999999',
        marginBottom: 2
    },
    priceDetail: {
        fontWeight: 'bold'
    },
    btnRegister: {
        backgroundColor: '#6247AA',
        borderRadius: 20,
        height: 37,
        width: viewportWidth * 0.29 - 4,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    shadow: {
        position: 'relative',
        top: 0,
        left: 8,
        right: 8,
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