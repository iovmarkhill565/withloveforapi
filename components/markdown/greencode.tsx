import { PropsWithChildren } from "react";

export default function GreenCode({ children }: PropsWithChildren) {
  return (
    <code style={{ color: 'green' }}>{children}</code>
  );
};
