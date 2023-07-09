'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            key={1}
            alt="Logo"
            className="hidden md:block cursor-pointer" 
            height="30"
            width="120"
            priority
            src="/assets/logo/logo.png"
        />
    )
}

export default Logo