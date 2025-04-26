import { PiFileMd } from 'react-icons/pi';
import { Input } from '../ui/input';
import ViewSelector from './ViewSelector';
import useStore from '@/store';

export default function Header() {
    const filename = useStore((state) => state.filename);
    const setFilename = useStore((state) => state.setFilename);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilename(event.target.value);
    }

    return (
        <header className="print:hidden bg-white text-slate-600 p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-8" />
                <h1 className="text-xl font-semibold">Typemark</h1>
            </div>
            <div className="w-1/3 flex items-center gap-2">
                <PiFileMd size={32} />
                <Input value={filename} onChange={handleChange} className="font-mono" />
            </div>
            <ViewSelector />
        </header>
    );
}
