/**
 * dist/ ka saara content public_html/ mein copy karta hai.
 * Use: npm run deploy (pehle build hota hai, phir copy)
 * Hostinger par public_html folder ka content upload karo.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const outDir = join(root, 'public_html');

function copyRecursive(src, dest) {
  if (!existsSync(src)) return;
  if (statSync(src).isDirectory()) {
    if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
    for (const name of readdirSync(src)) {
      copyRecursive(join(src, name), join(dest, name));
    }
  } else {
    const destDir = dirname(dest);
    if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
    copyFileSync(src, dest);
  }
}

if (!existsSync(distDir)) {
  console.error('dist/ nahi mila. Pehle run karo: npm run build');
  process.exit(1);
}
if (existsSync(outDir)) rmSync(outDir, { recursive: true });
console.log('Copying dist/ -> public_html/ ...');
copyRecursive(distDir, outDir);
console.log('Done. Ab public_html/ ke andar ka saaman Hostinger par public_html me upload karo.');
