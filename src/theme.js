import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        tabLink: 'white',
        loginBtnTxt: 'white',
        loginBtnTxtDisabled: '#BEBEBE',
        tabBackGround: '#202020',
        languageBadge: 'navy',
        loginBtnBG: 'navy',
        deletetnBG: 'red',
        listSeparator: '#505050',
        primary: '#0366d6',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System'
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    }
};
  
export default theme;