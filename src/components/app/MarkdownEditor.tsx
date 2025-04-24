import useStore from '@/store';
import Editor from '@monaco-editor/react';

export default function MarkdownEditor() {
    const markdown = useStore((state) => state.markdown);
    const setMarkdown = useStore((state) => state.setMarkdown);

    function handleChange(value: string | undefined) {
        setMarkdown(value ?? '');
    }

    return (
        <div className="flex flex-col bg-white p-2">
            <Editor
                height="100%"
                width="100%"
                defaultLanguage="markdown"
                value={markdown}
                onChange={handleChange}
                options={{
                    fontSize: 14,
                    minimap: {
                        enabled: false
                    }
                }}
            />
        </div>
    );
}
