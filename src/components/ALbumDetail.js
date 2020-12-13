import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist,thumbnail_image, image, url } = album;

    return (

        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    {/* <Image source={{uri: props.album.thumbnail_image}}/> */}
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContainerStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url) }>
           Buy Now!
           </Button>
            </CardSection>
        </Card>

    );
};

const styles = StyleSheet.create({
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontWeight: "bold",
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }
});

export default AlbumDetail;