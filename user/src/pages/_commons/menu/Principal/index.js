import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './../../Header';
import * as MagicMove from "react-native-magic-move";

class MenuPrincipal extends React.Component {

    state = {
        data: [
          { id: "00", name: "Bíblia", color: "", action: "biblia" },
          { id: "01", name: "Dicionário", color: "", action: "dicionario" },
          { id: "02", name: "Promessa", color: "", action: "promessa" },
          { id: "03", name: "Por do Sol", color: "", action: "biblia" },
          { id: "04", name: "Bíblia", color: "", action: "biblia" },
          { id: "05", name: "Dicionário", color: "", action: "dicionario" },
          { id: "06", name: "Promessa", color: "", action: "promessa" },
        ]
    };


    handleOnPress= key => event => {
        if(key.action === 'biblia') {
            Actions.biblia()   
        } else if(key.action === 'dicionario') {
            Actions.dicionario()        
        } else if(key.action === 'promessa') {
            Actions.promessa()        
        } 
    }

    render() {

        return(
            <MagicMove.Scene>
                <MagicMove.View id="logo" duration="10">

                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>{
                            return(
                                <TouchableOpacity 
                                    key={item}
                                    onPress={ this.handleOnPress(item) }
                                    style={styles.grid}>
                                    
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </SafeAreaView>
                </MagicMove.View>
            </MagicMove.Scene>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     /* marginTop: 40,*/
      width: "100%",
      backgroundColor: '#fff',
      paddingLeft: '2%'
    },
    grid: {
        width: '45%',
        marginTop: 10,
        marginRight: '2%',
        marginLeft: '2%',
    },
    button: {
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#2196F3',
        borderRadius: 7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
  });

export default MenuPrincipal;

  