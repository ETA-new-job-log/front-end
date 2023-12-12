'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import Icon from '@/assets/Icon';

interface LinkButtonProps {
  path: 'home' | 'list';
}

interface PathMapItemType {
  href: string;
  name: string;
  position: 'left' | 'right';
}

const PathMap: Record<'home' | 'list', PathMapItemType> = {
  home: {
    href: '/',
    name: '홈',
    position: 'left',
  },
  list: {
    href: '/list',
    name: '취준기록',
    position: 'right',
  },
};

const LinkButton = ({ path }: LinkButtonProps) => {
  const current = usePathname();
  const { href, name, position } = PathMap[path];
  const isCurrent = current === href;
  const isLeft = position === 'left';

  return (
    <Link
      href={href}
      className={`z-20 w-full h-full flex flex-col items-center justify-center web:text-xxs ${
        isLeft ? 'col-start-1' : 'col-start-3'
      }`}
    >
      <Icon
        name={path}
        className={`fill-none hover:scale-110 transition-all ${
          isCurrent ? 'stroke-primary500' : 'stroke-black200'
        }`}
      />
      <span
        className={`hidden web:inline ${
          isCurrent ? 'text-black900' : 'text-black200'
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default memo(LinkButton);
