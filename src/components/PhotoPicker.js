import React, {useState, useEffect} from 'react';
import {Button, Image, View, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const PhotoPicker = ({}) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestCameraRollPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permission to make this work!')
                }
            }
        }
    }, [])

    const takePhoto = async () => {
        const img = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [16, 9],
            quality: 1
        })

        console.log(img)

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }


    return (
        <View style={styles.wrapper}>
            <Button title={'Take photo'} onPress={takePhoto}/>
            {image && <Image style={styles.image} source={{uri: image}}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})
