// biar bisa styling icon lucide pake nativewind
import { ArrowRight, Check, EyeOff, HardHat, Lock, Smartphone } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

const withClassName = (icon: LucideIcon) =>
    cssInterop(icon, {
        className: {
            target: 'style',
            nativeStyleToProp: { color: true, width: true, height: true },
        },
    });

[ArrowRight, Check, EyeOff, HardHat, Lock, Smartphone].forEach(withClassName);

export { ArrowRight, Check, EyeOff, HardHat, Lock, Smartphone };
