import { useRef, type ReactNode } from 'react';
import type { editor } from 'monaco-editor';
import { EditorContext } from '../../context/editorContext';

export function EditorProvider({ children }: { children: ReactNode }) {
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

    return <EditorContext.Provider value={{ editorRef }}>{children}</EditorContext.Provider>;
}
