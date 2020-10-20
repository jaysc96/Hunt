import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import NavHeader from "../components/Header/NavHeader"
import {toast} from "../utils/toast";
import useFormValidation from "../hooks/useFormValidation";
import validatePasswordReset from "../components/Auth/validatePasswordReset";
import firebase from "../firebase";

const INITIAL_STATE = {
    email: "",
}

const Forgot = (props) => {
    const {
        handleSubmit,
        handleChange,
        values,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validatePasswordReset, handleResetPassword)

    const [busy, setBusy] = React.useState(false);

    async function handleResetPassword() {
        setBusy(true);
        const {email} = values;
        try {
            await firebase.resetPassword(email);
            toast("Check your email for reset password link.");
            props.history.push('/login');
        } catch(err) {
            console.error("Password Reset Error",err);
            toast(err.message);
        }
        setBusy(false);
    }
    return (
        <IonPage>
            <NavHeader title="Reset Password" />
            <IonLoading message={"Please wait..."} isOpen={busy} />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" value={values.email} onIonChange={handleChange} required></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block" onClick={handleSubmit} disabled={isSubmitting}>Get Reset Link</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Forgot;