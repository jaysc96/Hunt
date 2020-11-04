import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";
import ProductList from "../components/Product/ProductList";

const Home = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Hunt" />
      <IonContent color="medium" fullscreen>
          <LargeHeader title="Hunt" />
          <br></br>
          <ProductList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Home;