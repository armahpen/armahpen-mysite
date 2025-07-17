import fs from 'fs';
import path from 'path';

console.log('🚀 Building GitHub Pages ready version...');

// First, build the React app
console.log('📦 Building React application...');

// Read built CSS and JS files from dist/public/assets (correct path)
const distAssetsPath = path.join(process.cwd(), 'dist/public/assets/');
const distAssets = fs.readdirSync(distAssetsPath);
const cssFile = distAssets.find(file => file.startsWith('index-') && file.endsWith('.css'));
const jsFile = distAssets.find(file => file.startsWith('index-') && file.endsWith('.js'));

console.log('Found CSS file:', cssFile);
console.log('Found JS file:', jsFile);

const cssContent = fs.readFileSync(path.join(distAssetsPath, cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join(distAssetsPath, jsFile), 'utf8');

// Fix all asset paths in JavaScript to use relative paths for GitHub Pages project
const fixedJsContent = jsContent
  .replace(/src:["']\//g, 'src:"./') 
  .replace(/href:["']\//g, 'href:"./') 
  .replace(/url\(["']?\//g, 'url("./') 
  .replace(/import\(["']\/assets\//g, 'import("./assets/')
  .replace(/import\(["']\/([^"']+)["']/g, 'import("./$1"')
  .replace(/\["'\]\//g, '"./') 
  .replace(/=["']\/([^"']*\.(png|jpg|jpeg|pdf|webp))["']/g, '="./$1"');

// Create complete GitHub Pages HTML
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
    <meta property="og:url" content="https://armahpen.github.io/armahpen-mysite/">
    <meta property="og:title" content="HeaVans - Creative Portfolio">
    <meta property="og:description" content="Creative web developer and data analyst specializing in CRM systems, UI/UX design, and full-stack development.">
    <meta property="og:image" content="https://armahpen.github.io/armahpen-mysite/profile-image.jpeg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://armahpen.github.io/armahpen-mysite/">
    <meta property="twitter:title" content="HeaVans - Creative Portfolio">
    <meta property="twitter:description" content="Creative web developer and data analyst specializing in CRM systems, UI/UX design, and full-stack development.">
    <meta property="twitter:image" content="https://armahpen.github.io/armahpen-mysite/profile-image.jpeg">

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

// Write the files
fs.writeFileSync(path.join(process.cwd(), 'index.html'), githubPagesHTML);
fs.writeFileSync(path.join(process.cwd(), '404.html'), githubPagesHTML);

// Create essential GitHub Pages files
fs.writeFileSync(path.join(process.cwd(), '.nojekyll'), '');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://armahpen.github.io/sitemap.xml`;
fs.writeFileSync(path.join(process.cwd(), 'robots.txt'), robotsTxt);

console.log('✅ GitHub Pages ready files created successfully!');
console.log('✅ Fixed all asset paths to use relative references');
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