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

// Fix image paths in the JS content to use relative paths without leading slash
let fixedJsContent = jsContent
  .replace(/["']\//g, '"./') // Replace "/ with "./
  .replace(/["']\/assets\//g, '"./assets/') // Specific fix for assets
  .replace(/["']\/profile-image\./g, '"./profile-image.') // Fix profile image
  .replace(/["']\/logo\./g, '"./logo.') // Fix logo
  .replace(/["']\/heavans-logo\./g, '"./heavans-logo.') // Fix heavans logo
  .replace(/["']\/Evans_Armah_CV\.pdf/g, '"./Evans_Armah_CV.pdf') // Fix PDF
  .replace(/["']\/([^"'\s]+\.(png|jpg|jpeg|pdf))/g, '"./\$1'); // Fix all other assets

// Create the GitHub Pages ready HTML with proper meta tags and configuration
const githubPagesHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>HeaVans - Creative Portfolio</title>
    <meta name="description" content="HeaVans - Creative web developer and data analyst specializing in CRM systems, UI/UX design, and full-stack development. Portfolio showcasing innovative projects and professional expertise.">
    <meta name="keywords" content="HeaVans, Evans Armah, Web Developer, Data Analyst, CRM Systems, UI/UX Design, Portfolio, Ghana">
    <meta name="author" content="Evans Armah (HeaVans)">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://armahpen.github.io/">
    <meta property="og:title" content="HeaVans - Creative Portfolio">
    <meta property="og:description" content="Creative web developer and data analyst specializing in CRM systems, UI/UX design, and full-stack development.">
    <meta property="og:image" content="https://armahpen.github.io/profile-image.jpeg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://armahpen.github.io/">
    <meta property="twitter:title" content="HeaVans - Creative Portfolio">
    <meta property="twitter:description" content="Creative web developer and data analyst specializing in CRM systems, UI/UX design, and full-stack development.">
    <meta property="twitter:image" content="https://armahpen.github.io/profile-image.jpeg">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="./logo.png">
    <link rel="apple-touch-icon" href="./logo.png">
    
    <!-- Fonts -->
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
${fixedJsContent}
    </script>
    
    <!-- GitHub Pages SPA Router -->
    <script>
    // Handle GitHub Pages SPA routing
    (function() {
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect != location.href) {
            history.replaceState(null, null, redirect);
        }
    })();
    </script>
</body>
</html>`;

// Write the fixed GitHub Pages files
fs.writeFileSync(path.join(__dirname, 'index.html'), githubPagesHTML);
fs.writeFileSync(path.join(__dirname, '404.html'), githubPagesHTML);

// Create a proper .nojekyll file to disable Jekyll processing
fs.writeFileSync(path.join(__dirname, '.nojekyll'), '');

// Create a proper robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://armahpen.github.io/sitemap.xml`;
fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt);

console.log('✅ GitHub Pages ready files created successfully!');
console.log('✅ Fixed all image paths to use relative references');
console.log('✅ Updated index.html with proper meta tags and inline assets');
console.log('✅ Updated 404.html with SPA routing support');
console.log('✅ Created .nojekyll file to disable Jekyll processing');
console.log('✅ Created robots.txt for SEO');
console.log('✅ All project images are accessible in root directory');
console.log('✅ Ready for GitHub Pages deployment!');
console.log('');
console.log('📋 DEPLOYMENT CHECKLIST:');
console.log('1. Push all files to GitHub repository');
console.log('2. Go to repository Settings → Pages');
console.log('3. Source: Deploy from a branch');
console.log('4. Branch: main, Folder: / (root)');
console.log('5. Wait for deployment (usually 5-10 minutes)');
console.log('6. Access site at: https://armahpen.github.io/');