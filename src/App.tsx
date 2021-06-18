import React, { useEffect, useState } from "react";
import { Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import OneSignal from 'react-native-onesignal';
import codePush from 'react-native-code-push';
import Analytics from 'appcenter-analytics';

import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";

const App: React.FC = () => {

  const [isSubscribed, setIsSubscribed] = useState<boolean>();
  useEffect(() => {
    Analytics.trackEvent('Open App')
    PetsNotifications();
  }, [])

  async function PetsNotifications() {

    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("d43bf434-d3d0-4bcb-bf1e-bff69d6047e4");

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
      const button2 = { text: "Complete", onPress: () => { notificationReceivedEvent.complete(notification); } };
      Alert.alert("Complete notification?", "Test", [button1, button2], { cancelable: true });
    });

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
    const deviceState = await OneSignal.getDeviceState();

    setIsSubscribed(deviceState.isSubscribed);
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE
})(App);