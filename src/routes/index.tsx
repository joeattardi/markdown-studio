import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { PiFileMd, PiLock, PiMonitor, PiArrowRight } from 'react-icons/pi';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Write Markdown with Confidence
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          A browser-based Markdown editor with live preview. Simple, fast, and private.
          Your content stays on your device.
        </p>
        <Link to="/write">
          <Button size="lg" className="font-semibold">
            Start Writing <PiArrowRight />
          </Button>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="mb-4 bg-primary/10 w-fit p-3 rounded-full">
              <PiFileMd className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
            <p className="text-slate-600">
              See your changes instantly with our side-by-side preview mode.
              Write and format with confidence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="mb-4 bg-primary/10 w-fit p-3 rounded-full">
              <PiLock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Private</h3>
            <p className="text-slate-600">
              Your content never leaves your device. Work with confidence
              knowing your data remains private.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="mb-4 bg-primary/10 w-fit p-3 rounded-full">
              <PiMonitor className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Interface</h3>
            <p className="text-slate-600">
              A clean, distraction-free interface that lets you focus on what
              matters most—your writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}