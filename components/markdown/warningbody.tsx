import { PropsWithChildren } from "react";

export default function BodyField({ children }: PropsWithChildren) {
  return (
    <code style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '2px' }}>
      {children}
      <span style={{ color: 'red', fontWeight: 'bold', fontSize: '8px' }}>*</span>
    </code>
  );
}