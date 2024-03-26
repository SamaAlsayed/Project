import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'

const Edit = ({ route, navigation }) => {
    const { user,pic } = route.params;
    const [firstName, setFirstName] = useState(user.name.first)
    const [lastName, setLastName] = useState(user.name.last)
    const [country, setCountry] = useState(user.location.country)
    const [points, setGpa] = useState(user.gpa)
    const [picture, setPicture] = useState(pic)


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });
        if (!result.canceled) {
            setPicture(result.assets[0].uri);
            user.pic.thumbnail = result.assets[0].uri;
        }
    };

    const handleDone = () => {
        const updatedUser = {
            ...user,
            name: { first: firstName, last: lastName },
            location: { country: country },
            pic: { thumbnail: picture },
            gpa: points
        };
        console.log('Updated User:', updatedUser)
        navigation.navigate('Landing', { updatedUser })
    }
    
    return (
        <View style={styles.container}>
            <Text>Edit User</Text>
            <TouchableOpacity onPress={pickImage}>
                <Avatar rounded size='large' source={{ uri: picture }} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.input}
                value={country}
                onChangeText={setCountry}
                placeholder="Country"
            />
            <TextInput
                style={styles.input}
                value={points} // Use points (gpa) from state
                onChangeText={setGpa}
                placeholder="GPA"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleDone}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Edit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});