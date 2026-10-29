import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Building2,
    CircleCheck,
    CircleDot,
    HardHat,
    Lock,
    Phone,
    User,
    Check,
    EyeOff,
    ArrowRight,
} from '@/components/icons';
import { View, Text, Pressable, TextInputProps, TextInput } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { router, Link } from 'expo-router';
import { ReactNode, useState } from 'react';

type InputFieldProps = TextInputProps & {
    label: string;
    icon: LucideIcon;
    right?: ReactNode;
};

// ketika "focus:" nanti warna border dan text berubah. gk bisa pake class focus: bawaan nativewind
function InputField({ label, icon: Icon, right, ...props }: InputFieldProps) {
    const [focused, setFocused] = useState(false);

    return (
        <View>
            <Text className='font-jakarta-semibold text-[12.5px] text-muted'>
                {label}
            </Text>
            <View
                className={`mt-[7px] flex h-[3.375rem] flex-row items-center gap-x-3 rounded-[14px] bg-field px-4 ${focused ? 'border-[1.5px] border-primary' : 'border border-outline'}`}
            >
                <Icon
                    className={`size-[1.188rem] ${focused ? 'text-primary' : 'text-subtle'}`}
                />
                <TextInput
                    className='flex-1 font-jakarta text-[15px] text-foreground'
                    {...props}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {right}
            </View>
        </View>
    );
}

export default function RegisterScreen() {
    const [show, setShow] = useState(false);

    return (
        <SafeAreaView>
            {/* header */}
            <View className='flex flex-row gap-x-4 px-5 py-5'>
                <Pressable onPress={() => router.back()} hitSlop={8}>
                    <View className='flex size-12 items-center justify-center rounded-2xl border border-outline'>
                        <ArrowLeft className='text-foreground' />
                    </View>
                </Pressable>
                <View className='flex'>
                    <Text className='font-jakarta-bold text-lg text-foreground'>
                        Buat akun MandorKu
                    </Text>
                    <Text className='font-jakarta text-sm text-muted'>
                        Satu akun untuk semua proyekmu
                    </Text>
                </View>
            </View>

            {/* content */}
            <View className='mt-1 px-5'>
                <Text className='font-jakarta-bold uppercase text-muted'>
                    Saya mendaftar sebagai
                </Text>

                <View className='mt-5 flex flex-row gap-x-3'>
                    <View className='flex flex-1 gap-y-3 rounded-3xl border-2 border-primary bg-primary-soft px-4 py-4'>
                        <View className='flex flex-row items-center justify-between'>
                            <View className='flex size-9 items-center justify-center rounded-xl bg-primary'>
                                <Building2 className='text-white' />
                            </View>
                            <View>
                                <CircleCheck className='text-primary' />
                            </View>
                        </View>

                        <Text className='font-jakarta-bold text-foreground'>
                            Owner
                        </Text>
                        <Text className='font-jakarta text-muted'>
                            Punya lahan & dana proyek
                        </Text>
                    </View>

                    <View className='flex flex-1 gap-y-3 rounded-3xl border-2 border-outline px-4 py-4'>
                        <View className='flex flex-row items-center justify-between'>
                            <View className='flex size-9 items-center justify-center rounded-xl bg-field'>
                                <HardHat className='text-subtle' />
                            </View>
                            <View>
                                <CircleDot className='text-subtle' />
                            </View>
                        </View>

                        <Text className='font-jakarta-bold text-foreground'>
                            Mandor
                        </Text>
                        <Text className='font-jakarta text-muted'>
                            Mengerjakan proyek owner
                        </Text>
                    </View>
                </View>

                {/* input form */}
                <View className='mt-5 flex flex-col gap-y-4'>
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
                            <Pressable
                                onPress={() => setShow(!show)}
                                hitSlop={8}
                            >
                                <EyeOff className='size-[1.188rem] text-muted' />
                            </Pressable>
                        }
                    />
                </View>

                <View className='mt-8 flex flex-row items-center gap-x-[10px]'>
                    <View className='flex size-[18px] items-center justify-center rounded-md bg-primary'>
                        <Check className='size-3 text-white' />
                    </View>
                    <Text className='flex-1 font-jakarta text-xs leading-[18px] text-muted'>
                        Saya setuju pada Syarat Layanan dan Kebijakan Privasi
                        MandorKu.
                    </Text>
                </View>

                {/* daftar sekarang */}
                <View className='mt-10 flex h-[3.5rem] w-full flex-row items-center justify-center gap-x-2 rounded-2xl bg-primary active:bg-primary-dark'>
                    <Text className='font-jakarta-bold text-lg text-white'>
                        Daftar Sekarang
                    </Text>
                    <ArrowRight className='size-[1.125rem] text-white'></ArrowRight>
                </View>

                <View className='mt-7 flex flex-row justify-center gap-x-1'>
                    <Text className='font-jakarta text-sm text-muted'>
                        Sudah punya akun?
                    </Text>
                    <Link href='/login'>
                        <Text className='font-jakarta-bold text-sm text-primary'>
                            Masuk
                        </Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    );
}
