import { StyleSheet, Dimensions, Platform } from 'react-native';


const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export const sliderWidthbannerEventCarousel = viewportWidth;

export default StyleSheet.create({

    slideInnerContainer: {
        width: viewportWidth,
        height: 250,
    },

    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        
     
    },
  
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    
    },
 
    textContainer: {
        justifyContent: 'center',
        paddingBottom: 10,
        paddingHorizontal: 20

    },
 
});
