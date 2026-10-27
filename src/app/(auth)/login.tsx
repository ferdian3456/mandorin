import { View, Text, TextInput, Pressable, TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { HardHat, Smartphone, Lock, EyeOff, ArrowRight } from '@/components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import type { LucideIcon } from 'lucide-react-native';
import { ReactNode, useState } from 'react';
import { Link, router } from 'expo-router'

type InputFieldProps = TextInputProps & {
    label: string
    icon: LucideIcon
    right?: ReactNode
}

// ketika "focus:" nanti warna border dan text berubah. gk bisa pake class focus: bawaan nativewind
function InputField({ label, icon: Icon, right, ...props }: InputFieldProps) {
    const [focused, setFocused] = useState(false)

    return (
        <View>
            <Text className='text-muted font-jakarta-semibold text-[12.5px]'>{label}</Text>
            <View className={`h-[3.375rem] mt-[7px] flex flex-row items-center gap-x-3 rounded-[14px] bg-field px-4 ${focused ? 'border-[1.5px] border-primary' : 'border border-outline'}`}>
                <Icon className={`size-[1.188rem] ${focused ? 'text-primary' : 'text-subtle'}`} />
                <TextInput
                    className='flex-1 font-jakarta text-foreground text-[15px]'
                    {...props}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {right}
            </View>
        </View>
    )
}

export default function LoginScreen() {
    const [show, setShow] = useState(false)

    return (
        <SafeAreaView >
            {/* hero */}
            <View className='w-full h-[24rem]'>
                {/* image */}
                <Image source={require('../../../assets/images/login-hero.jpeg')} contentFit='cover' className='absolute inset-0' />
                <LinearGradient
                    colors={['#1C191766', '#1C1917F7']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    className='absolute inset-0'
                />

                {/* teks hero */}
                <View className='w-[18.75rem] mt-32 ml-7'>
                    <View className='bg-primary size-[52px] flex justify-center items-center rounded-2xl'>
                        <HardHat className='size-7 text-white'></HardHat>
                    </View>
                    <View className='mt-[1.125rem] flex gap-y-2'>
                        <Text className='text-white font-jakarta-bold text-[38px] leading-[1.1] tracking-[-1px]'>Mandorku</Text>
                        <Text className='text-on-dark font-jakarta text-sm leading-normal'>Cari mandor, pantau progres, dan kontrol uang proyek di satu tempat.</Text>
                    </View>
                </View>
            </View>

            {/* form */}
            <View className='-mt-9  px-6 py-6 bg-white rounded-t-[2.5rem]'>
                {/* judul */}
                <View className='flex gap-y-2'>
                    <Text className='text-foreground font-jakarta-bold text-2xl'>Masuk ke Akun</Text>
                    <Text className='text-muted font-jakarta text-sm'>Gunakan nomor HP yang terdaftar untuk melanjutkan proyek kamu.</Text>
                </View>

                {/* input form */}
                <View className='flex gap-y-4 mt-[1.125rem]'>
                    <InputField
                        label='Nomor HP'
                        icon={Smartphone}
                        keyboardType='number-pad'
                        placeholder='Masukkan nomor hp anda'
                    />

                    <InputField
                        label='Kata Sandi'
                        icon={Lock}
                        placeholder='Masukkan kata sandi anda'
                        secureTextEntry={!show}
                        right={
                            <Pressable onPress={() => setShow(!show)} hitSlop={8}>
                                <EyeOff className='size-[1.188rem] text-muted' />
                            </Pressable>
                        }
                    />
                </View>

                {/* lupa sandi */}
                <View className='flex items-end mt-5'>
                    <Text className='text-primary font-jakarta-semibold text-sm'>Lupa sandi?</Text>
                </View>

                {/* masuk */}
                <Pressable onPress={() => router.replace('/')} className='w-full mt-4 bg-primary h-[3.5rem] rounded-2xl flex flex-row justify-center items-center gap-x-2 active:bg-primary-dark'>
                    <Text className='text-white font-jakarta-bold text-lg'>Masuk</Text>
                    <ArrowRight className='size-[1.125rem] text-white'></ArrowRight>
                </Pressable>

                <View className='flex justify-center mt-6 flex-row gap-x-1'>
                    <Text className='text-muted font-jakarta text-sm'>Belum punya akun?</Text>
                    <Link href="/register">
                        <Text className='text-primary font-jakarta-bold text-sm'>Daftar sekarang</Text>
                    </Link>
                </View>

            </View>


        </SafeAreaView>
    );
}