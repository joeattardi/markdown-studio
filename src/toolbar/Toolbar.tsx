import NewFile from './NewFile';
import OpenFile from './OpenFile';

export default function Toolbar() {
    return (
        <div className="bg-zinc-100 border-t border-t-slate-300 p-2 flex items-center gap-1">
            <NewFile />
            <OpenFile />
        </div>
    )
}