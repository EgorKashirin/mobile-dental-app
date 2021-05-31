import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {routeConfigMap} from "./routeConfigMap";

const App = createStackNavigator(routeConfigMap)

export default createAppContainer(App)