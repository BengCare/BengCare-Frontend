import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Registration | BengCare',
  description: 'BengCare, Connecting you to trusted automotive services!',
};

export default function BengkelRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
