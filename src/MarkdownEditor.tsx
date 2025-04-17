type MarkdownEditorProps = {
    markdown: string;
    onChange: (markdown: string) => void;
}

export default function MarkdownEditor({ markdown, onChange }: MarkdownEditorProps) {
    return (
        <div className="flex flex-col bg-slate-200">
            <header className="px-2 py-1 border border-slate-300 border-b-0 border-t-0 uppercase text-xs tracking-wide">Editor</header>
            <textarea
                className="bg-slate-50 flex-grow border border-slate-300 font-mono p-4 outline-none"
                value={markdown}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
