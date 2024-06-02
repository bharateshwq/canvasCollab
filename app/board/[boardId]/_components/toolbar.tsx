import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from 'lucide-react';
import { ToolButton } from '../_components/tool-button';
import { CanvasMode, CanvasState, LayerType } from '@/types/canvas';

interface ToolbarProps {
  canvasState: CanvasState;

  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const ToolBar = ({ canvasState, setCanvasState, undo, redo, canUndo, canRedo }: ToolbarProps) => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 ">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
          label="Select"
          icon={MousePointer2}
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
        />
        <ToolButton
          isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Text}
          label="Text"
          icon={Type}
          onClick={() => setCanvasState({ mode: CanvasMode.Inserting, layerType: LayerType.Text })}
        />
        <ToolButton
          isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Note}
          onClick={() => setCanvasState({ mode: CanvasMode.Inserting, layerType: LayerType.Note })}
          label="Sticky Note"
          icon={StickyNote}
        />
        <ToolButton
          isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Rectangle}
          onClick={() => setCanvasState({ mode: CanvasMode.Inserting, layerType: LayerType.Rectangle })}
          label="Rectangle"
          icon={Square}
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Ellipse}
          onClick={() => setCanvasState({ mode: CanvasMode.Inserting, layerType: LayerType.Ellipse })}
        />
        <ToolButton
          isActive={canvasState.mode === CanvasMode.Pencil}
          onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
          label="Pencil"
          icon={Pencil}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton label="Undo" icon={Undo2} onClick={undo} isDisabled={!canUndo} />
        <ToolButton label="Redo" icon={Redo2} onClick={redo} isDisabled={!canRedo} />
      </div>
    </div>
  );
};

export default ToolBar;
