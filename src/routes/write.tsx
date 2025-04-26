import DropZone from '@/components/app/DropZone';
import { createFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import fm from 'front-matter';
import { useState } from 'react';
import { EditorProvider } from '../components/app/EditorProvider';
import Header from '../components/app/Header';
import MarkdownEditor from '../components/app/MarkdownEditor';
import MarkdownPreview from '../components/app/MarkdownPreview';
import Toolbar from '../components/app/toolbar/Toolbar';
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
    const setMarkdown = useStore((state) => state.setMarkdown);
    const setFilename = useStore((state) => state.setFilename);
    const [draggingOver, setDraggingOver] = useState(false);

    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setDraggingOver(false);
        const [file] = event.dataTransfer.files;
        if (file.type === 'text/markdown') {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                if (event.target) {
                    const content = fm(event.target.result as string);
                    setMarkdown(content.body as string);
                    setFilename(file.name);
                }
            });

            reader.readAsText(file);
        }
    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setDraggingOver(true);
    }

    function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setDraggingOver(false);
    }

    return (
        <div className="flex flex-col h-full">
            <Header />
            <Toolbar />
            <main
                className={clsx('grid flex-grow overflow-hidden print:overflow-visible relative', {
                    'grid-cols-1': view === 'editor' || view === 'preview',
                    'grid-cols-2': view === 'split'
                })}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <DropZone draggingOver={draggingOver} />
                {(view === 'editor' || view === 'split') && <MarkdownEditor />}
                <MarkdownPreview />
            </main>
        </div>
    );
}
