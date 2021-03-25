import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {

    titulo = 'Esperança Real';

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>{this.titulo}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#ddd',
    },
    titulo: {
        color: '#777',
        fontSize: 24
    }
})

export default Header;