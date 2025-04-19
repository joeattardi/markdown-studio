import { PiPencil, PiSquareSplitHorizontal, PiEye } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import useStore from './store';

export default function ViewSelector() {
    const view = useStore((state) => state.view);
    const setView = useStore((state) => state.setView);

    return (
        <div className="flex items-center border border-slate-300 p-1 rounded-md shadow">
            <Button
                title="Edit"
                variant={view === 'editor' ? 'default' : 'ghost'}
                onClick={() => setView('editor')}
                size="sm"
            >
                <PiPencil />
            </Button>

            <Button
                title="Split"
                variant={view === 'split' ? 'default' : 'ghost'}
                onClick={() => setView('split')}
                size="sm"
            >
                <PiSquareSplitHorizontal />
            </Button>
            <Button
                title="Preview"
                variant={view === 'preview' ? 'default' : 'ghost'}
                onClick={() => setView('preview')}
                size="sm"
            >
                <PiEye />
            </Button>
        </div>
    );
}
