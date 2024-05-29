'use client';
import { useOrganizationList } from '@clerk/clerk-react';

import React from 'react';
import Item from './item';

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;

  return (
    <ul className="flex flex-col gap-y-4 ">
      {userMemberships.data?.map((mem) => (
        <Item
          key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default List;
