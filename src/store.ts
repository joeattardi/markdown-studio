import { create } from 'zustand';
import { EditorView } from './types';

type State = {
    view: EditorView;
    markdown: string;
};

type Action = {
    setView: (view: EditorView) => void;
    setMarkdown: (markdown: string) => void;
};

const useStore = create<State & Action>((set) => ({
    view: 'split',
    markdown: '',
    setView: (view: EditorView) => set(() => ({ view })),
    setMarkdown: (markdown: string) => set(() => ({ markdown }))
}));

export default useStore;
