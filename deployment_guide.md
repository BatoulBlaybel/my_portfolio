# Portfolio Website Deployment and Maintenance Guide

## Overview
This document provides instructions for deploying and maintaining your data science portfolio website. The website is built with React and features a responsive design with a purple and black color scheme, showcasing your data science, statistics, and data analysis projects.

## Project Structure
The portfolio website follows a standard React project structure:
- `public/` - Static assets and index.html
- `src/` - Source code
  - `components/` - React components for each section
  - `assets/` - Images and other assets
  - `App.tsx` - Main application component
  - `index.css` - Global styles
  - `App.css` - Component-specific styles

## Deployment Options

### Option 1: GitHub Pages (Recommended for Portfolios)
1. Create a GitHub repository for your portfolio
2. Push the code to the repository
3. Install GitHub Pages package: `npm install --save gh-pages`
4. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
5. Add homepage to package.json: `"homepage": "https://yourusername.github.io/repository-name"`
6. Deploy with: `npm run deploy`

### Option 2: Netlify
1. Create an account on Netlify
2. Build the project: `npm run build`
3. Drag and drop the build folder to Netlify's upload area, or
4. Connect your GitHub repository for continuous deployment

### Option 3: Vercel
1. Create an account on Vercel
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory and follow prompts

## Customization Guide

### Updating Content
1. **About Section**: Edit the content in `src/components/About.tsx`
2. **Skills Section**: Modify the skills array in `src/components/Skills.tsx`
3. **Projects Section**: Update the projects array in `src/components/Projects.tsx`
4. **Contact Section**: Edit contact information in `src/components/Contact.tsx`

### Changing Colors
The color scheme is defined in CSS variables at the top of `src/index.css`. Modify these values to change the color scheme:
```css
:root {
  --primary-purple: #663399;
  --dark-purple: #4B2E83;
  --light-purple: #9370DB;
  --accent-purple: #D8BFD8;
  --primary-black: #000000;
  --dark-gray: #333333;
  --medium-gray: #666666;
  --light-gray: #F5F5F5;
  --white: #FFFFFF;
}
```

### Adding New Projects
To add a new project, add an entry to the `projectsData` array in `src/components/Projects.tsx`:
```javascript
{
  title: "Your New Project",
  category: "data-science", // Choose an existing category or create a new one
  status: "completed", // or "in-progress"
  tags: ["Python", "Machine Learning", "Data Visualization"],
  description: "A brief description of your project...",
  image: "/project-image.jpg" // Add image to public/images folder
}
```

### Adding New Skills
To add a new skill, add an entry to the `skillsData` array in `src/components/Skills.tsx`:
```javascript
{
  title: "Your New Skill",
  icon: "icon-name", // FontAwesome icon name
  description: "Description of your skill..."
}
```

## Maintenance Tasks

### Regular Updates
To keep your portfolio current:
1. Update project descriptions and add new projects as you complete them
2. Refresh your skills section as you acquire new capabilities
3. Update your about section to reflect your current professional focus

### Technical Maintenance
1. Update dependencies periodically: `npm update`
2. Check for security vulnerabilities: `npm audit`
3. Test the site after updates to ensure everything works correctly

### Performance Optimization
1. Optimize images using tools like TinyPNG before adding them
2. Consider lazy loading for project images
3. Regularly test performance using Lighthouse in Chrome DevTools

## Troubleshooting Common Issues

### Layout Issues
- If layout appears broken on certain devices, check the responsive breakpoints in CSS
- Ensure images have appropriate dimensions and aspect ratios

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for syntax errors in your component files
- Verify all imports are correct

### Deployment Issues
- Ensure all paths are relative, not absolute
- Check that all assets are properly included in the build
- Verify environment variables are properly configured

## Getting Help
If you need assistance with customization or encounter issues:
- React documentation: https://reactjs.org/docs
- CSS troubleshooting: https://developer.mozilla.org/en-US/docs/Web/CSS
- Deployment help: Check the documentation for your chosen hosting platform

## Conclusion
Your portfolio website is designed to be maintainable and extensible. Regular updates will ensure it continues to effectively showcase your data science skills and projects.
