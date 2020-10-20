import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import React from 'react';
import NavHeader from "../components/Header/NavHeader";
import {toast} from "../utils/toast";
import useFormValidation from "../hooks/useFormValidation";
import validateLogin from "../components/Auth/validateLogin";
import firebase from "../firebase";

const INITIAL_STATE = {
    email: "",
    password: ""
}


const Login = (props) => {
    const {
        handleSubmit,
        handleChange,
        values,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser)

    const [busy, setBusy] = React.useState(false);

    async function authenticateUser() {
        setBusy(true);
        const {email, password} = values;
        try {
            await firebase.login(email,password);
            toast("You have logged in successfully!");
            props.history.push('/');
        } catch(err) {
            console.error("Authentication Error",err);
            toast(err.message);
        }
        setBusy(false);
    }

    return (
        <IonPage>
            <NavHeader title="Login" />
            <IonLoading message={"Please wait..."} isOpen={busy} />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" value={values.email} type="text" onIonChange={handleChange} required></IonInput>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="password" value={values.password} type="password" onIonChange={handleChange} required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block" onClick={handleSubmit} disabled={isSubmitting}>Log In</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="ion-text-center ion-padding vertical">
                        <IonRouterLink routerLink={"/forgot"}>Forgot Password?</IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Login;