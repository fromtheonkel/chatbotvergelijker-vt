import Link from 'next/link';
import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand rounded-lg flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-white">LokaalAI</span>
            </div>
            <p className="text-sm leading-relaxed">
              Jouw gids voor het draaien van AI op eigen hardware. Privé, gratis en zonder beperkingen.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Pagina&apos;s</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-brand transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-brand transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Ollama</a></li>
              <li><a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Hugging Face</a></li>
              <li><a href="https://openwebui.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Open WebUI</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} LokaalAI. Alle informatie is vrij beschikbaar.</p>
          <p className="mt-1">Deze website gebruikt cookieloze analytics en plaatst geen tracking cookies.</p>
        </div>
      </div>
    </footer>
  );
}
