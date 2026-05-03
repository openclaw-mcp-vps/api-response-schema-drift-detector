export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect When APIs Change<br />
          <span className="text-[#58a6ff]">Response Schemas</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Continuously monitors your API endpoints, stores response schemas, and alerts you the instant a breaking change is detected — before your users notice.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Schema Snapshots</h3>
            <p className="text-sm text-[#8b949e]">Captures and stores the full JSON schema of every API response on each poll cycle.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified via email or webhook the moment a field is added, removed, or its type changes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Drift Reports</h3>
            <p className="text-sm text-[#8b949e]">Visual diff reports show exactly what changed between schema versions with timestamps.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 50 monitored endpoints</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 1-minute polling intervals</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; webhook alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day schema history</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Visual diff reports</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as a schema change?</h3>
            <p className="text-sm text-[#8b949e]">Any structural change to the JSON response: added or removed fields, type changes (e.g. string to number), or changes in array item shapes all trigger an alert.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does polling work?</h3>
            <p className="text-sm text-[#8b949e]">A background job hits your configured endpoints at your chosen interval (as fast as every minute), compares the inferred schema to the stored baseline, and fires alerts on any drift.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I monitor authenticated APIs?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You can configure custom headers (including Authorization tokens) per endpoint so private APIs are monitored just like public ones.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#6e7681]">
        © {new Date().getFullYear()} API Schema Drift Detector. All rights reserved.
      </footer>
    </main>
  )
}
