import React from 'react';
import {Text, View} from 'react-native';
import strings from '../locales/strings';

const Header = (props) => {
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>{strings.header}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;