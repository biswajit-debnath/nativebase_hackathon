import { Container } from "native-base";
import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    const [userType, setUserType] = useState("FREIGHTER");

    const changeUserMode = () => {
        setUserType(userType === "CARRIER" ? "FREIGHTER" : "CARRIER");
    };

    return (
        <Container safeArea>
            <RegisterForm
                isCarrierUser={userType === "CARRIER"}
                changeUserMode={changeUserMode}
            />
        </Container>
    );
}
