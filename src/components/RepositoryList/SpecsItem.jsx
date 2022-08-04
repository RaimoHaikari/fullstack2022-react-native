import { View, StyleSheet} from "react-native";
import { formatNumber } from "../../utils/HelperFunctions";

import Text from "../Text";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
});

/*
const formatNumber = (num) => {

    if(num < 1000)
        return '' + num;

    const x = Math.round(num / 100)  / 10;

    return `${x}K`;
}
*/

const SpecsItem = ({ title, value }) => {

    //console.log(`${title}-specs`);
    
    return (
        <View testID={`${title}-specs`} style={styles.container}>
            <Text textAlign="center" fontWeight="bold">{formatNumber(value)}</Text>
            <Text textAlign="center">{title}</Text>
        </View>
    )
}

export default SpecsItem;