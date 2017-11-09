// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import en from './en';
import it from './it';
import sc from './sc';
import gm from './gm';
import es from './es';


// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
    "en": en,
    "it": it,
    "sc": sc,
    "gm": gm,
    "es": es
});

//language switch
strings.setLanguage('es')

export default strings;