import { View, Text,TextInput } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';

export default function Page() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="p-6 gap-2">
       {/*ganti nama header*/}
      <Stack.Screen options={{ title: 'Login' }} />
      <Text className="text-2xl font-bold">Mandor</Text>
      <Text>Catat progres, biaya, dan foto renovasi.</Text>

      <Text>Nomor HP</Text>
      <TextInput
        className="border p-2"
        placeholder="0812-3456-7890"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <Text>Kata sandi</Text>
      <TextInput
        className="border p-2"
        placeholder="Kata sandi"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
}
