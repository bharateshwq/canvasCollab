import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({ title, authorLabel, createdAtLabel, isFavorite, onClick, disabled }: FooterProps) => {
  return (
    <div className="relative bg-white p-3 ">
      <div className="flex flex-row gap-9">
        <div className='"flex flex-col'>
          <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate ">
            {authorLabel}, {createdAtLabel}{' '}
          </p>
        </div>
        <button
          className={cn(
            'opacity-0 group-hover:opacity-100 transition aboslute top-3 right-3 text-muted-foreground hover:text-blue-500',
            disabled && 'cursor-not-allowed opacity-75'
          )}
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            // e.stopPropagation();
            onClick();
          }}
        >
          <Star className={cn('h-4 w-4', isFavorite && 'fill-blue-600 text-blue-600')} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
