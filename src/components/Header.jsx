import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';

import theme from "../theme";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    leftColumn: {
        padding: 10
    },
    rightColumn: {
        display: 'flex',
        padding: 10
    },
    badge: { 
        backgroundColor: theme.colors.languageBadge,
        color: '#fff',
        padding: 5,
        alignSelf: 'flex-start', 
        borderRadius: 4 
    },
    textWithMargin: {
        marginBottom: 4,
        marginTop: 4
    },
    avatarImg: {
        width: 75, 
        height: 75,
        borderRadius: 4
    }
});




const TextWithHeadroom = ({ isBadge, children }) => {

    const textStyles = [
      styles.textWithMargin,
      isBadge && styles.badge
    ];
  
    return <Text style={textStyles}>{children}</Text>;
};


const Header = ({ fullName, description, language, ownerAvatarUrl }) => {
  return (
    <View style={styles.container}>
        <View style={styles.leftColumn}>
            <Image
                source={{uri: ownerAvatarUrl,}}
                style={styles.avatarImg}
            />
        </View>
        <View style={styles.rightColumn}>
            <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
            <TextWithHeadroom>{description}</TextWithHeadroom>
            <TextWithHeadroom isBadge>{language}</TextWithHeadroom>
        </View>
    </View>
  );
};

export default Header;