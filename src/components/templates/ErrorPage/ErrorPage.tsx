import Button from '@/components/shared/Button/Button';
import styles from './ErrorPage.module.css';

interface ErrorPageProps {
  statusCode?: number | null;
}

export function ErrorPage(props: ErrorPageProps) {
  return (
    <section className={styles['notfound']}>
      <h1 className={styles['notfound-title']}>404</h1>
      <p className={styles['notfound-description']}>
        The page you are looking for doesn&apos;t exist.
      </p>
      <Button href="/" className="button" icon={true}>
        Return Home
      </Button>
    </section>
  );
}
