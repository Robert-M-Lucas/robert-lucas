import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../util/authentication";
import { useEffect, useState } from "react";

export function SignIn() {
    let [leaving, setLeaving] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!leaving) {
            setLeaving(true);
            leaving = true; // ??
            navigate("/");
            signInWithGoogle();
        }
    });
    
    return <></>;
}