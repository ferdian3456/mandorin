import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Bell, ShieldCheck } from '@/components/icons';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            {/* header */}
            <View className='flex flex-row gap-x-5 px-5 py-5 items-center'>
                <Image source={require('../../../assets/images/profile-example.jpeg')} contentFit='cover' className='size-11 rounded-3xl' />
                <View className=''>
                    <Text className='font-jakarta-bold text-lg text-foreground'>Halo, Budi</Text>
                    <Text className='font-jakarta text-sm text-muted'>Owner</Text>
                </View>
                <Bell className='ml-auto'/>
            </View>

            {/* content */}
            <View className='px-5'>
                {/* dashboard */}
                <View className='bg-foreground rounded-xl px-5 py-5 '>
                    {/* dana */}
                    <View className='flex flex-row'>
                        <View className='flex flex-col gap-y-2'>
                            <Text className='text-on-dark text-sm'>Dana di rekening penampung</Text>
                            <Text className='font-jakarta-bold text-white text-2xl'>Rp185.000.000</Text>
                        </View>
                        <View className='flex ml-auto flex-row gap-x-2 bg-[#FFFFFF2E] self-start px-3 py-2 rounded-2xl items-center'>
                            <ShieldCheck className='size-5 text-white'/>
                            <Text className='text-white font-jakarta-bold text-sm'>Aman</Text>
                        </View>
                    </View>

                    {/* dana material */}
                    <View className='flex flex-row gap-x-3'>
                        <View className='bg-[#FFFFFF2E]'>
                            <Text className='text-white'>Dana material tersisa</Text>
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
    )
}