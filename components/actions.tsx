'use client';
import { Link2, Pencil, Trash2 } from 'lucide-react';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { ConfirmModal } from './confirm-model';
import { Button } from './ui/button';
import { useRenameModal } from '@/store/use-rename-modal';

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffSet?: DropdownMenuContentProps['sideOffset'];
  id: string;
  title: string;
}

export const Actions = ({ children, side, sideOffSet, id, title }: ActionsProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);
  const onCopyLink = (e: any) => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => {
        'Failed to copy link';
      });
    e.stopPropogation();
  };
  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success('Vision deleted');
      })
      .catch(() => {
        toast.error('Vision couldn`t be deleted');
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => {
          e.preventDefault();
        }}
        side={side}
        sideOffset={sideOffSet}
        className="w-60 z-50 bg-gray-100"
      >
        <Button
          variant={'ghost'}
          className="p-3 cursor-pointer flex flex-row text-base w-full justify-start font-normal"
          onClick={onCopyLink}
        >
          <Link2 className="h-4 w-4 mr-2  " />
          Copy link to clipboard
        </Button>
        <Button
          variant={'ghost'}
          className="p-3 cursor-pointer flex flex-row text-base w-full justify-start font-normal"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2  " />
          Rename
        </Button>
        <ConfirmModal
          header="Delete vision?"
          description="This will delete all the contents of the vision"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant={'ghost'}
            className="p-3 cursor-pointer flex flex-row text-base w-full justify-start font-normal"
            // onClick={onDelete}
          >
            <Trash2 className="h-4 w-4 mr-2  " />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
