import { createFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import Header from '../components/app/Header';
import MarkdownEditor from '../components/app/MarkdownEditor';
import MarkdownPreview from '../components/app/MarkdownPreview';
import Toolbar from '../components/app/toolbar/Toolbar';
import { EditorProvider } from '../components/app/EditorProvider';
import useStore from '../store';

export const Route = createFileRoute('/write')({
    component: Write
});

function Write() {
    return (
        <EditorProvider>
            <App />
        </EditorProvider>
    );
}

function App() {
    const view = useStore((state) => state.view);

    return (
        <div className="flex flex-col h-full">
            <Header />
            <Toolbar />
            <main
                className={clsx('grid flex-grow overflow-hidden print:overflow-visible', {
                    'grid-cols-1': view === 'editor' || view === 'preview',
                    'grid-cols-2': view === 'split'
                })}
            >
                {(view === 'editor' || view === 'split') && <MarkdownEditor />}
                <MarkdownPreview />
            </main>
        </div>
    );
}
