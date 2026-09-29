import { View, Text,TextInput } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')


  return (
    <View>
      <Link href="/profile/friends">Go to profile/friends</Link>
      <Text>Welcome User</Text>
      <TextInput 
        className="h-15 m-12 border-2"
        placeholder="Input Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        className="h-15 m-12 border-2"
        placeholder="Input Password"
        onChangeText={setPassword}
        value={password}
      />
    </View>
  );
}