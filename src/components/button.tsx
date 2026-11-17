import { LucideIcon } from 'lucide-react-native';
import { Pressable, Text } from 'react-native';

type ButtonProps = {
    value: string;
    icon: LucideIcon;
    onPress?: () => void;
    className?: string;
};

export function Button({
    value,
    icon: Icon,
    onPress,
    className = '',
}: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            className={`flex h-[3.5rem] w-full flex-row items-center justify-center gap-x-2 rounded-2xl bg-primary active:bg-primary-dark ${className}`}
        >
            <Text className='font-jakarta-bold text-lg text-white'>
                {value}
            </Text>
            <Icon className='size-[1.125rem] text-white'></Icon>
        </Pressable>
    );
}
