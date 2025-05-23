import fs from 'fs';
import path from 'path';
import AboutContent from './AboutContent';

export default function AboutPage() {
  // 1) Point to your public/images/clients folder
  const logosDirectory = path.join(process.cwd(), 'public', 'images', 'clients');

  // 2) Read & filter only images
  const clientLogos = fs
    .readdirSync(logosDirectory)
    .filter((f) => /\.(png|jpe?g|svg)$/i.test(f));

  // 3) Delegate all UI/animation to the client‐only component
  return <AboutContent clientLogos={clientLogos} />;
} 