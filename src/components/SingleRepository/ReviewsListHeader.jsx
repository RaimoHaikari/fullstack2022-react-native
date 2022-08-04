import { Pressable, StyleSheet, View} from 'react-native';
import Text from '../Text';
import RepositoryItem from '../RepositoryList/RepositoryItem';

import theme from "../../theme";


var styles = StyleSheet.create({
    openGithubBtn: {
        margin: 5,
        backgroundColor: theme.colors.loginBtnBG,
        padding: 10,
        borderRadius: 5,
    },
});

/*
 *
 */
const ReviewsListHeader= ({item}) => {

    return (
        <View>
        
            <RepositoryItem 
                fullName={item.fullName}
                description={item.description}
                language={item.language}
                stargazersCount={item.stargazersCount}
                forksCount={item.forksCount}
                reviewCount={item.reviewCount}
                ratingAverage={item.ratingAverage}
                ownerAvatarUrl={item.ownerAvatarUrl}
            />

            <Pressable 
                style={ styles.openGithubBtn } 
                onPress={() => console.log("Jotain tarttis tehdä")} 
                disabled={false}
            >
                <Text
                    fontWeight = "bold" 
                    color="loginBtnTxt"
                    textAlign = "center"
                >Open in GitHub</Text>
            </Pressable>

        </View>
    )
};

export default ReviewsListHeader;