import 'https://cdn.jsdelivr.net/npm/reveal.js-mermaid-plugin';
import 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/highlight/highlight.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/markdown/markdown.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/plugin/notes/notes.min.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.min.js';

Reveal.initialize({
  history: true,
  transition: 'linear',
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMermaid],
  markdown: {
    smartypants: true,
    mermaid: true,
  },
});
