import  React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, TouchableOpacity, Image,} from 'react-native';

import SegmentedControlTab from "react-native-segmented-control-tab";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { sliderWidth, itemWidth } from '../styles/bannerEventSlider_style';
import { sliderWidthCategories, itemWidthCategories } from '../styles/categoriesSlider_style';
import { sliderWidthRecommend, itemWidthRecommend } from '../styles/recommendSlider_style';

import { sliderWidthArticle, itemWidthArticle } from '../styles/articleSlider_style';


import BannerEventSlider from '../components/BannerEventSlider';
import CategoriesSlider from '../components/CategoriesSlider';
import RecommendSlider from '../components/RecommendSlider';
import ArticleSlider from '../components/ArticleSlider';
import LocationListView from '../components/LocationListView';
// import EventBannerCarousel from '../components/EventBannerCarousel'


import { bannerEvent, categoriesItem, bannerRecommend, bannerArticle, } from '../api/Api';


import qrcode from '../assets/qrcode.png';

const {width:width} = Dimensions.get('window')
const SLIDER_1_FIRST_ITEM = 1;
// const { navigation } = this.props;


export class HomeScreen extends Component {

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
            selectedIndex: 0
        };
    }

	_renderItemBannerEvent ({item, index}) {
    	return <BannerEventSlider data={item} even={(index + 1) % 2 === 0} />;   
    }

    _renderItemWithParallaxBannerEvent ({item, index}, parallaxProps) {
        return (
            <BannerEventSlider
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />     
        );   
	}

	_renderItemCategories ({item, index}) {
    	return <CategoriesSlider data={item} even={(index + 1) % 2 === 0} />;   
    }

    _renderItemWithParallaxCategories ({item, index}, parallaxProps) {
        return (
            <CategoriesSlider
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />     
        );   
	}

	_renderItemRecommend ({item, index}) {
    	return <RecommendSlider data={item} even={(index + 1) % 2 === 0} />;   
    }

    _renderItemWithParallaxRecommend ({item, index}, parallaxProps) {
        return (
            <RecommendSlider
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />     
        );   
	}

	_renderItemArticle ({item, index}) {
    	return <ArticleSlider data={item} even={(index + 1) % 2 === 0} />;   
    }

    _renderItemWithParallaxArticle ({item, index}, parallaxProps) {
        return (
            <ArticleSlider
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />     
        );   
    }
    

	
	bannerEvent () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={bannerEvent}
                  renderItem={this._renderItemWithParallaxBannerEvent}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={bannerEvent.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'#6247AA'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={'#000'}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.8}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                  dotContainerStyle={styles.dotContainerStyle}
                />
            </View>
        );
	}
	
	categoriesItem () {
        return (
            <View style={styles.exampleContainer}>
               
                <Carousel
                  data={categoriesItem}
                  renderItem={this._renderItemCategories}
                  sliderWidth={sliderWidthCategories}
                  itemWidth={itemWidthCategories}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
	}
	
	bannerRecommend () {
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  data={bannerRecommend}
                  renderItem={this._renderItemRecommend}
                  sliderWidth={sliderWidthRecommend}
                  itemWidth={itemWidthRecommend}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
	}
	
	bannerArticle () {
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  data={bannerArticle}
                  renderItem={this._renderItemArticle}
                  sliderWidth={sliderWidthArticle}
                  itemWidth={itemWidthArticle}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
    }
    
	locationEvent (){
        return(
            <LocationListView navigation={this.props.navigation}/>   
        );
    }

	render(){

		const event = this.bannerEvent();
		const categories = this.categoriesItem();
		const recommend = this.bannerRecommend();
		const article = this.bannerArticle();
		const locationEvent = this.locationEvent();


		return (

			<View style={styles.paddContainer}>
			    <View style={styles.inputContainer}>
                    <IconFontAwesome5  name="search" size={16} color={'rgba(60, 60, 67, 0.60)'} 
                        style={styles.inputIconSearch}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Search event'}
                        placeholderTextColor={'#000'}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity  style={styles.btnIconMicrophone}>
                        <IconFontAwesome5  name="microphone" size={16} color={'rgba(60, 60, 67, 0.60)'} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.btnIconQRcode}>
                    
                        <Image style={styles.imgQRcode} source={qrcode}/>
                    </TouchableOpacity>

                
                
                    
                </View>

                <ScrollView style={styles.containerTab}>
                   <View style={styles.tab}>
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
                    
                        <View style={styles.tabContent}>
                            <Text style={styles.boldTitle}>Discover</Text>
                            <Text style={styles.smallTitle}>The most popular event in town</Text>

                            <SafeAreaView style={styles.safeArea}>
                                <View style={styles.container}>
                                    <StatusBar
                                        translucent={true}
                                    />
                                    <View
                                        style={styles.scrollview}
                                        scrollEventThrottle={200}
                                        directionalLockEnabled={true}
                                    >
                                        { event }
                                    
                                    </View>
                                </View>
                            </SafeAreaView>

                            <View style={styles.containerCat}>
                                <Text style={styles.subTitle}>Categories</Text>

                                <SafeAreaView style={styles.safeArea}>
                                    <View style={styles.container}>
                                        <StatusBar
                                            translucent={true}
                                            // backgroundColor={'rgba(0, 0, 0, 0.3)'}
                                            // barStyle={'dark-content'}
                                        />
                                        <View
                                        style={styles.scrollview}
                                        scrollEventThrottle={200}
                                        directionalLockEnabled={true}
                                        >
                                            { categories }
                                            
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>

                            <View style={styles.containerCat}>
                                <View style={styles.row}>
                                    <Text style={styles.subTitle}>Recommeded for you</Text>
                                    <TouchableOpacity >
                                        <Text style={styles.btnSeeAll}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                            
                                <SafeAreaView style={styles.safeArea}>
                                    <View style={styles.container}>
                                        <StatusBar
                                            translucent={true}
                                        />
                                        <View
                                            style={styles.scrollview}
                                            scrollEventThrottle={200}
                                            directionalLockEnabled={true}
                                        >
                                            { recommend }
                                            
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>

                            <View style={styles.containerArticle}>
                                
                                <View style={styles.row}>
                                    <Text style={styles.subTitle}>Article </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetailScreen')}>
                                        <Text style={styles.btnSeeAll}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <SafeAreaView style={styles.safeArea}>
                                    <View style={styles.container}>
                                        <StatusBar
                                            translucent={true}
                                            // backgroundColor={'rgba(0, 0, 0, 0.3)'}
                                            // barStyle={'dark-content'}
                                            />
                                        <View
                                            style={styles.scrollview}
                                            scrollEventThrottle={200}
                                            directionalLockEnabled={true}
                                        >
                                            { article }
                                            
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>
                        

                        
                        </View>
                
                
                    }

                    { this.state.selectedIndex === 1 && 
                    
                        <View style={styles.tabContent2}>
                            <Text style={styles.smallTitle2}>Event Near</Text>
                            <Text style={styles.boldTitle2}>Tengerang</Text>

                            <View style={styles.container}>
                        
                                <SafeAreaView style={styles.safeArea}>
                                    <View style={styles.container}>
                                        <StatusBar
                                            translucent={true}
                                            // backgroundColor={'rgba(0, 0, 0, 0.3)'}
                                            // barStyle={'dark-content'}
                                            />
                                        <TouchableOpacity  >
                                            { locationEvent }
                                            
                                        </TouchableOpacity>
                                    </View>
                                </SafeAreaView>
                            </View>

                        </View>
                    
                    }

                </ScrollView>
		    </View>
		);
	}
}


const styles = StyleSheet.create({

    paddContainer: {
    },

    inputContainer: {
        top: 50,
        left: 10,
    },

    inputIconSearch: {
        position: "absolute",
		top: 10,
		left: 10,
    },

    input: {
        width: width - 80,
        height: 36,
        borderRadius: 10,
        backgroundColor: "rgba(118, 118, 128, 0.12)",
        fontSize: 17,
        paddingLeft: 35,
    },
    btnIconMicrophone: {
        position: "absolute",
        top: 10,
		right: 90,
    },

    btnIconQRcode: {
        position: "absolute",
        top: 3,
		right: 25,
       
    },

    imgQRcode: {
        width: 30,
        height: 30,
    },

    tab: {
        paddingHorizontal:16
    },  

    containerTab: {
        marginTop: 70,
        padding: 0
       
    },

    paginationContainer: {
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        marginHorizontal: 0
    },

    dotContainerStyle: {
        marginHorizontal: 4
    },

    boldTitle: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 15
    },

    
    smallTitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    },

    containerCat: {
        padding: 16,
    },

    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 8,
        marginBottom: 10
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between"
       
    },

    btnSeeAll: {
        alignSelf: "flex-end",
        paddingTop: 6
    },

    containerArticle: {
        marginBottom: 70,
        padding: 16,
    },

    boldTitle2: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 16

        
    },

    
    smallTitle2: {
        fontSize: 16,
        // paddingHorizontal: 20,
        marginTop: 15
        // marginBottom: 20
    },

    tabContent2: {
        marginHorizontal:36,
        marginBottom: 40
    }

    
});