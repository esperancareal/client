import React from  'react';
import { Stylesheet, Text, View } from 'react-native';
import * as MagicMove from "react-native-magic-move";

class BibliaPrincipal extends React.Component {

    render() {
        return(
            <MagicMove.Scene>
                <MagicMove.View id="logo" duration="10">
                    <Text>Bíblia 2</Text>
                </MagicMove.View>
            </MagicMove.Scene>
        );
    }
}

export default BibliaPrincipal;