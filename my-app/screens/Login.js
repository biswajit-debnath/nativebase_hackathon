import { Container } from "native-base";
import React, { useState } from "react";
import LoginForm from "../components/RegisterForm";

export default function Login() {
    const [loginType, setLoginType] = useState("FREIGHTER");

    const changeLoginMode = () => {
        setLoginType(loginType === "CARRIER" ? "FREIGHTER" : "CARRIER");
    };

    return (
        <Container safeArea>
            <LoginForm
                isCarrierLogin={loginType === "CARRIER"}
                changeLoginMode={changeLoginMode}
            />
        </Container>
    );
}
