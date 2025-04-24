import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useStore from '@/store';

export default function MarkdownPreview() {
    const markdown = useStore((state) => state.markdown);

    return (
        <div className="flex flex-col bg-slate-200 overflow-hidden print:overflow-visible print:w-screen">
            <div className="bg-slate-100 flex-grow border border-slate-300 p-4 prose prose-pre:bg-transparent print:prose-code:whitespace-pre-wrap print:prose-code:break-all prose-pre:text-black dark:prose-invert max-w-none overflow-auto print:overflow-visible print:border-0">
                <Markdown
                    components={{
                        code({
                            children,
                            className,
                            ...props
                        }: {
                            children?: React.ReactNode;
                            className?: string;
                        }) {
                            const match = /language-(\w+)/.exec(className || '');
                            const code = String(children ?? '').replace(/\n$/, '');

                            return match ? (
                                <SyntaxHighlighter
                                    style={oneLight}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {code}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {markdown}
                </Markdown>
            </div>
        </div>
    );
}
