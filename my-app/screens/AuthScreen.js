import { Center, Container, Box, Text } from "native-base";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    const [userType, setUserType] = useState("FREIGHTER");
    const [isLoginPage, setIsLoginPage] = useState(true);

    const changeUserMode = () => {
        setUserType(userType === "CARRIER" ? "FREIGHTER" : "CARRIER");
    };

    return (
        <Container safeArea>
            {isLoginPage ? (
                <LoginForm
                    isCarrierUser={userType === "CARRIER"}
                    changeUserMode={changeUserMode}
                />
            ) : (
                <RegisterForm
                    isCarrierUser={userType === "CARRIER"}
                    changeUserMode={changeUserMode}
                />
            )}

            <Box justifyContent="center" alignItems="center" width={400}>
                <Text onPress={() => setIsLoginPage(!isLoginPage)} underline>
                    {isLoginPage
                        ? "Don't have an account? Register"
                        : "Have an account? Login"}
                </Text>
            </Box>
        </Container>
    );
}
