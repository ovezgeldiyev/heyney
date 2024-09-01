import Link from "next/link";
import React, {ReactNode} from "react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  url?: string;
  size?: "small" | "medium" | "large";
}

function Button(props: buttonProps) {
  const {children, className, url, size = "medium", ...rest} = props;

  let Comp: React.ElementType = "button";

  if (url) {
    Comp = Link;
  }

  return (
    <Comp
      {...(url ? {href: url} : {})}
      {...rest}
      className={`button ${size} ${className || ""}`.trim()}
    >
      {children}
    </Comp>
  );
}

export default Button;
