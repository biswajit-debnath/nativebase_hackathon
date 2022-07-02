import { Container } from "native-base";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function FreighterLogin() {
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
