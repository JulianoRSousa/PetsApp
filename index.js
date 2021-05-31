import {AppRegistry} from "react-native";
import codePush from "./src/App";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, () => codePush);
