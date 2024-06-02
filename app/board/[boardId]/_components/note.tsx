import { Kalam } from 'next/font/google';
import { NoteLayer } from '../../../../types/canvas';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { cn, colorToCss, getContrastingTextColor } from '@/lib/utils';
import { useMutation } from '@/liveblocks.config';
const font = Kalam({
  subsets: ['latin'],
  weight: ['400'],
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.2;
  const fontSizeBasedOnHeight = height * scaleFactor;
  const fontSizeBoasedOnWidth = width * scaleFactor;

  return Math.min(fontSizeBasedOnHeight, fontSizeBoasedOnWidth, maxFontSize);
};

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Note = ({ layer, onPointerDown, id, selectionColor }: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;
  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get('layers');
    liveLayers.get(id)?.set('value', newValue);
  }, []);
  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : 'none',
        backgroundColor: fill ? '#000000 ' : '#000000',
      }}
      className="shadow-lg drop-shadow-2xl"
    >
      <div
        className="h-full w-full"
        style={{
          backgroundColor: fill ? colorToCss(fill) : '#000000',
        }}
      >
        <ContentEditable
          html={value || 'Note'}
          onChange={handleContentChange}
          className={cn(
            'h-full w-full flex flex-wrap items-center justify-center text-center outline-none ',
            font.className
          )}
          style={{
            fontSize: calculateFontSize(width, height),
            color: fill ? getContrastingTextColor(fill) : '#000',
          }}
        />
      </div>
    </foreignObject>
  );
};
