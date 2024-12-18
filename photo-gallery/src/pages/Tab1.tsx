import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonItem, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useEffect, useState } from 'react';

const Tab1: React.FC = () => {
  //dataset variable to hold the JSON file from WP page 
  const [dataset, setDataset] = useState<any[]>([]);

  //holding the directory for the url site for the JSON 
  const dataURL = "https://dev-cs55-13-week11.pantheonsite.io/wp-json/twentytwentyone-child/v1/things";
  useEffect(() =>{
    fetch(dataURL)
      .then(response => response.json())
    
      .then(data => setDataset(data))

    },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Things</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Things</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonList id="thing-list">
          <IonListHeader>Things</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <p>{item.thing_description}</p>
                <address>{item.thing_address}</address>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
