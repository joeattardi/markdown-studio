import { useEditor } from '@/hooks/useEditor';
import useStore from '@/store';
import Editor from '@monaco-editor/react';
import type { editor } from 'monaco-editor';

export default function MarkdownEditor() {
    const { editorRef } = useEditor();
    const markdown = useStore((state) => state.markdown);
    const setMarkdown = useStore((state) => state.setMarkdown);

    function handleChange(value: string | undefined) {
        setMarkdown(value ?? '');
    }

    function handleMount(editor: editor.IStandaloneCodeEditor) {
        editorRef.current = editor;
    }

    return (
        <div className="print:hidden flex flex-col bg-white p-2 border border-slate-300 border-r-0">
            <Editor
                onMount={handleMount}
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
