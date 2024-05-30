'use client';
import { useOrganization } from '@clerk/nextjs';
import EmptyOrg from './_components/empty-org';
import { StringToBoolean } from 'class-variance-authority/types';
import BoardList from './_components/board-list';

interface DashboardProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashBoardPage = ({ searchParams }: DashboardProps) => {
  const { organization } = useOrganization();
  return (
    <div className=" h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <BoardList orgId={organization.id} query={searchParams} />}
    </div>
  );
};

export default DashBoardPage;
