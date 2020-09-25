import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/recommendSlider_style';

export default class RecommendSlider extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
            //   onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                <View style={styles.saleCard}>
                    <Text style={styles.textSale}>$ Free</Text>
                </View>
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>
                <View style={styles.textContainer}>
                   <View style={styles.row}>
                        <View style={styles.containerWrapper}>
                            <Text style={styles.textEvent}  numberOfLines={1}>Event NameEvent NameEvent NameEvent Name</Text>
                            <Text style={styles.textEventName} numberOfLines={1}>BigExpo 2020 </Text>
                            <Text style={styles.textLocation} >Hotel Name - Tangerang</Text>
                        </View>

                        <View style={styles.containerWrapper}>
                           <View style={styles.row}>
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
                   

                    
                    {/* { uppercaseTitle } */}
                    
                </View>
            </TouchableOpacity>
        );
    }
}
