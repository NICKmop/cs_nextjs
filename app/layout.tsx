import type { Metadata } from "next";
import './global.css';

// () -> 그룹 지정
// metadata 명칭 고정
export const metadata:Metadata = {
  title: {
    template: "%s | Next",
    default : "Next project"
  },
  description: 'portress attack'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
