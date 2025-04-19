import useStore from './store';

export default function MarkdownEditor() {
    const markdown = useStore((state) => state.markdown);
    const setMarkdown = useStore((state) => state.setMarkdown);

    return (
        <div className="flex flex-col bg-slate-200">
            <textarea
                className="bg-slate-50 flex-grow border border-slate-300 font-mono p-4 outline-none resize-none"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
        </div>
    );
}
