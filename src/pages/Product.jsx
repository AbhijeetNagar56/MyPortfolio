import { Download, Smartphone, Shield, Zap } from 'lucide-react';

const Product = () => {
  return (
    <div className="text-base sm:text-lg font-sans py-16 px-4 min-h-screen flex items-center">
      <main className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Jaap108 App</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Download our powerful Android application and experience seamless performance with cutting-edge features.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <Smartphone className="w-12 h-12 text-primary mb-3" />
              <h3 className="card-title text-lg">Mobile First</h3>
              <p className="text-sm text-gray-400">Optimized for all Android devices</p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <Zap className="w-12 h-12 text-primary mb-3" />
              <h3 className="card-title text-lg">Lightning Fast</h3>
              <p className="text-sm text-gray-400">Minimal resource usage</p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <Shield className="w-12 h-12 text-primary mb-3" />
              <h3 className="card-title text-lg">Secure</h3>
              <p className="text-sm text-gray-400">Your data is protected</p>
            </div>
          </div>
        </div>

        {/* Download Card */}
        <div className="card bg-gradient-to-br from-base-100 to-base-300 shadow-2xl border border-primary/30 max-w-md mx-auto mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center">Ready to Get Started?</h2>
            <p className="text-center text-gray-400 mb-6">
              Click below to download Jaap108 on your Android device
            </p>
            <a
              href="/Jaap108.apk"
              download
              className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2 hover:gap-3 transition-all"
            >
              <Download size={22} />
              Download APK
            </a>
            <div className="divider my-4"></div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-gray-400">Enable "Install from unknown sources" in your device settings</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-gray-400">Compatible with Android 5.0 and above</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-gray-400">File size: ~7.2 MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-3">Need help or have questions?</p>
          <a href="mailto:support@example.com" className="link link-primary text-lg">
            Contact Support
          </a>
        </div>
      </main>
    </div>
  );
};

export default Product;
