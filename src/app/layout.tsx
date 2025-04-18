import type { Metadata } from 'next';
import type { ReactElement, ReactNode } from 'react';

import { ThemeProvider } from '@/styles';
import GlobalStyle from '@/styles/GlobalStyle';

export const metadata: Metadata = {
  title: '',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html>
      <body>
        <ThemeProvider>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
