import BaseLink from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<LinkProps> = (props) => {
  return (
    <BaseLink href={props.href}>
      <a className={props.className}>{props.children}</a>
    </BaseLink>
  );
};

export default Link;
