'use client';
import Image from 'next/image';
import { useOrganization, useOrganizationList } from '@clerk/clerk-react';
import { cn } from '@/lib/utils';

interface itemProps {
  id: string;
  name: string;
  imageUrl: string;
}

import React from 'react';
import Hint from '@/components/hint';

const Item = ({ id, name, imageUrl }: itemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isActive = organization?.id === id;
  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          onClick={onClick}
          fill
          className={cn('rounded-md cursor-pointer opacity-75 hover:opacity-100 trasition ', isActive && 'opacity-900')}
        />
      </Hint>
    </div>
  );
};

export default Item;
