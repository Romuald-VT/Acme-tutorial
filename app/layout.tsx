import '@/app/ui/global.css'
import {Inter} from 'next/font/google';

const inter = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin','latin-ext'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
