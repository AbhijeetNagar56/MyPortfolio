import { Download } from 'lucide-react';

const Product = () => {
  return (
    <div className="text-base sm:text-lg font-sans py-8 px-4 max-w-4xl mx-auto">
      <main className="flex flex-col items-center gap-12 text-center">
        {/* Hero Section */}
        {/* <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">Coming Soon...</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Stay tuned for something amazing. We’re working hard to bring you the best experience.
          </p>
        </div> */}

        {/* Download Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow-md border border-base-200 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Download Jaap108 App</h2>
          <a
            href="downloads/Jaap108.apk"
            download
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download APK
          </a>
          <p className="text-xs text-gray-500 mt-2">
            For Android devices only. Make sure to enable “Install from unknown sources” in settings.
          </p>
        </div>

        {/* Optional: Add a subtle footer or call-to-action */}
        <div className="pt-6 text-sm text-gray-500">
          Questions? <a href="mailto:support@example.com" className="link">Contact us</a>
        </div>
      </main>
    </div>
  );
};

export default Product;