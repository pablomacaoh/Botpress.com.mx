import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');

// Ensure the dist directory exists
if (!fs.existsSync(distDir)) {
    console.error('Dist directory does not exist!');
    process.exit(1);
}

const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

try {
    // Copy index.html to 404.html
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('Successfully copied index.html to 404.html');
} catch (error) {
    console.error('Error copying index.html to 404.html:', error);
    process.exit(1);
} 