import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import ticket from '../assets/ticket.png';
import ticket2 from '../assets/ticket2.png';

export class TicketsScreen extends Component {

    handleIndexChange = index => {
        this.setState({
          ...this.state,
          selectedIndex: index
        });
      };

    constructor (props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }

	render(){

		return (
			<View>
               <View style={styles.containerWrapper}>
                    <Text style={styles.bigTitle}>My Tickets</Text>
                    <View style={styles.containerTab}>
                        <SegmentedControlTab 
                            values={["Trending", "Nearby"]}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            tabsContainerStyle={{ height: 32, backgroundColor: '#D8D8D8', borderRadius: 5 }}
                            tabStyle={{ backgroundColor: '#D8D8D8', borderWidth: 0, borderColor: 'transparent',borderRadius: 5 }}
                            activeTabStyle={{ backgroundColor: '#6247AA', margin: 3  }}
                            tabTextStyle={{ color: '#000' }}
                            activeTabTextStyle={{ color: '#fff' }}
                        />
                    </View>
                     { this.state.selectedIndex === 0 && 
                        <ScrollView>
                            <View style={styles.containerTicket}>
                                <Image style={styles.imgTicket}  source={ticket}/>
                                <View style={styles.ticketDetail}>
                                    <View style={styles.rowBetween}>
                                        <View>
                                            <Text style={styles.bookingCode}>Booking Code</Text>
                                            <Text style={styles.bookingCodeDetail}>#A075XCV</Text>
                                        </View>
                                        <View>
                                            <View style={styles.shadow}>
                                                <TouchableOpacity style={styles.btnDetail}
                                                    onPress={() => this.props.navigation.navigate('Ticket Details')}
                                                >
                                                    <Text style={styles.btnDetailText}>Details</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.marginSeprate}>
                                        <View style={styles.rowBetween}>
                                           <View>
                                                <Text sytle={styles.eventName}>Event Name BigExpo 2020</Text>
                                                <Text style={styles.eventLocation}>Hotel Name - Tangerang</Text>
                                           </View>
                                           <View style={styles.durationContainer}>
                                                <View style={styles.rowBetween}>
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
                                </View>
                            </View>
                            <View style={styles.containerTicket}>
                                
                                <Image style={styles.imgTicket}  source={ticket}/>
                                <View style={styles.ticketDetail}>
                                    <View style={styles.rowBetween}>
                                        <View>
                                            <Text style={styles.bookingCode}>Booking Code</Text>
                                            <Text style={styles.bookingCodeDetail}>#A075XCV</Text>
                                        </View>
                                        <View>
                                            <View style={styles.shadow}>
                                                <TouchableOpacity style={styles.btnDetail}>
                                                    <Text style={styles.btnDetailText}>Details</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.marginSeprate}>
                                        <View style={styles.rowBetween}>
                                           <View>
                                                <Text sytle={styles.eventName}>Event Name BigExpo 2020</Text>
                                                <Text style={styles.eventLocation}>Hotel Name - Tangerang</Text>
                                           </View>
                                           <View style={styles.durationContainer}>
                                                <View style={styles.rowBetween}>
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
                                </View>
                            </View>
                            <View style={styles.containerTicket}>
                                <Image style={styles.imgTicket}  source={ticket}/>
                                <View style={styles.ticketDetail}>
                                    <View style={styles.rowBetween}>
                                        <View>
                                            <Text style={styles.bookingCode}>Booking Code</Text>
                                            <Text style={styles.bookingCodeDetail}>#A075XCV</Text>
                                        </View>
                                        <View>
                                            <View style={styles.shadow}>
                                                <TouchableOpacity style={styles.btnDetail}>
                                                    <Text style={styles.btnDetailText}>Details</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.marginSeprate}>
                                        <View style={styles.rowBetween}>
                                           <View>
                                                <Text sytle={styles.eventName}>Event Name BigExpo 2020</Text>
                                                <Text style={styles.eventLocation}>Hotel Name - Tangerang</Text>
                                           </View>
                                           <View style={styles.durationContainer}>
                                                <View style={styles.rowBetween}>
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
                                </View>
                            </View>
                            
                        </ScrollView>
                        
                     }
                     { this.state.selectedIndex === 1 && 
                        <ScrollView>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>x5</Text>
                            </View>
                            <View style={styles.containerTicket}>
                                
                                <Image style={styles.imgTicket2}  source={ticket2}/>
                                <View style={styles.ticketDetail2}>
                                    <View style={styles.rowBetween}>
                                        <View>
                                            <Text style={styles.vendorName}>Vendor A</Text>
                                            <Text style={styles.vendorTicketDetail}>Use this with a minimum purchase of $5</Text>
                                        </View>
                                        <View >
                                           <View style={styles.containerDiscount}>
                                                <Text style={styles.textDiscountAmount}>50%</Text>
                                                <Text style={styles.textDiscount}>Discount</Text>
                                           </View>
                                            <View style={styles.shadow}>
                                                <TouchableOpacity style={styles.btnUse}>
                                                    <Text style={styles.btnUseText}>Use</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.marginSeprate2}>
                                        <View>
                                            <Text style={styles.eventName2}>Event Name BigExpo 2020</Text>
                                            <Text style={styles.eventLocation2}>Hotel Name - Tangerang</Text>
                                        </View> 
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                     }
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
        paddingHorizontal: 20

    },
    bigTitle:{
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35
    },
    containerTab:{
        marginBottom: 20
    },
    containerTicket:{
        position: 'relative',
        marginBottom: 30
        
    },
    imgTicket:{   
        width: '100%',
        height: 170,
        resizeMode: 'stretch'
    },
    ticketDetail:{
        position: 'absolute',
        paddingHorizontal: 18,
        paddingVertical: 12,
        width: '100%'
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    bookingCode:{
        fontSize: 12,
        color: '#999999',
        marginBottom: 4
    },
    bookingCodeDetail:{
        fontSize: 14,
        fontWeight: '600'
    },
    shadow:{
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 18,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 2
    },
    btnDetail:{
        width: viewportWidth * 0.2 - 4,
        height: 26,
        justifyContent: 'center',
        backgroundColor: '#6247AA',
        borderRadius: 6,
        marginTop: 8
    },
    btnDetailText: {
        color: '#fff',
        textAlign:'center',
        fontSize: 14,
    },
    marginSeprate:{
        marginTop: 58
    },
    eventName:{
        fontSize: 12,
    },
    eventLocation:{
        fontSize: 11,
        color: '#999999',
        paddingTop: 4
    },
    durationContainer:{
        bottom: 10
    },


    textMonth:{
        fontSize: 10,
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 0
    },

    textDay:{
        fontSize: 34,
        fontWeight: "bold",
    },

    textYear:{
        fontSize: 10,
        fontWeight: "500",
        textAlign: "center"
    },

    textDash:{
        fontSize: 34,
        fontWeight: "bold",
        paddingHorizontal: 8,
        paddingVertical: 0
    },

    ticketDetail2:{
        position: 'absolute',
        paddingHorizontal: 18,
        paddingVertical: 12,
        width: '100%'
    },

    imgTicket2:{
        width: '100%',
        height: 170,
        resizeMode: 'stretch'
    },
    vendorName:{
        fontSize: 12,
        color: '#999999',
        marginBottom: 4
    },
    vendorTicketDetail:{
        fontSize: 12,
        fontWeight: '600',
        width: 210
    },
    marginSeprate2:{
        marginTop: -10
    },
    eventName2:{
        fontSize: 12,
        fontWeight: '500'
    },
    eventLocation2:{
        fontSize: 11,
        color: '#999999',
        paddingTop: 2
    },
    containerDiscount:{
        paddingTop: 25
    },
    textDiscountAmount:{
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    },
    textDiscount:{
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '500',
        marginBottom: 15
    },
    btnUse:{
        width: viewportWidth * 0.19 - 10,
        height: 26,
        justifyContent: 'center',
        backgroundColor: '#6247AA',
        borderRadius: 6,
        marginLeft: 8
    },
    btnUseText: {
        color: '#fff',
        textAlign:'center',
        fontSize: 14,
    },
    badge:{
        position:'absolute',
        top: 4,
        right: 4,
        minWidth: 25,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: "#6247AA",
        zIndex: 1,
       
    },

    badgeText:{
        fontSize: 14,
        color: "#fff",
        fontWeight: "500"
    }


    

})