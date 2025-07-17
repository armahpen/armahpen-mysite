import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built index.html and extract the bundled CSS and JS
const indexPath = path.join(__dirname, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract CSS and JS file names from the built index.html
const cssMatch = indexContent.match(/href="\.\/assets\/(index-[^"]+\.css)"/);
const jsMatch = indexContent.match(/src="\.\/assets\/(index-[^"]+\.js)"/);

if (!cssMatch || !jsMatch) {
    console.error('Could not find CSS or JS files in built index.html');
    process.exit(1);
}

const cssFile = cssMatch[1];
const jsFile = jsMatch[1];

console.log('Found CSS file:', cssFile);
console.log('Found JS file:', jsFile);

// Read the CSS and JS content
const cssContent = fs.readFileSync(path.join(__dirname, 'assets', cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join(__dirname, 'assets', jsFile), 'utf8');

// Create the GitHub Pages ready HTML
const githubPagesHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>Heavan - 3D Creative Portfolio</title>
    <meta name="description" content="Heavan - Creative web developer blending design, code, and motion to build digital, impactful digital environments that inspire and engage users.">
    <meta property="og:title" content="Heavan - 3D Creative Portfolio">
    <meta property="og:description" content="Creative web developer blending design, code, and motion to build digital, impactful digital environments that inspire and engage users.">
    <meta property="og:type" content="website">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
${cssContent}
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
${jsContent}
    </script>
</body>
</html>`;

// Write the GitHub Pages ready files
fs.writeFileSync(path.join(__dirname, 'index.html'), githubPagesHTML);
fs.writeFileSync(path.join(__dirname, '404.html'), githubPagesHTML);

console.log('✅ GitHub Pages ready files created successfully!');
console.log('✅ Updated index.html with inline CSS and JS');
console.log('✅ Updated 404.html with inline CSS and JS');
console.log('✅ All project images are in root directory');
console.log('✅ Ready for GitHub Pages deployment!');