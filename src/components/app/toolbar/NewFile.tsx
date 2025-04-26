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
import useStore from '@/store';
import { PiFile } from 'react-icons/pi';

export default function NewFile() {
    const markdown = useStore((state) => state.markdown);
    const setMarkdown = useStore((state) => state.setMarkdown);
    const setFilename = useStore((state) => state.setFilename);

    function createNewFile() {
        setMarkdown('');
        setFilename('untitled.md');
    }

    if (markdown.length) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button title="New file" size="sm" variant="outline">
                        <PiFile />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New File</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to create a new file? This will clear the current
                            file.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={createNewFile}>Create</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Button title="New file" size="sm" variant="outline" onClick={createNewFile}>
            <PiFile />
        </Button>
    );
}
