import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import avatar from '../assets/avatar.png';

export class ChatScreen extends Component {

	render(){

		return (
			<View>
               	<View style={styles.containerWrapper}>
					<View style={styles.containerHorizontal}>
						<View style={styles.rowBetween}>
							
							<Text style={styles.bigTitle}>Message</Text>
							<View style={styles.rowBetween}>
								<View style={{paddingHorizontal:20}}>
									<TouchableOpacity style={styles.btnDots}>
										<IconFontAwesome5 style={styles.btnDotsText} name="ellipsis-h" size={14} color={'#6247AA'} />
									</TouchableOpacity>
								</View>
								<View>
									<TouchableOpacity style={styles.btnMessage}>
										<IconFontAwesome5 style={styles.btnMessageText} name="edit" size={14} color={'#e3e3e4'} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={styles.inputContainer}>
							<IconFontAwesome5  name="search" size={16} color={'rgba(60, 60, 67, 0.60)'} 
								style={styles.inputIconSearch}
							/>
							<TextInput
								style={styles.input}
								placeholder={'Search'}
								placeholderTextColor={'#000'}
								underlineColorAndroid='transparent'
							/>
							<TouchableOpacity  style={styles.btnIconMicrophone}>
								<IconFontAwesome5  name="microphone" size={16} color={'rgba(60, 60, 67, 0.60)'} />
							</TouchableOpacity>
						</View>
					</View>
					
                    <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                   
                        <ScrollView>
                            <View>
								<TouchableOpacity>
									<View style={styles.containerList}>
										<View style={styles.rowBetween}>
											<View style={styles.row}>
												<View style={styles.unreadDot}>
													
												</View>
												<View style={styles.avatarContainer}>
													<Image style={styles.imgAvatar} source={avatar} />
												</View>
												<View>
													<Text numberOfLines={1} style={styles.eventName} >Event Name</Text>
													<Text numberOfLines={1} style={styles.messagePreview}>Message Preview</Text>
												</View>
											</View>
											<View style={styles.rowBetween}>
												<Text style={styles.time}>9:41 AM</Text>
												<IconFontAwesome5 style={styles.clock}  name="clock" size={16} color={'rgba(60, 60, 67, 0.60)'} />
											</View>
										</View>
									</View>
									<View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.containerList}>
										<View style={styles.rowBetween}>
											<View style={styles.row}>
												<View style={styles.unreadDot}>
													
												</View>
												<View style={styles.avatarContainer}>
													<Image style={styles.imgAvatar} source={avatar} />
												</View>
												<View>
													<Text numberOfLines={1} style={styles.eventName} >Event Name</Text>
													<Text numberOfLines={1} style={styles.messagePreview}>Message Preview</Text>
												</View>
											</View>
											<View style={styles.rowBetween}>
												<Text style={styles.time}>9:41 AM</Text>
												<IconFontAwesome5 style={styles.clock}  name="clock" size={16} color={'rgba(60, 60, 67, 0.60)'} />
											</View>
										</View>
									</View>
									<View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
								</TouchableOpacity>
								<TouchableOpacity>
									<View style={styles.containerList}>
										<View style={styles.rowBetween}>
											<View style={styles.row}>
												<View style={styles.unreadDot}>
													
												</View>
												<View style={styles.avatarContainer}>
													<Image style={styles.imgAvatar} source={avatar} />
												</View>
												<View>
													<Text  numberOfLines={1} style={styles.eventName} >Event Name</Text>
													<Text numberOfLines={1} style={styles.messagePreview}>lorem ipsumlorem ipsumlorem ipsumlorem ipsum</Text>
												</View>
											</View>
											<View style={styles.rowBetween}>
												<Text style={styles.time}>9:41 AM</Text>
												<IconFontAwesome5 style={styles.clock}  name="clock" size={16} color={'rgba(60, 60, 67, 0.60)'} />
											</View>
										</View>
									</View>
									<View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
								</TouchableOpacity>
							</View>
							
                            
                        </ScrollView>
                        
                  
                        
               </View>
			   
            </View>
            
        );
    }
	
}

const styles = StyleSheet.create({
    containerWrapper:{
        width: viewportWidth,
        height: viewportHeight,
        paddingVertical: 64,
	},
	containerHorizontal:{
		paddingHorizontal: 20
	},
    bigTitle:{
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 10
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
	btnDots:{
        width:30,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#e3e3e4',
        borderRadius: 100,
        marginTop: 8
	},
	btnDotsText:{
		textAlign: 'center'
	},
	btnMessage:{
        width:30,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#6247AA',
        borderRadius: 100,
        marginTop: 8
	},
	btnMessageText:{
		textAlign: 'center'
	},
	inputContainer:{
		marginBottom: 20
	},
	input:{
		width: '100%',
		height: 36,
		backgroundColor: '#E8E8E9',
		borderRadius: 10,
		paddingHorizontal: 34,
		fontSize: 17
	},
	inputIconSearch:{
		position: 'absolute',
		top: 10,
		left: 10,
		zIndex: 1
	},
	btnIconMicrophone: {
		position: 'absolute',
		top: 10,
		right: 14,
		zIndex: 1
	},
	containerList:{
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	unreadDot:{
		width: 14,
		height:14,
		backgroundColor: '#007AFF',
		borderRadius: 100,
		marginRight: 10,
		marginVertical: 22
	},

	avatarContainer:{
		marginRight: 20
	},
	imgAvatar:{
		width: 60,
		height: 60,
		borderRadius: 100
	},
	eventName:{
		fontSize:20
	},
	messagePreview:{
		fontSize: 16,
		color: '#999999',
		width: 200
	},
	time:{
		color: '#999999',
		marginRight: 10
	},
	clock:{
		paddingTop: 2
	}


    

})