import { View, StyleSheet } from "react-native";

import SpecsItem from "./SpecsItem";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});


const Specs = ({ stars, forks, reviews, rating }) => {

    return (
        <View style={styles.container}>
            <SpecsItem title="Stars" value={stars}/>
            <SpecsItem title="Forks" value={ forks }/>
            <SpecsItem title="Reviews" value={ reviews }/>
            <SpecsItem title="Rating" value={ rating }/>
        </View>
    )
}

export default Specs;