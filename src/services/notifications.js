import React, {useState} from "react";
import { Alert } from 'react-native';
import OneSignal from 'react-native-onesignal';


async function PetsNotifications() {
   
  const [isSubscribed, setIsSubscribed] = useState();

  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId("ce8572ae-ff57-4e77-a265-5c91f00ecc4c");
        
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log("Prompt response:", response);
  });
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data);
    const button1 = {
       text: "Cancel",
       onPress: () => { notificationReceivedEvent.complete(); },
       style: "cancel"
    };
    const button2 = { text: "Complete", onPress: () => { notificationReceivedEvent.complete(notification); }};
    Alert.alert("Complete notification?", "Test", [ button1, button2], { cancelable: true });
   });
  
   OneSignal.setNotificationOpenedHandler(notification => {
     console.log("OneSignal: notification opened:", notification);
   });
  const deviceState = await OneSignal.getDeviceState();

  setIsSubscribed({
      isSubscribed : deviceState.isSubscribed
  });
  return
}
export default PetsNotifications;
