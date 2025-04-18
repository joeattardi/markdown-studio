import clsx from 'clsx';
import { useState } from 'react';
import Header from './Header';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';
import ViewSelector from './ViewSelector';

function App() {
    const [markdown, setMarkdown] = useState<string>('# Hello World');
    const [view, setView] = useState<'editor' | 'split' | 'preview'>('split');

    return (
        <div className="flex flex-col h-full">
            <Header view={view} setView={setView} />
            <div className="bg-slate-100 p-2 border border-slate-300 border-b-0">
            </div>
            <main
                className={clsx('grid flex-grow overflow-hidden',
                    {
                        'grid-cols-1': view === 'editor' || view === 'preview',
                        'grid-cols-2': view === 'split'
                    })
                }
            >
                {(view === 'editor' || view === 'split') && (
                    <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
                )}
                {(view === 'preview' || view === 'split') && (
                    <MarkdownPreview markdown={markdown} />
                )}
            </main>
        </div>
    );
}

export default App;
