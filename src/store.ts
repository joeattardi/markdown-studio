import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EditorView } from './types';

type State = {
    view: EditorView;
    markdown: string;
};

type Action = {
    setView: (view: EditorView) => void;
    setMarkdown: (markdown: string) => void;
};

const useStore = create<State & Action>()(
    persist(
        (set) => ({
            view: 'split',
            markdown: '',
            setView: (view: EditorView) => set(() => ({ view })),
            setMarkdown: (markdown: string) => set(() => ({ markdown }))
        }),
        {
            name: 'typemark-storage'
        }
    )
);

export default useStore;
