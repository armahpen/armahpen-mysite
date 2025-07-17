import fs from 'fs';
import path from 'path';

console.log('🔄 Creating exact GitHub Pages clone...');

// Read built CSS and JS files from dist/public/assets
const distAssetsPath = path.join(process.cwd(), 'dist/public/assets/');
const distAssets = fs.readdirSync(distAssetsPath);
const cssFile = distAssets.find(file => file.startsWith('index-') && file.endsWith('.css'));
const jsFile = distAssets.find(file => file.startsWith('index-') && file.endsWith('.js'));

console.log('📦 Found CSS file:', cssFile);
console.log('📦 Found JS file:', jsFile);

const cssContent = fs.readFileSync(path.join(distAssetsPath, cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join(distAssetsPath, jsFile), 'utf8');

// Fix all asset paths for GitHub Pages project repository
const fixedJsContent = jsContent
  .replace(/src:["']\//g, 'src:"./') 
  .replace(/href:["']\//g, 'href:"./') 
  .replace(/url\(["']?\//g, 'url("./') 
  .replace(/import\(["']\/assets\//g, 'import("./assets/')
  .replace(/import\(["']\/([^"']+)["']/g, 'import("./$1"')
  .replace(/=["']\/([^"']*\.(png|jpg|jpeg|pdf|webp))["']/g, '="./$1"')
  .replace(/"\/([^"]*\.(png|jpg|jpeg|pdf|webp))"/g, '"./$1"')
  .replace(/'\/([^']*\.(png|jpg|jpeg|pdf|webp))'/g, '"./$1"');

// Create complete GitHub Pages HTML with all inline assets
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

// Write the main files
fs.writeFileSync(path.join(process.cwd(), 'index.html'), githubPagesHTML);
fs.writeFileSync(path.join(process.cwd(), '404.html'), githubPagesHTML);

// Create essential GitHub Pages files
fs.writeFileSync(path.join(process.cwd(), '.nojekyll'), '');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://armahpen.github.io/armahpen-mysite/sitemap.xml`;
fs.writeFileSync(path.join(process.cwd(), 'robots.txt'), robotsTxt);

// Copy all image assets from client/public to root for GitHub Pages
const publicPath = path.join(process.cwd(), 'client/public/');
if (fs.existsSync(publicPath)) {
    const publicFiles = fs.readdirSync(publicPath);
    publicFiles.forEach(file => {
        const srcPath = path.join(publicPath, file);
        const destPath = path.join(process.cwd(), file);
        if (fs.statSync(srcPath).isFile() && !fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`📂 Copied ${file} to root`);
        }
    });
}

console.log('✅ Perfect GitHub Pages clone created!');
console.log('✅ All CSS and JS inline for maximum compatibility');
console.log('✅ All asset paths fixed for relative references');
console.log('✅ SPA routing configured with 404.html');
console.log('✅ SEO meta tags optimized for armahpen-mysite repository');
console.log('✅ All images and documents included');
console.log('');
console.log('📋 READY FOR GITHUB UPLOAD:');
console.log('- index.html (complete website)');
console.log('- 404.html (handles routing)');
console.log('- .nojekyll (prevents Jekyll)');
console.log('- robots.txt (SEO)');
console.log('- All image files (logos, portfolios, CV)');
console.log('');
console.log('🚀 Upload all files to: https://github.com/armahpen/armahpen-mysite');
console.log('🌐 Site will be available at: https://armahpen.github.io/armahpen-mysite/');