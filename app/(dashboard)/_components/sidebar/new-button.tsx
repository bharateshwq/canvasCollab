'use client';
import { Plus } from 'lucide-react';
import { CreateOrganization } from '@clerk/clerk-react';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import Hint from '@/components/hint';
const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create organization" side="right" align="start" sideOffset={18}>
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-50 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent p-0 bg-transparent border-none>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
