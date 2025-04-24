import { Button } from '@/components/ui/button';
import { PiPrinter } from 'react-icons/pi';

export default function Print() {
    return (
        <Button size="sm" variant="outline" title="Print document" onClick={() => window.print()}>
            <PiPrinter />
        </Button>
    );
}
