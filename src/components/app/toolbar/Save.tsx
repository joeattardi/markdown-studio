import { Button } from '@/components/ui/button';
import { PiDownload } from 'react-icons/pi';
import useStore from '@/store';

export default function Save() {
    const markdown = useStore((state) => state.markdown);
    const filename = useStore((state) => state.filename);

    function downloadFile() {
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <Button title="Download file" size="sm" variant="outline" onClick={downloadFile}>
            <PiDownload />
        </Button>
    );
}
