import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { PiFileMd, PiFolderOpen } from 'react-icons/pi';
import useStore from '../store';

export default function OpenButton() {
    const fileRef = useRef<File | null>(null);
    const [fileSelected, setFileSelected] = useState(false);
    const setMarkdown = useStore((state) => state.setMarkdown);

    function resetState() {
        setFileSelected(false);
        fileRef.current = null;
    }

    function setFile(event: React.ChangeEvent<HTMLInputElement>) {
        const [file] = event.target.files || [];
        fileRef.current = file;
        setFileSelected(true);
    }

    function openFile() {
        const file = fileRef.current;
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                if (event.target) {
                    setMarkdown(event.target.result as string);
                }
            });

            reader.readAsText(file);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <PiFolderOpen />
                </Button>
            </DialogTrigger>
            <DialogContent onCloseAutoFocus={resetState}>
                <DialogHeader>
                    <DialogTitle>Open Local File</DialogTitle>
                    <DialogDescription>Load a local Markdown file into Typemark.</DialogDescription>
                </DialogHeader>
                <div className="p-4">
                    <label className="flex flex-col gap-2 items-center border-dashed border-2 border-slate-300 rounded-md w-full p-8">
                        <PiFileMd className="text-slate-500" size="64" />
                        {fileSelected ? (
                            <div className="text-xl">{fileRef.current!.name}</div>
                        ) : (
                            <>
                                <span className="text-slate-500">
                                    Drag and drop a file here or click to select
                                </span>
                                <input
                                    onChange={setFile}
                                    type="file"
                                    className="opacity-0 absolute"
                                    accept=".md"
                                />
                            </>
                        )}
                    </label>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button disabled={!fileSelected} type="submit" onClick={openFile}>
                            Open
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
