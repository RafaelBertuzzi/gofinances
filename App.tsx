import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {ThemeProvider} from "styled-components";
import {Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts} from '@expo-google-fonts/poppins';
import AppLoading from "expo-app-loading";
import {StatusBar} from "react-native";

import theme from './src/global/styles/theme';
import {AuthProvider, useAuth} from "./src/hooks/auth";
import {Routes} from "./src/routes";

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    const {loading} = useAuth();

    if (!fontsLoaded || loading) {
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={"light-content"} translucent backgroundColor={"transparent"} />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
}
