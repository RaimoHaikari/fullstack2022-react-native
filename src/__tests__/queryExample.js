import { Text, View } from "react-native";
import SpecsItem from "../components/SpecsItem";
import { render } from "@testing-library/react-native";

const Greeting = ({ name }) => {
    return (
        <View>
            <Text>Hello {name}!</Text>
        </View>
    )
}

describe('Greeting', () => {
    it('renders a greeting message based on the name prop', () => {
        const { debug, getByText } = render(<Greeting name="Kalle" />);

        debug();

        expect(getByText('Hello Kalle!')).toBeDefined();
    })

    it('another test', () => {

        const { debug, getByText } = render(<SpecsItem title="stars" value={30867}/>);
        debug();
        expect(getByText('30.9K')).toBeDefined();
    });
})