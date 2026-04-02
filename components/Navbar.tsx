'use client';

import { Show, SignInButton, UserButton , useUser } from "@clerk/nextjs";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils" ;

const navItems = [
    {label : 'library', href:'/'} ,
    {label : 'Add new' , href:'/books/new'}
]

const Navbar = () => {
    const pathName = usePathname();
    const {user} = useUser();

    return (
        <header className="w-full fixed z-50 bg-('--bg-primary') ">
            <div className="wrapper navbar-height py-4 flex justify-between items-center">
                <Link href="/" className="flex gap-0.5 items-center">
                    <Image src="/assets/logo.png" alt="Bookverse AI" width={42} height={26}/>
                    <span className='logo-text' >Bookverse AI</span>
                </Link>

                <nav className='w-fit flex gap-7.5 items-center'>
                    { navItems.map(({label , href})=>{
                        const isActive = pathName===href || (href !== '/' && pathName.startsWith(href));

                        return (
                            <Link href={href} key={label} className={cn('nav-link-base', isActive ? 'nav-link-active' : 'text-black hover:opacity-70')}>
                                {label}
                            </Link>
                        )
                    })
                    }
                    <Show when="signed-out">
                        <SignInButton>
                            <button className="rounded-full border border-[var(--border-medium)] px-4 py-2 font-medium text-[var(--text-primary)] transition hover:bg-[var(--bg-card)]">
                                Sign in
                            </button>
                        </SignInButton>
                    </Show>
                    <Show when="signed-in">
                        <div className="nav-user-link">
                            <UserButton />
                            {user?.firstName &&
                                (<Link href='/subscriptions' className='nav-user-name'>
                                    {user.firstName}
                                </Link>)}
                        </div>

                    </Show>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
