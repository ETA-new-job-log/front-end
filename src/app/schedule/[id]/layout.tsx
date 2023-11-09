import { ReactNode } from 'react';

interface DetaillayoutProps {
  children: ReactNode;
}
export default function Detaillayout({ children }: DetaillayoutProps) {
  return (
    <section className="min-h-screen web:min-h-full w-full bg-white">
      {children}
    </section>
  );
}