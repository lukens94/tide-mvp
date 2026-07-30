import type { Metadata } from 'next';
import '@fontsource-variable/schibsted-grotesk';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/700.css';
import { QueryProvider } from '@/components/providers/query-provider';
import { ThemeProvider, THEME_BOOTSTRAP_SCRIPT } from '@/components/providers/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tide',
  description: 'La marea del team, in un’unica spiaggia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="it" className="h-full antialiased" suppressHydrationWarning>
      <body className="theme-dark flex min-h-full flex-col font-sans" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
