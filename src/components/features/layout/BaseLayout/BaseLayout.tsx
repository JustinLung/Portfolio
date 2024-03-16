import { ReactNode } from 'react';
import styles from './BaseLayout.module.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { PageTransition } from '@/components/shared/PageTransition/PageTransition';

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout(props: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles['main']}>{props.children}</main>
      <Footer />
      <PageTransition />
    </>
  );
}
