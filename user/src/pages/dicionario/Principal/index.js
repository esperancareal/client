import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as MagicMove from "react-native-magic-move";

class DicionarioPrincipal extends React.Component {

    render() {
        return(
            <MagicMove.Scene>
                <MagicMove.View id="logo" duration="10"> 
                    <Text>Dicionário</Text>
                </MagicMove.View>
            </MagicMove.Scene>
        );
    }
}

export default DicionarioPrincipal;