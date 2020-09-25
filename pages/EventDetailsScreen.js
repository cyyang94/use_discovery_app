import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image, Button} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidthbannerEventCarousel } from '../styles/bannerEventCarousel_style';
import SegmentedControlTab from "react-native-segmented-control-tab";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// import EventBannerCarousel from './BannerEventCarousel';


// import * as Animatable from 'react-native-animatable';
// import Collapsible from 'react-native-collapsible';
// import Accordion from 'react-native-collapsible/Accordion';

import ReadMore from 'react-native-read-more-text';

import { bannerEventCarousel, } from '../api/Api';
import BannerEventCarousel from '../components/BannerEventCarousel';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import calendar from '../assets/calendar.png';
import pinlocation from '../assets/pinlocation.png';
import map from '../assets/map.png';
import vendor001 from '../assets/vendor001.png';
// import vendor002 from '../assets/vendor002.png';

const SLIDER_1_FIRST_ITEM = 0;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export class EventDetailsScreen extends Component {

    handleIndexChange = index => {
        this.setState({
          ...this.state,
          selectedIndex: index
        });
      };

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            selectedIndex: 0,
            // activeSections: [],
            // collapsed: true,
            // multipleSelect: false,
        };
    }

    

    _renderItembannerEventCarousel ({item, index}) {
    	return <BannerEventCarousel data={item} even={(index + 1) % 2 === 0} />;   
    }

    _renderItemWithParallaxbannerEventCarousel ({item, index}, parallaxProps) {
        return (
            <BannerEventCarousel
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />     
        );   
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
    
    // toggleExpanded = () => {
    //     this.setState({ collapsed: !this.state.collapsed });
    // };
    
    // setSections = sections => {
    //     this.setState({
    //         activeSections: sections.includes(undefined) ? [] : sections,

    //     });
    // };

    // let Example = React.createClass({
    //     renderViewMore(onPress){
    //       return(
    //         <Text onPress={onPress}>View more</Text>
    //       )
    //     },
    //     renderViewLess(onPress){
    //       return(
    //         <Text onPress={onPress}>View less</Text>
    //       )
    //     },
    // )
 
    
    bannerEventCarousel () {
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                 ref={c => this._slider1Ref = c}
                  data={bannerEventCarousel}
                  renderItem={this._renderItembannerEventCarousel}
                  sliderWidth={sliderWidthbannerEventCarousel}
                  itemWidth={sliderWidthbannerEventCarousel}
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                 
                 
                />
                <Pagination
                  dotsLength={bannerEventCarousel.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'#fff'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={'#999999'}
                //   inactiveDotOpacity={0.4}
                  inactiveDotScale={0.8}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                  dotContainerStyle={styles.dotContainerStyle}
                />
            </View>
        );
	}

	render(){

        const bannerEventCarousel = this.bannerEventCarousel();
        const { data } = this.props.route.params;
        const{ eventname, description } = data;
        // const { multipleSelect, activeSections } = this.state;

        // let { text } = this.props;

		return (
            
            <View style={styles.container}>
               
                <View style={styles.safeArea}>
                    <View>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <IconFontAwesome5 name="arrow-left" size={20} color={'#fff'} />
                        </TouchableOpacity>
                        <StatusBar
                        translucent={true}
                        // backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                        />
                        <View
                            style={styles.scrollview}
                            scrollEventThrottle={200}
                            directionalLockEnabled={true}
                        >
                            { bannerEventCarousel }
                            
                        </View>
                    </View>
                </View>
                <ScrollView>
                      
                    <View style={styles.paddContainer}>
                        <Text style={styles.bigTitle}>{eventname}</Text>
                        <Text style={styles.smallSale}>$ Free</Text>
                    
                    </View>
                    <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                    <View style={styles.paddContainer}>
                        {/* <TouchableOpacity onPress={this.toggleExpanded}>
                            <View style={styles.header}>
                            <Text style={styles.headerText}>Single Collapsible</Text>
                            </View>
                        </TouchableOpacity>
                        <Collapsible collapsed={this.state.collapsed} align="center">
                            <View style={styles.content}>
                            <Text>
                                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                                ribs
                            </Text>
                            </View>
                        </Collapsible> */}

                        <View>
                            <View style={styles.card}>
                                <ReadMore
                                numberOfLines={1}
                                onReady={this._handleTextReady}
                                renderTruncatedFooter={this._renderTruncatedFooter}
                                renderRevealedFooter={this._renderRevealedFooter}
                                >
                                    
                                <Text style={styles.cardText}>
                                {description}
                                </Text>
                                </ReadMore>
                            </View>
                        </View>


                    
                    </View>
                    <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}></View>
                    
                    <View >
                        <View style={styles.paddContainer}>
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

                        <View style={styles.wrapperSection}>

                        { this.state.selectedIndex === 0 && 
                        
                            <View style={styles.wrapperSection}>
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
                                <View style={styles.mapContainerWrapper}>
                                    <Text style={styles.subText}>Location</Text>
                                    
                                </View>
                                <View style={styles.mapContainer}>
                                    <Image source={map}/>
                                    {/* <MapView
                                        provider={PROVIDER_GOOGLE}
                                        initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                        }}
                                    /> */}
                                </View>
                                
                                
                                
                            </View>
                            
                        }
                        { this.state.selectedIndex === 1 && 
                        
                            <View style={{marginBottom:60}}>
                                <View>
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

                                <View>
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
                                <View>
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
                    
                        }
                        
                        </View>
                    
                        </View>
                </ScrollView>
                   
                <View style={styles.bottomView}>
                    <View style={styles.rowBetween}>
                        <View>
                        <Text style={styles.ticketPrice}>Ticket Price</Text>
                        <Text stylee={styles.priceDetail}>FREE</Text>
                        </View>
                        <View style={styles.shadow}>
                        <TouchableOpacity style={styles.btnRegister}>
                            <Text style={styles.textBtnRegister}>Register</Text>
                        </TouchableOpacity>
                        </View>
                       
                    </View>
                   
                </View>
            </View>
        );
    }
	
}

const styles = StyleSheet.create({

    paddContainer: {
        padding: 25,
        // flex: 1,
        
    },
    
    paginationContainer: {
        position: "absolute",
        bottom: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingVertical: 0
    },

    bigTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },

    smallSale: {
        fontSize: 14,
    },

    row: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
       
    },

    imgContainer: {
        paddingVertical: 10,
        paddingHorizontal: 43
       
    },

    imgCalendar: {
        width: 20,
        height: 21
    },

    detailContainer: {
        paddingTop: 13,
        paddingBottom: 20
    },

    date: {
        marginBottom:10
    },

    imgContainer2: {

        paddingHorizontal: 43
       
    },

    imgPinLocation: {
        width: 20,
        height: 21
    },

    detailContainer2: {
        // paddingVertical: 43,
    },

    cardText: {
        color: '#999999'
    },

    wrapperSection: {
        marginBottom: 40,
    },

    subText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },

    mapContainerWrapper: {
       paddingHorizontal: 25,
       paddingVertical: 25
    },

    mapContainer: {
        width: viewportWidth,
        height: 100
    },


    bottomView: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 82,
        width: '100%',
        backgroundColor: '#f8f8f6',
        // backgroundColor : "blue",
        padding: 20

    },

    container: {
        height: viewportHeight,
        // backgroundColor: 'red'
    },

    rowBetween: {
        flexDirection: 'row',
        justifyContent: "space-between"
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
        // paddingHorizontal: 8,
        // paddingVertical: 8,
        width: '100%',
        textAlign:'center',
        fontWeight: 'bold'
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
        fontWeight: '600',
    },
   

    vendorDetailBox: {
        width: viewportWidth * 0.55 - 4,
    },

    btnBack:{
        position: 'absolute',
        paddingHorizontal:20,
        paddingVertical: 60,
        zIndex:1
    }
    
});