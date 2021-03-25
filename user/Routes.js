import React from 'react';
import  { Router, Scene } from 'react-native-router-flux';

import MenuPrincipal from './src/pages/_commons/menu/Principal';
import Biblia from './src/pages/biblia/Principal';
import Dicionario from './src/pages/dicionario/Principal';
import Promessa from './src/pages/promessa/Principal';

import * as MagicMove from "react-native-magic-move";

  
class Routes extends React.Component {

    render() {
        return(
            <MagicMove.Provider>
                <Router>
                    <Scene key = "root">
                        <Scene key="menu" component={ MenuPrincipal } title="Menu"  initial={true} />
                        <Scene key="biblia" component={ Biblia } title="Biblia" />
                        <Scene key="dicionario" component={ Dicionario } title="Dicionário" />
                        <Scene key="promessa" component={ Promessa } title="Promessa" />
                    </Scene>
                </Router>
            </MagicMove.Provider>
        );
    }
}

export default Routes;