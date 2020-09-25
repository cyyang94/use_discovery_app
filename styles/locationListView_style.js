import { StyleSheet, Dimensions, Platform } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.3;
const slideWidth = viewportWidth;
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 10;

export default StyleSheet.create({
   
    containerBox: {
        marginBottom: 20,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        borderRadius: entryBorderRadius
    },

    // shadow: {
    //     position: 'absolute',
    //     top: 0,
    //     left: itemHorizontalMargin,
    //     right: itemHorizontalMargin,
    //     bottom: 18,
    //     shadowColor: colors.black,
    //     shadowOpacity: 0.25,
    //     shadowOffset: { width: 0, height: 10 },
    //     shadowRadius: 10,
    //     borderRadius: entryBorderRadius
    // },
    imageContainer: {
        // flex: 1,
        // marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        // backgroundColor: 'white',
        // borderTopLeftRadius: entryBorderRadius,
        // borderTopRightRadius: entryBorderRadius
        position: "relative",
        // width: 900
    },
   
    image: {
        // ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        // borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        width: slideWidth -71,
        // height: slideHeight
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // height: 6,
        backgroundColor: '#fff',
    },
 
    textContainer: {
        justifyContent: 'center',
        paddingTop: 14 - entryBorderRadius,
        paddingBottom: 10,
        // paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
        paddingHorizontal: 20,
        // width: slideWidth,
      

    },
   
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        // letterSpacing: 0.5,
        textAlign: "center"
    },
    titleEven: {
        color: '#fff'
    },
    
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },

    containerWrapper: {
        // right: 10,
        // justifyContent: "space-between"
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    textEvent: {
        fontSize: 12,
        fontWeight: "400",
        marginBottom: 3,
        width: 150,
        paddingTop: 8
    },

    textEventName: {
        fontSize: 12,
        fontWeight: "400",
         marginBottom: 3,
         width: 150
         
    },

    textLocation: {
        fontSize: 9,
        fontWeight: "600",
        color: "#999999",
        width: 150
    },

    textMonth: {
        fontSize: 10,
        fontWeight: "600",
        textAlign: "center",
        paddingTop: 8
    },

    textDay: {
        fontSize: 30,
        fontWeight: "600",
    },

    textYear: {
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center"
    },

    textDash: {
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 6,
        paddingVertical: 6
    },

    saleCard: {
        backgroundColor: "#fff",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        position:"absolute",
        top: 8,
        right: -15,
        zIndex: 2,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
    

    },

    textSale: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
        color: "#6247AA"
    }
});
