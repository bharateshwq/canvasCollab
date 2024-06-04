import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ConvexClientProvider } from '@/porviders/convex-client-provider';
import { ModalProvider } from '@/porviders/modal-provider';
import { Loading } from '@/components/auth/Loading';
import { Suspense } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vision Vault',
  description: 'COllaborative Whiteboard App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
