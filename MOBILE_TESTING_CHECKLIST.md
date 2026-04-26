# Mobile Testing Checklist

## Device Sizes to Test
- [ ] iPhone SE (375x667)
- [ ] iPhone 12/13 (390x844)
- [ ] iPhone 14 Pro Max (430x932)
- [ ] Samsung Galaxy S21 (360x800)
- [ ] Pixel 5 (393x851)
- [ ] iPad Mini (768x1024) - Tablet
- [ ] Landscape mode (all devices)

## Navigation & Menu
- [ ] Mobile menu button visible
- [ ] Mobile menu opens/closes smoothly
- [ ] Menu items clickable (min 44x44px)
- [ ] Menu closes when clicking link
- [ ] Navigation links work correctly
- [ ] Active page highlighted

## Buttons & Interactive Elements
- [ ] All buttons min 44x44px
- [ ] Button text readable
- [ ] Buttons have touch feedback
- [ ] CTA buttons work ("Mulai Sekarang", "Hubungi Aku")
- [ ] Project "Kode" buttons work
- [ ] Tech stack items clickable

## Forms (Contact Page)
- [ ] Input fields min 44px height
- [ ] Font size 16px (no zoom on iOS)
- [ ] Placeholder text visible
- [ ] Focus ring visible
- [ ] Captcha question readable
- [ ] Captcha input works
- [ ] Submit button works
- [ ] Form validation works
- [ ] Success/error messages display

## Images
- [ ] Images load properly
- [ ] Images responsive (not cut off)
- [ ] Images not too large (performance)
- [ ] Lazy loading works
- [ ] No broken images

## Typography
- [ ] Headings readable (not too small)
- [ ] Body text readable (16px+)
- [ ] Line height comfortable (1.6+)
- [ ] No text overflow
- [ ] Proper contrast (dark text on light, etc)

## Spacing & Layout
- [ ] No horizontal scroll
- [ ] Proper padding on edges
- [ ] Cards not cramped
- [ ] Sections well-spaced
- [ ] Footer not overlapping content
- [ ] Safe area respected (notched devices)

## Performance
- [ ] Page loads in < 3 seconds
- [ ] Smooth scrolling
- [ ] No janky animations
- [ ] No lag when tapping
- [ ] Animations disabled (performance)

## Modals & Popups
- [ ] Tech stack modal opens
- [ ] Modal readable on small screen
- [ ] Modal close button works
- [ ] Can close with ESC key
- [ ] Can close by tapping outside
- [ ] Modal content scrollable if needed

## Landscape Mode
- [ ] Layout adjusts properly
- [ ] Content not cut off
- [ ] Buttons still accessible
- [ ] Text still readable

## Accessibility
- [ ] Can navigate with keyboard
- [ ] Touch targets clearly defined
- [ ] Color contrast sufficient
- [ ] ARIA labels present
- [ ] Form labels associated

## Browser Compatibility
- [ ] Chrome Mobile (Android)
- [ ] Safari (iOS)
- [ ] Samsung Internet
- [ ] Firefox Mobile
- [ ] Opera Mobile

## Network Conditions
- [ ] Works on 4G
- [ ] Works on 3G (slower)
- [ ] Works on WiFi
- [ ] Handles slow loading gracefully

## Orientation Changes
- [ ] Portrait mode works
- [ ] Landscape mode works
- [ ] No layout shift when rotating
- [ ] Content readable in both

## Special Cases
- [ ] Works with notched devices (iPhone X+)
- [ ] Works with status bar
- [ ] Works with navigation bar
- [ ] Handles keyboard appearing (forms)

## Console Errors
- [ ] No JavaScript errors
- [ ] No CSS warnings
- [ ] No network errors
- [ ] Easter egg message appears

## Final Checks
- [ ] All pages tested
- [ ] All features working
- [ ] Performance acceptable
- [ ] No critical issues
- [ ] Ready for production

---

## Testing Notes

### How to Use This Checklist
1. Open portfolio on mobile device
2. Go through each section
3. Mark items as tested
4. Note any issues found
5. Fix issues and re-test

### Common Issues to Watch For
- Text too small (< 14px)
- Buttons too small (< 44px)
- Horizontal scrolling
- Images not loading
- Forms not submitting
- Modals not closing
- Performance issues

### Performance Testing
Use Chrome DevTools:
1. Open DevTools (F12)
2. Go to Performance tab
3. Record page load
4. Check for long tasks
5. Aim for smooth 60fps

### Lighthouse Audit
1. Open DevTools
2. Go to Lighthouse tab
3. Select "Mobile"
4. Run audit
5. Target scores:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

**Last Updated**: 2026-04-27
**Status**: Ready for Testing
