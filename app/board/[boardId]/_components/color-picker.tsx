'use client';

import { colorToCss } from '@/lib/utils';
import { Color } from '@/types/canvas';

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton onClick={onChange} color={{ r: 255, b: 203, g: 105 }} /> {/* Vibrant Pink */}
      <ColorButton onClick={onChange} color={{ r: 255, b: 0, g: 165 }} /> {/* Vibrant Orange */}
      <ColorButton onClick={onChange} color={{ r: 255, b: 0, g: 255 }} /> {/* Vibrant Yellow */}
      <ColorButton onClick={onChange} color={{ r: 0, b: 127, g: 255 }} /> {/* Vibrant Green */}
      <ColorButton onClick={onChange} color={{ r: 0, b: 255, g: 0 }} /> {/* Vibrant Blue */}
      <ColorButton onClick={onChange} color={{ r: 128, b: 255, g: 0 }} /> {/* Vibrant Purple */}
      <ColorButton onClick={onChange} color={{ r: 0, b: 0, g: 128 }} /> {/* Vibrant Teal */}
      <ColorButton onClick={onChange} color={{ r: 255, b: 0, g: 0 }} /> {/* Vibrant Red */}
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div className="h-8 w-8 rounded-md border border-neutral-300" style={{ background: colorToCss(color) }}></div>
    </button>
  );
};
