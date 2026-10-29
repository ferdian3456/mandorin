import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Bell, ShieldCheck } from '@/components/icons';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            {/* header */}
            <View className='flex flex-row items-center gap-x-5 px-5 py-5'>
                <Image
                    source={require('../../../assets/images/profile-example.jpeg')}
                    contentFit='cover'
                    className='size-11 rounded-3xl'
                />
                <View className=''>
                    <Text className='font-jakarta-bold text-lg text-foreground'>
                        Halo, Budi
                    </Text>
                    <Text className='font-jakarta text-sm text-muted'>
                        Owner
                    </Text>
                </View>
                <Bell className='ml-auto' />
            </View>

            {/* content */}
            <View className='px-5'>
                {/* dashboard */}
                <View className='rounded-xl bg-primary px-5 py-5 '>
                    {/* dana */}
                    <View className='flex flex-col gap-y-2'>
                        <Text className='text-sm text-on-dark'>
                            Dana di rekening penampung
                        </Text>
                        <Text className='font-jakarta-bold text-2xl text-white'>
                            Rp185.000.000
                        </Text>
                    </View>

                    {/* dana material */}
                    <View className='flex flex-row gap-x-3'>
                        <View className='bg-[#FFFFFF2E]'>
                            <Text className='text-white'>
                                Dana material tersisa
                            </Text>
                            <Text className='text-white'>Rp 42.300.000</Text>
                        </View>

                        <View className='bg-[#FFFFFF2E]'>
                            <Text className='text-white'>Upah tertahan</Text>
                            <Text className='text-white'>Rp 96.000.000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
