import { createContext } from 'react';
import type { editor } from 'monaco-editor';

interface EditorContextType {
    editorRef: React.RefObject<editor.IStandaloneCodeEditor | null>;
}

export const EditorContext = createContext<EditorContextType | null>(null);