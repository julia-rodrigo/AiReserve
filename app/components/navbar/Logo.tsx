'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            alt="Logo"
            className="hidden md:block cursor-pointer" 
            height="40"
            width="140"
            priority
            quality={100}
            src="/assets/logo/logo.png"
        />
    )
}

export default Logo