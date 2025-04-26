import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EditorView } from './types';

type State = {
    view: EditorView;
    markdown: string;
    filename: string;
};

type Action = {
    setView: (view: EditorView) => void;
    setMarkdown: (markdown: string) => void;
    setFilename: (filename: string) => void;
};

const useStore = create<State & Action>()(
    persist(
        (set) => ({
            view: 'split',
            markdown: '',
            filename: 'untitled.md',
            setView: (view: EditorView) => set(() => ({ view })),
            setMarkdown: (markdown: string) => set(() => ({ markdown })),
            setFilename: (filename: string) => set(() => ({ filename }))
        }),
        {
            name: 'typemark-storage'
        }
    )
);

export default useStore;
