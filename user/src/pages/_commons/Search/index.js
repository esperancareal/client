import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class Search extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <TextInput placeholder="Pesquisar" style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.2,
        backgroundColor: '#ddd',
        borderRadius: 40,
        paddingLeft: 20
    },
})

export default Search;