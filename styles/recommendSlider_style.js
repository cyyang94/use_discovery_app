import { StyleSheet, Dimensions, Platform } from 'react-native';


const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeightRecommend = viewportHeight * 0.3;
const slideWidthRecommend = wp(75);
const itemHorizontalMarginRecommend = wp(2);

export const sliderWidthRecommend = viewportWidth;
export const itemWidthRecommend = slideWidthRecommend + itemHorizontalMarginRecommend * 2;

const entryBorderRadius = 10;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidthRecommend,
        height: slideHeightRecommend,
        paddingHorizontal: itemHorizontalMarginRecommend,
        // paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMarginRecommend,
        right: itemHorizontalMarginRecommend,
        bottom: 18,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: "black"
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 6,
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
        paddingHorizontal: 20

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
        fontWeight: "bold",
        marginBottom: 2,
        width: 150
    },

    textEventName: {
        fontSize: 12,
        fontWeight: "bold",
         marginBottom: 2,
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
        fontWeight: "bold",
        textAlign: "center"
    },

    textDay: {
        fontSize: 30,
        fontWeight: "bold"
    },

    textYear: {
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center"
    },

    textDash: {
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 4
    },

    saleCard: {
        backgroundColor: "#fff",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        position:"absolute",
        top: 8,
        right: -4,
        zIndex: 1,
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
