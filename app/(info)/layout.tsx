import type { Metadata } from "next";
import Header from "@/components/header";

import styles from './layout.module.css';
import '@/components/style/header.module.css'

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
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
