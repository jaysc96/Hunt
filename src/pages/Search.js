import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LargeHeader from "../components/Header/LargeHeader"
import SmallHeader from "../components/Header/SmallHeader"

const Search = () => {
  return (
    <IonPage>
      <SmallHeader title="Search" />
      <IonContent fullscreen>
          <LargeHeader title="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Search;