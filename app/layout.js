"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DarkModeProvider } from '../context/DarkModeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="d-flex flex-column min-vh-100" style={{ paddingTop: '80px' }}>
        <DarkModeProvider>
          <Bootstrap />
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}


