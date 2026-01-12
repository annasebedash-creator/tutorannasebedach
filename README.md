# Anna's Language Tutoring Website

A professional, modern website showcasing language tutoring services for Finnish, Russian, and English.

## 🎯 Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Easy-to-use form for potential students to reach out
- **Pricing Information**: Clear pricing with trial lesson offer
- **About Section**: Showcases your unique trilingual background
- **Teaching Approach**: Highlights your personalized, logical teaching method
- **Materials Section**: Displays the tools you use (Miro, Quizlet, etc.)

## 📁 Files

- `index.html` - Main website structure
- `styles.css` - All styling and design
- `script.js` - Interactive features and form handling

## 🚀 Getting Started

### Option 1: Open Locally
Simply double-click `index.html` to open it in your web browser.

### Option 2: Use a Local Server
For better performance and testing:

```bash
# If you have Python installed:
python -m http.server 8000

# Then open: http://localhost:8000
```

## ✏️ Customization Guide

### 1. Add Your Photo
Replace the placeholder in the hero section with your actual photo:
- Take or choose a professional, friendly photo of yourself
- Save it as `photo.jpg` or `photo.png` in the same folder
- In `index.html`, find the `.image-placeholder` div (around line 45)
- Replace it with: `<img src="photo.jpg" alt="Anna Sebedash" style="width: 100%; border-radius: 1rem;">`

### 2. Add Your Email
In `index.html`, find the contact section (around line 435) and replace:
```html
<p class="contact-value">your.email@example.com</p>
```
with your actual email address.

### 3. Add Screenshots/Videos of Your Materials

#### For Miro Board Example:
1. Take a screenshot of one of your Miro boards
2. Save it as `miro-example.png`
3. In `index.html`, find the Miro material card (around line 330)
4. Replace the `.demo-placeholder` div with:
```html
<img src="miro-example.png" alt="Miro Board Example" style="width: 100%; border-radius: 0.5rem;">
```

#### For Quizlet Example:
1. Take a screenshot of your Quizlet set
2. Save it as `quizlet-example.png`
3. Replace the corresponding `.demo-placeholder` div

#### For Personalized Materials:
Add screenshots of any custom materials you've created.

### 4. Set Up the Contact Form

The form currently shows a success message but doesn't actually send emails. To make it functional:

#### Option A: Use Formspree (Easiest, Free)
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form and get your endpoint URL
4. In `script.js`, uncomment and update the fetch code (around line 48):
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

#### Option B: Use EmailJS
1. Go to [emailjs.com](https://www.emailjs.com)
2. Set up an account and email service
3. Follow their documentation to integrate with the form

### 5. Update Testimonial
In the "My Approach" section, you can update the student quote with actual feedback:
- Find the blockquote in `index.html` (around line 275)
- Replace with real testimonials from your student

### 6. Adjust Pricing (if needed)
If you want to change prices:
- Find the pricing section in `index.html` (around line 370)
- Update the `€35` and `€17.50` values

## 🌐 Publishing Your Website

### Option 1: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for free
3. Drag and drop your entire folder
4. Get a free URL like `anna-tutor.netlify.app`
5. Optional: Connect a custom domain

### Option 2: GitHub Pages (Free)
1. Create a GitHub account
2. Create a repository called `your-username.github.io`
3. Upload your files
4. Access at `https://your-username.github.io`

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Deploy your site in minutes

## 🎨 Color Customization

Want to change the color scheme? In `styles.css`, update the CSS variables at the top:

```css
:root {
    --primary-color: #4F46E5;  /* Main brand color */
    --accent-color: #F59E0B;   /* Accent/highlight color */
    /* ... other colors ... */
}
```

## 📱 Testing

Before publishing, test your website:
- ✅ Check on different screen sizes (desktop, tablet, phone)
- ✅ Test all navigation links
- ✅ Submit the contact form
- ✅ Verify all images load
- ✅ Check that your email is correct

## 💡 Tips for Success

1. **Professional Photo**: Use a clear, well-lit photo where you look approachable
2. **Regular Updates**: Add new student testimonials as you get them
3. **Show Your Work**: Add screenshots of actual lessons/materials
4. **Be Authentic**: The personal story is your strength - keep it genuine
5. **SEO**: Consider adding meta tags for better search engine visibility

## 🔧 Technical Support

If you need help:
1. The website uses only HTML, CSS, and JavaScript (no frameworks needed)
2. Works in all modern browsers (Chrome, Firefox, Safari, Edge)
3. No installation or build process required

## 📝 Next Steps

1. [ ] Add your photo
2. [ ] Update email address
3. [ ] Add screenshots of materials
4. [ ] Set up form submission
5. [ ] Test on different devices
6. [ ] Publish to the web
7. [ ] Share with potential students!

---

Good luck with your tutoring business! 🎉
