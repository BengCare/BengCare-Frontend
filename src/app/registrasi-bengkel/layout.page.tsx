import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Registration | BengCare',
  description: 'Registasi bengkel anda ke program Mitra Awal kami!',
};

export default function BengkelRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
