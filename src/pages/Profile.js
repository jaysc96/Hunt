import React from "react";
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow } from "@ionic/react";
import UserContext from "../contexts/UserContexts";
import firebase from "../firebase";
import {toast} from "../utils/toast";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";
import { mailOutline, personCircleOutline } from "ionicons/icons";

const Profile = (props) => {
  const {user} = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push('/');
      toast("You have logged out successfully.");
    } catch(err) {
      console.error("Logout Error", err);
      toast(err.message);
    }
  }

  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent fullscreen>
          <LargeHeader title="Profile" />
          {user ? (
            <>
            <IonCard>
              <IonCardContent>
                <IonList lines='none'>
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot='start' />
                    <IonLabel>
                      <strong>{user.displayName}</strong>
                      <p>Username</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={mailOutline} slot='start' />
                    <IonLabel>
                      <strong>{user.email}</strong>
                      <p>Email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton expand='block' routerLink={'/edit-profile'} color='primary' fill='outline'> 
                  Edit Profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand='block' color='primary' fill='outline' onClick={logoutUser}> 
                  Log Out
                </IonButton>
              </IonCol>
            </IonRow>
            </>
          ): (
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton expand='block' routerLink={'/register'} color='primary'>
                    Sign Up
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand='block' routerLink={'/login'} color='primary' fill='outline'>
                    Log In
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;