# GitHub Pages Deployment Guide

This guide explains how to deploy your Evans Armah (HeaVans) portfolio website to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Your repository should be named `armahpen-mysite` (or update the URLs accordingly)

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub named `armahpen-mysite`
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/armahpen/armahpen-mysite.git
   cd armahpen-mysite
   ```

### Step 2: Add Your Website Files

1. Copy all the website files to your repository folder:
   - `index.html` (main entry point)
   - `assets/` folder (contains CSS, JS, and images)
   - All `.png` and `.pdf` files
   - `README.md`
   - `.gitignore`

2. Commit and push the files:
   ```bash
   git add .
   git commit -m "Deploy Evans Armah portfolio website to GitHub Pages"
   git push origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select "Deploy from a branch"
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 4: Access Your Live Website

Your website will be available at:
`https://armahpen.github.io/armahpen-mysite/`

It may take a few minutes for the deployment to complete.

## 🛠️ File Structure for GitHub Pages

```
armahpen-mysite/
├── index.html                    # Main entry point (required)
├── assets/
│   ├── index-CKVJlLCB.js        # Compiled React application
│   ├── index-D3qHZpoL.css       # Compiled styles
│   ├── grain_1751928350011-oAVkLcYF.webp
│   └── blur_1751928350012-BZ1r5ru2.webp
├── logo.png                     # Site logo
├── Evans_Armah_CV.pdf          # CV document
├── [other-images].png          # Portfolio images
├── README.md                   # Project documentation
├── .gitignore                  # Git ignore file
└── CNAME                      # Custom domain (optional)
```

## 🔧 Custom Domain (Optional)

If you have a custom domain:

1. Update the `CNAME` file with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. In GitHub repository settings, add your custom domain under "Custom domain"

## 📱 Features Included

- ✅ Responsive design for all devices
- ✅ Interactive animated background
- ✅ Multiple portfolio sections
- ✅ Mobile navigation menu
- ✅ SEO optimized
- ✅ Fast loading times
- ✅ Professional presentation

## 🔄 Updating Your Site

To update your live website:

1. Make changes to your files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Pages will automatically redeploy your site

## 🐛 Troubleshooting

**Site not loading?**
- Check that `index.html` is in the root directory
- Verify GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for deployment to complete

**Images not showing?**
- Ensure all image files are committed to the repository
- Check that file paths in HTML use relative paths (`./` or no prefix)

**Custom domain issues?**
- Verify DNS settings with your domain provider
- Check CNAME file contains only your domain name

## 📞 Need Help?

If you encounter issues during deployment, check:
- GitHub Pages documentation
- Repository settings
- Browser developer console for errors

---

*Ready to showcase your work to the world! 🚀*