import { Heart, House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../assets/icons/favicon.ico';
import Container from '../../atoms/Container/Container';

export default function Header() {
  return (
    <header className="py-3">
      <Container>
        <div className="flex items-center justify-between">
          <Image src={logo} alt="Лого" className="w-8 h-8" />
          <div className="flex items-center gap-x-3">
            <Link href="/">
              <House className="w-8 h-8 transition-all ease-linear duration-300 hover:stroke-gray-400" />
            </Link>
            <Link href="/favorites">
              <Heart className="w-8 h-8 transition-all fill-red-600 stroke-red-600 ease-linear duration-300 hover:fill-red-400 hover:stroke-red-400" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
