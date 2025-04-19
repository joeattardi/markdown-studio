import Markdown from 'react-markdown';
import useStore from './store';

export default function MarkdownPreview() {
    const markdown = useStore((state) => state.markdown);

    return (
        <div className="flex flex-col bg-slate-200 overflow-hidden">
            <div
                className="bg-slate-100 flex-grow border border-slate-300 p-4 prose max-w-none overflow-auto"
            >
                <Markdown>{markdown}</Markdown>
            </div>  
        </div>
    );
}
