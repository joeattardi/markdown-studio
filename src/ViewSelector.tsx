import { PiPencil, PiSquareSplitHorizontal, PiEye } from 'react-icons/pi';
import { Button } from '@/components/ui/button';

type ViewSelectorProps = {
    view: 'editor' | 'split' | 'preview';
    setView: (view: 'editor' | 'split' | 'preview') => void;
};

export default function ViewSelector({ view, setView }: ViewSelectorProps) {
    return (
        <div className="flex items-center border border-slate-300 rounded-md">
            <Button
                title="Edit"
                className="rounded-r-none"
                variant={view === 'editor' ? 'default' : 'ghost'}
                onClick={() => setView('editor')}
                size="sm"
            >
                <PiPencil />
            </Button>

            <Button
                title="Split"
                className="rounded-none"
                variant={view === 'split' ? 'default' : 'ghost'}
                onClick={() => setView('split')}
                size="sm"
            >
                <PiSquareSplitHorizontal />
            </Button>
            <Button
                title="Preview"
                className="rounded-l-none"
                variant={view === 'preview' ? 'default' : 'ghost'}
                onClick={() => setView('preview')}
                size="sm"
            >
                <PiEye />
            </Button>
        </div>
    );
}
