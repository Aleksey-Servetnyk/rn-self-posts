import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native";
import {TextInput, Button, Image} from "react-native";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {addPost} from "../store/actions/post";

export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'
    const [text, setText] = useState('')
    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    };
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Create Screen</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder='Enter Post text'
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Image
                        style={{width: '100%', height: 200, marginBottom: 10}}
                        source={{uri: img}}/>
                    <Button title={'Create post'} color={THEME.MAIN_COLOR} onPress={saveHandler}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    }
});
