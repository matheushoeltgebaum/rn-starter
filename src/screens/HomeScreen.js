import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const greeting = 'Hi there!';

    return (
    <View>
        <Text style={styles.textStyle}>{greeting}</Text>
        <Button 
            onPress={() => navigation.navigate('Components')}
            title='Go to Components Demo'
        />
        <Button 
            onPress={() => navigation.navigate('List')}
            title='Go to List Demo'
        />
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default HomeScreen;