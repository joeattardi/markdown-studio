import { EditorView } from './types';
import ViewSelector from './ViewSelector';

type HeaderProps = {
    view: EditorView;
    setView: (view: EditorView) => void;
}

export default function Header({ view, setView }: HeaderProps) {
    return (
        <header className="bg-white text-slate-600 p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-8" />
                <h1 className="text-lg">Markdown Studio</h1>
            </div>
            <ViewSelector view={view} setView={setView} />
        </header>
    );
}
