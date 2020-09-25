import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import InputSpinner from "react-native-input-spinner";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export class FormDetailsScreen extends Component {


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
                            <View style={styles.containerWrapperInput}>
                                <TextInput style={styles.inputContainer} editable={false}>
                                    <Text style={styles.inputTotal}>TOTAL : $20</Text>
                                </TextInput>
                            </View>
                            <View style={styles.containerSection}>
                                <Text style={styles.cardTitle}>2 Items:</Text>
                                <Text style={styles.cardText}>- Include Coupons</Text>
                               
                                <View>
                                    <ReadMore
                                        numberOfLines={1}
                                        onReady={this._handleTextReady}
                                        renderTruncatedFooter={this._renderTruncatedFooter}
                                        renderRevealedFooter={this._renderRevealedFooter}
                                    >
                                        
                                    <Text style={styles.cardText}>
                                        - Free Food & Drink
                                    </Text>
                                    </ReadMore>
                                </View>
                            </View>

                            <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>

                            <View style={styles.containerSection}>
                                <Text style={styles.boldHello}>Hello !</Text>
                                <View>
                                   
                                    <View style={{flexDirection: 'row',paddingHorizontal:10,paddingVertical:10 }}>
                                        <Text style={styles.colored}>Please </Text>
                                        <TouchableOpacity>
                                            <Text style={{color:'#6247AA',fontWeight:'600'}}>Login</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.colored}> / </Text>
                                        <TouchableOpacity>
                                            <Text style={{color: '#6247AA',fontWeight:'600'}}>Sign up </Text>
                                        </TouchableOpacity>
                                        <Text style={styles.colored}>to register in this event </Text>
                                    </View>
                                    
                                </View>
                                
                            </View>
                            <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>

                            <View style={styles.containerSection}>
                                <Text style={styles.boldInfo}>Your Info</Text>
                                <View>
                                   
                                <View style={styles.containerWrapperInput2}>
                                    <Text style={styles.labelText}>First Name</Text>
                                    <TextInput style={styles.inputContainer}>
                                        <Text style={styles.inputTotal}></Text>
                                    </TextInput>
                                </View>
                                <View style={styles.containerWrapperInput2}>
                                    <Text style={styles.labelText}>Last Name</Text>
                                    <TextInput style={styles.inputContainer}>
                                        <Text style={styles.inputTotal}></Text>
                                    </TextInput>
                                </View>
                                <View style={styles.containerWrapperInput2}>
                                    <Text style={styles.labelText}>Email</Text>
                                    <TextInput style={styles.inputContainer}>
                                        <Text style={styles.inputTotal}></Text>
                                    </TextInput>
                                </View>
                                    
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

    containerWrapperInput:{
        paddingHorizontal: 20,
        // marginBottom: 20  
    },

    inputContainer:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#D8D8D8',
        borderWidth: 1

    },

    inputTotal:{
        fontSize: 16,
        fontWeight: '500'

    },
    boldHello:{
        fontSize: 16,
        fontWeight: '600'
    },
    colored:{
        color: '#999999',
    },
    boldInfo:{
        fontSize: 16,
        fontWeight: '600',
        marginBottom:10,
    },

    containerWrapperInput2:{
        marginBottom: 20
    },

    labelText:{
        paddingHorizontal:10,
        color: '#999999',
        marginBottom: 4
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