import { useState } from 'react';
import Header from './Header';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

function App() {
    const [markdown, setMarkdown] = useState<string>('# Hello World');

    return (
        <div className="flex flex-col h-full">
            <Header />
            <main className="grid grid-cols-2 flex-grow">
                <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
                <MarkdownPreview markdown={markdown} />
            </main>
        </div>
    );
}

export default App;
