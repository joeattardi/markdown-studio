import { PiFileMd } from 'react-icons/pi';

export default function DropZone({ draggingOver }: { draggingOver: boolean }) {
    if (draggingOver) {
        return (
            <div className="absolute top-0 left-0 w-full h-full bg-slate-200 z-100 flex flex-col opacity-95">
                <div className="border-2 border-dashed border-slate-400 rounded-lg p-4 m-4 flex-grow flex flex-col items-center justify-center text-slate-700">
                    <PiFileMd size={64} />
                    <h2 className="text-lg font-semibold">Drop Markdown file here</h2>
                    <p className="text-sm text-slate-600">
                        This will replace the current content of the editor with the content of the
                        dropped file.
                    </p>
                </div>
            </div>
        );
    }

    return null;
}
