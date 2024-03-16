import { HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { LinkProps as NextLinkProps, default as NextLink } from 'next/link';
import { usePageTransition } from '@/state/pageTransition';

type LinkProps = NextLinkProps &
  RefAttributes<HTMLAnchorElement> & {
    noTransition?: boolean;
    children: ReactNode;
    target?: string;
  } & HTMLAttributes<HTMLAnchorElement>;

export function Link(props: LinkProps) {
  const { noTransition, children, ...rest } = props;
  return (
    <NextLink
      onClick={e => {
        if (!noTransition) {
          e.preventDefault();
          usePageTransition.setState({ triggerTransition: props.href });
        }
        props?.onClick && props.onClick(e);
      }}
      {...rest}>
      {children}
    </NextLink>
  );
}
