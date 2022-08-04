import { useEffect } from "react";
import { Text } from "react-native";

import { useNavigate } from "react-router-native";
import useSingOut from "../hooks/useSingOut";

const SignOut = () => {

    const [signOut] = useSingOut();

    const navigate = useNavigate();

    useEffect(() => {
        
        signOut();
        navigate("/");

    }, [])


    return (
        <Text>SignOut</Text>    
    );
};

export default SignOut;