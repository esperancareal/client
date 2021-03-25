import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as MagicMove from "react-native-magic-move";

class PromessaPrincipal extends React.Component {

    render() {

        return(
            <MagicMove.Scene>
                <MagicMove.View id="logo" duration="10">
                    <Text>Promessa</Text>
                </MagicMove.View>
            </MagicMove.Scene>
        )
    }
}

export default PromessaPrincipal;