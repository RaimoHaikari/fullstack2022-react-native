import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorLoginBtn: {
        color: theme.colors.loginBtnTxt
    },
    colorLoginBtnDisabled: {
        color: theme.colors.loginBtnTxtDisabled
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold
    },
    centered: {
        textAlign: "center"
    }
});

const Text = ({ color, fontSize, fontWeight, textAlign, style, ...props }) => {

    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'loginBtnTxt' && styles.colorLoginBtn,
        color === 'loginBtnTxtDisabled' && styles.colorLoginBtnDisabled,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        textAlign === 'center' && styles.centered,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;