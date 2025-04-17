export default function Header() {
    return (
        <header className="bg-slate-600 text-white p-2">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-10" />
                <h1 className="text-xl">Markdown Studio</h1>
            </div>
        </header>
    );
}
