import React from 'react';
import Link from 'next/link';

import s from './index.module.scss';

export const Header = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__ul}>
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/favorites'}>
                    <li>Favorites</li>
                </Link>
            </ul>
        </nav>
    );
};
