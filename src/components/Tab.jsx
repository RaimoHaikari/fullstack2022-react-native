import { Text, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        color: theme.colors.tabLink, 
        fontSize: theme.fontSizes.subheading, 
        fontWeight: theme.fontWeights.bold
    }
});

const Tab = ({ title, target }) => {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(target)
    }

    return (
        <Pressable
            onPress={clickHandler}
            style={styles.container}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Tab;