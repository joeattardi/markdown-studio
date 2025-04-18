import Markdown from 'react-markdown';

type MarkdownPreviewProps = {
    markdown: string;
}

export default function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
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
