import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LargeHeader from "../components/Header/LargeHeader"
import SmallHeader from "../components/Header/SmallHeader"

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="Hunt" />
      <IonContent fullscreen>
          <LargeHeader title="Hunt" />
      </IonContent>
    </IonPage>
  );
};

export default Home;