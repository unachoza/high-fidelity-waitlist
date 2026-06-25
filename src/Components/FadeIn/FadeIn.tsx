import type { ReactNode } from "react";

import { useFadeIn } from "../../hooks/useFadeIn";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: Props) => {
  const {
    ref,
    visible,
  } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`
        fade-in
        ${visible ? "visible" : ""}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;