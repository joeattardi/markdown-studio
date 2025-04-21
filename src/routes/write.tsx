import { createFileRoute } from '@tanstack/react-router'
import clsx from 'clsx';
import Header from '../Header';
import MarkdownEditor from '../MarkdownEditor';
import MarkdownPreview from '../MarkdownPreview';
import useStore from '../store';
import Toolbar from '../toolbar/Toolbar';

export const Route = createFileRoute('/write')({
  component: App,
})

function App() {
  const view = useStore((state) => state.view);

  return (
      <div className="flex flex-col h-full">
          <Header />
          <Toolbar />
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
