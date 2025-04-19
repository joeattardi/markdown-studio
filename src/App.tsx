import clsx from 'clsx';
import Header from './Header';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';
import useStore from './store';

function App() {
    const view = useStore((state) => state.view);

    return (
        <div className="flex flex-col h-full">
            <Header />
            <main
                className={clsx('grid flex-grow overflow-hidden',
                    {
                        'grid-cols-1': view === 'editor' || view === 'preview',
                        'grid-cols-2': view === 'split'
                    })
                }
            >
                {(view === 'editor' || view === 'split') && (
                    <MarkdownEditor />
                )}
                {(view === 'preview' || view === 'split') && (
                    <MarkdownPreview />
                )}
            </main>
        </div>
    );
}

export default App;
