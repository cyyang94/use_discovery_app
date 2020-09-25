import { StyleSheet, Dimensions, Platform } from 'react-native';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeightCategories = viewportHeight * 0.13;
const slideWidthCategories = wp(30);
const itemHorizontalMarginCategories = wp(2);

export const sliderWidthCategories = viewportWidth;
export const itemWidthCategories = slideWidthCategories + itemHorizontalMarginCategories * 2;

const entryBorderRadius = 10;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidthCategories,
        height: slideHeightCategories,
        paddingHorizontal: itemHorizontalMarginCategories,
        // paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMarginCategories,
        right: itemHorizontalMarginCategories,
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
        backgroundColor: '#97839b',
    },
    radiusMaskEven: {
        backgroundColor: '#dfb290'
    },
    textContainer: {
        justifyContent: 'center',
        // paddingTop: 20 - entryBorderRadius,
        paddingBottom: 6,
        // paddingHorizontal: 16,
        backgroundColor: '#97839b',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,

    },
    textContainerEven: {
        backgroundColor: '#dfb290'
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

    badge: {
        position:'absolute',
        top:6,
        left:12,
        minWidth:30,
        height:30,
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: "#fff",
        zIndex: 1,
       
    },

    badgeText: {
        fontSize: 16,
        color: "#6247AA",
        fontWeight: "500"
    }

 
});
