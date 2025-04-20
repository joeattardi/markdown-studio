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
import { PiCircleNotch, PiFileMd, PiFolderOpen, PiWarningCircle } from 'react-icons/pi';
import useStore from '../store';
import clsx from 'clsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import fm from 'front-matter';

export default function OpenFile() {
    const fileRef = useRef<File | null>(null);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [fileSelected, setFileSelected] = useState(false);
    const [isDraggingOver, setDraggingOver] = useState(false);
    const setMarkdown = useStore((state) => state.setMarkdown);

    function resetState() {
        setFileSelected(false);
        setError(false);
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
                    setLoading(false);
                    setOpen(false);
                    // TODO: Present a way to edit frontmatter, or at least preserve it when saving the file
                    const content = fm(event.target.result as string);
                    setMarkdown(content.body as string);
                }
            });

            reader.addEventListener('error', () => {
                setError(true);
                setLoading(false);
                setFileSelected(false);
                fileRef.current = null;
            });

            setLoading(true);
            reader.readAsText(file);
        }
    }

    function handleDrop(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault();
        const [file] = event.dataTransfer.files;
        fileRef.current = file;
        setFileSelected(true);
    }

    function handleDragOver(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault();
        setDraggingOver(true);
    }

    function handleDragLeave(event: React.DragEvent<HTMLLabelElement>) {
        event.preventDefault();
        setDraggingOver(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                <div className="p-4 flex flex-col gap-4">
                    {error && (
                        <Alert variant="destructive">
                            <PiWarningCircle />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>There was an error reading your Markdown file.</AlertDescription>
                        </Alert>
                    )}
                    <label
                        className={clsx(
                            'flex flex-col gap-2 items-center border-dashed border-2 border-slate-300 rounded-md w-full p-8',
                            {
                                'bg-slate-100': isDraggingOver,
                                'hover:bg-slate-50': !isDraggingOver
                            }
                        )}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                    >
                        <PiFileMd className="text-slate-500" size="64" />
                        {fileSelected && fileRef.current?.name ? (
                            <div className="text-xl">{fileRef.current.name}</div>
                        ) : (
                            <span className="text-slate-500">
                                Drag and drop a file here or click to select
                            </span>
                        )}
                        <input
                            onChange={setFile}
                            type="file"
                            className="opacity-0 absolute"
                            accept=".md"
                        />
                    </label>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button disabled={!fileSelected || isLoading} type="button" onClick={openFile}>
                        {isLoading && <PiCircleNotch className="animate-spin" />}
                        Open
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
