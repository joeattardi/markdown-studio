import { PiPencil, PiSquareSplitHorizontal, PiEye } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type ViewSelectorProps = {
    view: 'editor' | 'split' | 'preview';
    setView: (view: 'editor' | 'split' | 'preview') => void;
};

export default function ViewSelector({ view, setView }: ViewSelectorProps) {
    return (
        <div className="flex items-center">
            <Button
                title="Edit"
                className="rounded-r-none"
                variant={view === 'editor' ? 'default' : 'secondary'}
                onClick={() => setView('editor')}
            >
                <PiPencil />
            </Button>

            <Button
                title="Split"
                className="rounded-none"
                variant={view === 'split' ? 'default' : 'secondary'}
                onClick={() => setView('split')}
            >
                <PiSquareSplitHorizontal />
            </Button>
            <Button
                title="Preview"
                className="rounded-l-none"
                variant={view === 'preview' ? 'default' : 'secondary'}
                onClick={() => setView('preview')}
            >
                <PiEye />
            </Button>
        </div>
    );
}
