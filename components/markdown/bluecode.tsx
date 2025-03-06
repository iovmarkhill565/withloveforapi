import { PropsWithChildren } from "react";

export default function BlueCode({ children }: PropsWithChildren) {
  return (
    <code style={{ color: '#00BFFF' }}>{children}</code>
  );
};
