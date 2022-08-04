import { View, StyleSheet } from 'react-native';
import Text from '../Text';


import theme from "../../theme";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        margin: 5
    },
    leftColumn: {
        padding: 10
    },
    rightColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    textSeparator: {
        marginBottom: 20
    },
    ratingsText:{
        borderWidth: 3,
        borderRadius: 25,
        borderColor: theme.colors.languageBadge,
        padding: 15
    }
});



const ReviewsListItem = ({data}) => {

    const {item} = data;

    const revDate = new Date(item.createdAt);
    const dateStr = `${revDate.getDate()}.${revDate.getMonth()}.${revDate.getFullYear()}`;

    return (
        <View style={styles.container}>

            <View style={styles.leftColumn}>
                <Text style={styles.ratingsText}>{item.rating}</Text>
            </View>
            
            <View style={styles.rightColumn}>
                <Text style={styles.textSeparator} fontWeight="bold" fontSize="subheading">{item.user.username}</Text>
                <Text style={styles.textSeparator} color="textSecondary">{dateStr}</Text>
                <Text>{item.text}</Text>
            </View>
        
        </View>
    )
};

export default ReviewsListItem;