import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const NavHeader = ({title, option, icon, action}) => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                {option && (
                    <IonButtons slot="primary">
                        <IonButton onClick={action}>
                            <IonIcon slot="icon-only" icon={icon} />
                        </IonButton>
                    </IonButtons>
                )}
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default NavHeader;