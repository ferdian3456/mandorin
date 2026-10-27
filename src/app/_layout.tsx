import { Stack } from 'expo-router';
import "../../global.css";
import { cssInterop } from 'nativewind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import * as SplashScreen from 'expo-splash-screen';

// biar bisa styling expo image pake nativewind
cssInterop(Image, { className: 'style' });
cssInterop(LinearGradient, { className: 'style' });

// matikan dulu auto hide splash screen untuk load font dlu
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        PlusJakartaSans_400Regular,
        PlusJakartaSans_500Medium,
        PlusJakartaSans_600SemiBold,
        PlusJakartaSans_700Bold
    });

    useEffect(() => {
    if (loaded || error) {
        // kalau sudah diload maka baru dihide splash screenya
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return <Stack screenOptions={{headerShown:false, contentStyle:{ backgroundColor: '#FFFFFF'}}}  />;
}
