import { View, StyleSheet } from 'react-native';
import Text from '../Text';


import theme from "../../theme";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        paddingBottom: 10,
        borderBottomColor: theme.colors.textSecondary,
        borderBottomWidth: 2,
        borderStyle: "dotted"
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


/*
 * Samaa komponenttia käyttävät:
 * - kirjautuneen käyttäjän arvostelut listaava näkymä
 * - yksittäisen kirjaston arviot listaava näkymä,
 * joten tarkistetaan pitääkö tulostaa arvostelijan nimi vaiko kirjaston nimi....
 */
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

                {
                    typeof item.user !== 'undefined'
                    && <Text style={styles.textSeparator} fontWeight="bold" fontSize="subheading">{item.user.username}</Text>
                }

                {
                    typeof item.repositoryId !== 'undefined'
                    && <Text style={styles.textSeparator} fontWeight="bold" fontSize="subheading">{item.repositoryId}</Text>
                }
                
                <Text style={styles.textSeparator} color="textSecondary">{dateStr}</Text>
                <Text>{item.text}</Text>
            </View>
        
        </View>
    )
};

export default ReviewsListItem;