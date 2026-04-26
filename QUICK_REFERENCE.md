# Quick Reference Guide

## 🎨 Color System

### Primary Colors
```css
--bg-primary: #0B0F19;        /* Navy dark background */
--accent-primary: #3B82F6;    /* Blue - buttons, links */
--accent-secondary: #8B5CF6;  /* Purple - gradients */
```

### Usage
- **Buttons**: `bg-blue-500 hover:bg-blue-600`
- **Links**: `text-blue-500 hover:text-blue-600`
- **Cards**: `bg-[#111827] border-blue-500/20`
- **Gradients**: `linear-gradient(135deg, #3B82F6, #8B5CF6)`

---

## 📱 Mobile Breakpoints

```css
/* Mobile First */
@media (max-width: 768px) { ... }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }

/* Landscape */
@media (orientation: landscape) { ... }

/* Very Small Screens */
@media (max-width: 374px) { ... }
```

---

## 🔧 Common Tasks

### Add New Button
```html
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
  Click Me
</button>
```

### Add New Card
```html
<div class="bg-[#111827] border-2 border-blue-500/20 rounded-lg p-6">
  Content here
</div>
```

### Add New Link
```html
<a href="#" class="text-blue-500 hover:text-blue-600 transition">Link</a>
```

### Add New Form Input
```html
<input type="text" placeholder="Enter text" 
  class="w-full bg-[#111827] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
```

---

## 📊 File Structure

```
Porto/
├── css/
│   └── style.css              # All styles (colors + mobile)
├── js/
│   ├── main.js                # Entry point
│   └── classes/
│       ├── UIController.js    # Mobile optimizations
│       ├── ProjectHandler.js  # Project buttons
│       ├── FormHandler.js     # Contact form
│       ├── TechStackController.js  # Tech modal
│       └── ...
├── images/
│   └── ...
├── *.html                     # 6 HTML pages
├── COLOR_SYSTEM.md            # Color documentation
├── BUG_FIXES.md              # Bug fixes
├── MOBILE_OPTIMIZATION.md    # Mobile guide
├── MOBILE_TESTING_CHECKLIST.md
└── OPTIMIZATION_SUMMARY.md
```

---

## 🚀 Performance Tips

### For Desktop
- Keep animations smooth (60fps)
- Use CSS transitions (not JS)
- Lazy load images
- Minimize repaints

### For Mobile
- Disable heavy animations
- Use passive event listeners
- Lazy load images
- Reduce CSS complexity

---

## 🧪 Testing Commands

### Local Server
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

### Mobile Testing
```bash
# Get local IP
ipconfig (Windows)
ifconfig (Mac/Linux)

# Open on mobile: http://[YOUR_IP]:8000
```

### Lighthouse Audit
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Mobile"
4. Run audit

---

## 🐛 Common Issues & Fixes

### Issue: Text too small on mobile
**Fix**: Add `@media (max-width: 768px) { font-size: 16px !important; }`

### Issue: Button not tappable
**Fix**: Ensure min-height: 44px and min-width: 44px

### Issue: Form input zooms on iOS
**Fix**: Set font-size to 16px minimum

### Issue: Hover effects on mobile
**Fix**: Use `:active` instead of `:hover` for mobile

### Issue: Horizontal scroll
**Fix**: Check max-width and overflow properties

---

## 📝 Git Workflow

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### Stage Changes
```bash
git add .
```

### Commit
```bash
git commit -m "Your message"
```

### View History
```bash
git log --oneline -10
```

---

## 🎯 Optimization Checklist

### Before Deployment
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iPhone, Android)
- [ ] Run Lighthouse audit
- [ ] Check console for errors
- [ ] Verify all links work
- [ ] Test forms
- [ ] Test modals
- [ ] Check performance metrics

### Performance Targets
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Lighthouse Performance > 90
- [ ] No console errors

---

## 📚 Documentation

### Main Docs
- `COLOR_SYSTEM.md` - Color palette & usage
- `BUG_FIXES.md` - What was fixed
- `MOBILE_OPTIMIZATION.md` - Mobile guide
- `MOBILE_TESTING_CHECKLIST.md` - Testing guide
- `OPTIMIZATION_SUMMARY.md` - Overall summary

### Quick Links
- Color variables: `css/style.css` (lines 29-45)
- Mobile CSS: `css/style.css` (lines 420+)
- Mobile JS: `js/classes/UIController.js` (lines 18-70)

---

## 💡 Pro Tips

1. **Always test on real devices** - Emulator ≠ Real device
2. **Use Chrome DevTools** - Powerful for debugging
3. **Check Lighthouse regularly** - Catch issues early
4. **Mobile-first approach** - Design for mobile first
5. **Test slow networks** - Use DevTools throttling
6. **Accessibility matters** - ARIA labels, semantic HTML
7. **Performance is UX** - Fast = Happy users

---

## 🔗 Useful Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web.dev](https://web.dev/)

### Tools
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

### Mobile Testing
- [BrowserStack](https://www.browserstack.com/)
- [Responsively App](https://responsively.app/)
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

---

**Last Updated**: 2026-04-27
**Version**: 1.0.0
**Status**: Production Ready ✅
