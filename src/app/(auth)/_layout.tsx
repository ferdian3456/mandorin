import { Stack } from 'expo-router';
import "../../../global.css";
import { cssInterop } from 'nativewind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';


// biar bisa styling expo image pake nativewind
cssInterop(Image, { className: 'style' });
cssInterop(LinearGradient, { className: 'style' });


export default function RootLayout() {
    return <Stack screenOptions={{headerShown:false, contentStyle:{ backgroundColor: '#FFFFFF'}}}  />;
}
