import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Building2, CircleCheck, CircleDot, HardHat, Lock, Phone, User, Check, EyeOff, ArrowRight } from '@/components/icons';
import { View, Text, Pressable, TextInputProps, TextInput } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { router, Link } from "expo-router";
import { ReactNode, useState } from 'react';


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

export default function RegisterScreen() {
    const [show, setShow] = useState(false)

    return (
        <SafeAreaView>
            {/* header */}
            <View className="px-5 py-5 flex flex-row gap-x-4">
                <Pressable onPress={() => router.back()} hitSlop={8}>
                    <View className="border border-outline size-12 flex justify-center items-center rounded-2xl">
                        <ArrowLeft className='text-foreground' />
                    </View>
                </Pressable>
                <View className="flex">
                    <Text className="font-jakarta-bold text-lg text-foreground">Buat akun MandorKu</Text>
                    <Text className="font-jakarta text-muted text-sm">Satu akun untuk semua proyekmu</Text>
                </View>
            </View>

            {/* content */}
            <View className="px-5 mt-1">
                <Text className="uppercase font-jakarta-bold text-muted">Saya mendaftar sebagai</Text>

                <View className="flex flex-row gap-x-3 mt-5">
                    <View className="px-4 py-4 flex gap-y-3 flex-1 bg-primary-soft rounded-3xl border-2 border-primary">
                        <View className="flex flex-row justify-between items-center">
                            <View className="size-9 bg-primary flex justify-center items-center rounded-xl">
                                <Building2 className="text-white" />
                            </View>
                            <View>
                                <CircleCheck className="text-primary" />
                            </View>
                        </View>

                        <Text className="font-jakarta-bold text-foreground">Owner</Text>
                        <Text className="font-jakarta text-muted">Punya lahan & dana proyek</Text>
                    </View>

                    <View className="px-4 py-4 flex gap-y-3 flex-1 rounded-3xl border-2 border-outline">
                        <View className="flex flex-row justify-between items-center">
                            <View className="size-9 bg-field flex justify-center items-center rounded-xl">
                                <HardHat className="text-subtle" />
                            </View>
                            <View>
                                <CircleDot className="text-subtle" />
                            </View>
                        </View>

                        <Text className="font-jakarta-bold text-foreground">Mandor</Text>
                        <Text className="font-jakarta text-muted">Mengerjakan proyek owner</Text>
                    </View>
                </View>

                {/* input form */}
                <View className="mt-5 flex flex-col gap-y-4">
                    {/* nama lengkap */}
                    <InputField
                        label='Nama lengkap'
                        icon={User}
                        placeholder='Masukkan nama lengkap anda'
                    />

                    {/* nomor hp */}
                    <InputField
                        label='Nomor Hp'
                        icon={Phone}
                        keyboardType='number-pad'
                        placeholder='Masukkan nomor hp anda'
                    />

                    {/* kata sandi */}
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

                <View className="mt-8 flex flex-row items-start gap-x-[10px]">
                    <View className="size-[18px] bg-primary rounded-md flex justify-center items-center">
                        <Check className="size-3 text-white" />
                    </View>
                    <Text
                        className="flex-1 font-jakarta text-muted text-xs leading-[18px]"
                    >
                        Saya setuju pada Syarat Layanan dan Kebijakan Privasi MandorKu.
                    </Text>
                </View>

                {/* daftar sekarang */}
                <View className='w-full mt-10 bg-primary h-[3.5rem] rounded-2xl flex flex-row justify-center items-center gap-x-2 active:bg-primary-dark'>
                    <Text className='text-white font-jakarta-bold text-lg'>Daftar Sekarang</Text>
                    <ArrowRight className='size-[1.125rem] text-white'></ArrowRight>
                </View>

                <View className='flex justify-center mt-7 flex-row gap-x-1'>
                    <Text className='text-muted font-jakarta text-sm'>Sudah punya akun?</Text>
                    <Link href="/login">
                        <Text className='text-primary font-jakarta-bold text-sm'>Masuk</Text>
                    </Link>
                </View>

            </View>

        </SafeAreaView>
    )
}
