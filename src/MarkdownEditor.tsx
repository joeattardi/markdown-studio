type MarkdownEditorProps = {
    markdown: string;
    onChange: (markdown: string) => void;
}

export default function MarkdownEditor({ markdown, onChange }: MarkdownEditorProps) {
    return (
        <div className="flex flex-col bg-slate-200">
            <textarea
                className="bg-slate-50 flex-grow border border-slate-300 font-mono p-4 outline-none resize-none"
                value={markdown}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
