import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/articleSlider_style';

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

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
            //   onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                <View style={styles.shadow} />
                <View style={styles.imageContainer}>
                    { this.image }
                    <View style={styles.radiusMask} />
                </View>
                <View style={styles.textContainer}>
                   <View style={styles.row}>
                        <View style={styles.containerWrapper}>
                            <Text style={styles.textEvent}>Event Name</Text>
                            <Text style={styles.textEventName}>BigExpo 2020 </Text>
                            <Text style={styles.textLocation}>Hotel Name - Tangerang</Text>
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
