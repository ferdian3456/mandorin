import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name='index'
                options={{ title: 'Beranda' }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='find-mandor'
                options={{ title: 'Cari Mandor' }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='message'
                options={{ title: 'Pesan' }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='account'
                options={{ title: 'Akun' }}
            ></Tabs.Screen>
        </Tabs>
    );
}
