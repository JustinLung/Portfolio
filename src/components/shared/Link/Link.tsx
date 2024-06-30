import { HTMLAttributes, ReactNode, RefAttributes } from "react";
import { LinkProps as NextLinkProps, default as NextLink } from "next/link";
import { usePageTransition } from "@/state/pageTransition";

type LinkProps = NextLinkProps &
  RefAttributes<HTMLAnchorElement> & {
    noTransition?: boolean;
    children: ReactNode;
    target?: string;
  } & HTMLAttributes<HTMLAnchorElement>;

export function Link(props: LinkProps) {
  const { noTransition = false, children, ...rest } = props;
  return (
    <NextLink
      {...rest}
      onClick={(e) => {
        if (!noTransition) {
          e.preventDefault();
          usePageTransition.setState({ triggerTransition: props.href });
        }
        props.onClick?.(e);
      }}
    >
      {children}
    </NextLink>
  );
}
