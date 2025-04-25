import { Button } from '@/components/ui/button';
import { PiTextB } from 'react-icons/pi';
import { useEditor } from '@/hooks/useEditor';

export default function Bold() {
    const { editorRef } = useEditor();

    function applyBold() {
        if (editorRef.current) {
            const selection = editorRef.current?.getSelection();
            
            if (selection) {
                const selectedText = editorRef.current.getModel()?.getValueInRange(selection);
                const newText = `**${selectedText}**`;

                editorRef.current.executeEdits('', [
                    {
                        range: selection,
                        text: newText,
                        forceMoveMarkers: true
                    }
                ]);
            }
        }
    }

    return (
        <Button size="sm" variant="outline" title="Bold" onClick={applyBold}>
            <PiTextB />
        </Button>
    )
}