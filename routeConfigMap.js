import {HomeScreen, PatientCardScreen,HomeScreenNavigationOptions,PatientCardNavigationOptions} from "./screens";

const defaultConfig = {
    headerTintColor: "#2a86ff",
    headerTransparent: false,
    headerStyle:{
        elevation:0.8,
        shadowOpacity: 0.8,
    }
};

export const routeConfigMap = {
    Home:{
        screen:HomeScreen,
        navigationOptions:{...defaultConfig,...HomeScreenNavigationOptions}
    },
    PatientCard:{
        screen:PatientCardScreen,
        navigationOptions:{...defaultConfig,...PatientCardNavigationOptions}
    }
};