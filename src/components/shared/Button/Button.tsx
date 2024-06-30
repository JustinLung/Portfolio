import { HTMLAttributes, ReactNode } from 'react';
import { Arrow } from '@/components/icons';
import cn from 'clsx';
import { Link } from '../Link/Link';

interface ButtonInterface extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  href?: string | null;
  className?: string;
  icon?: boolean;
  type?: 'button' | 'reset' | 'submit' | undefined;
  onClick?: () => void;
}

export default function Button(props: ButtonInterface) {
  const { className, children, href, icon, type, ...rest } = props;

  const _className = cn(!href ? 'button' : 'link', className);

  return href ? (
    <Link
      href={href}
      target={href?.includes('http') ? '_blank' : undefined}
      rel={href?.includes('http') ? 'noopener noreferrer' : undefined}
      className={_className}
      {...rest}>
      {children}
      {icon ? <Arrow /> : undefined}
    </Link>
  ) : (
    <button type={type} {...rest} className={_className}>
      {children}
      {icon ? <Arrow /> : undefined}
    </button>
  );
}
