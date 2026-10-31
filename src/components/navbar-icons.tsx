import Svg, { Path } from 'react-native-svg';
import { ColorValue } from 'react-native';

type NavbarIconProps = {
    focused: boolean;
    color: ColorValue;
};

// perlu custom icon svg karena icon bawaan lucide kurang cocok
export function HomeIcon({ focused, color }: NavbarIconProps) {
    if (focused) {
        // ketika lagi focus atau diselect
        return (
            <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
                <Path
                    d='M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z'
                    fill={color}
                ></Path>
            </Svg>
        );
    }

    return (
        <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
            <Path
                d='M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z'
                fill={color}
            ></Path>
        </Svg>
    );
}

export function FindMandorIcon({ focused, color }: NavbarIconProps) {
    if (focused) {
        return (
            <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
                <Path
                    d='M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z'
                    fill={color}
                ></Path>
            </Svg>
        );
    }

    return (
        <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
            <Path
                d='M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z'
                fill={color}
            ></Path>
        </Svg>
    );
}

export function MessageIcon({ focused, color }: NavbarIconProps) {
    if (focused) {
        return (
            <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
                <Path
                    d='M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z'
                    fill={color}
                ></Path>
            </Svg>
        );
    }

    return (
        <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
            <Path
                d='M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z'
                fill={color}
            ></Path>
        </Svg>
    );
}

export function AccountIcon({ focused, color }: NavbarIconProps) {
    if (focused) {
        return (
            <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
                <Path
                    d='M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z'
                    fill={color}
                ></Path>
            </Svg>
        );
    }

    return (
        <Svg width={24} height={24} viewBox='0 0 256 256' fill='none'>
            <Path
                d='M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z'
                fill={color}
            ></Path>
        </Svg>
    );
}
