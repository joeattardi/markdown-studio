import { Button } from '@/components/ui/button';
import { PiPrinter } from 'react-icons/pi';

export default function Print() {
    return (
        <Button size="sm" variant="outline" title="Print file" onClick={() => window.print()}>
            <PiPrinter />
        </Button>
    );
}
