import React from 'react';
import {Text, View} from 'react-native';
import strings from '../../locales/strings';

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        alignItems: 'center',
        position: 'relative',
        elevation: 2,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.5

    },
    textStyle: {
        fontSize: 20
    }
};

strings.setLanguage('it')
// Dump, Presentation Component
const Header = (props) => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{strings.header}</Text>
        </View>); 
};
export default Header;

