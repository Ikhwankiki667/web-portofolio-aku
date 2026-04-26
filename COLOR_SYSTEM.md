# Portfolio Color System - Dark Minimalist

## Overview
Dark minimalist design dengan blue primary accent dan purple subtle accent. Fokus pada profesionalisme, clean aesthetic, dan kenyamanan mata.

## Color Palette

### Background System
- **Primary**: `#0B0F19` - Navy gelap (main background)
- **Secondary**: `#111827` - Layer kedua (cards, sections)
- **Tertiary**: `#020617` - Paling gelap (depth/contrast)

### Text Colors
- **Primary**: `#E5E7EB` - Text utama
- **Secondary**: `#9CA3AF` - Text sekunder
- **Tertiary**: `#6B7280` - Text hint/disabled

### Accent Colors
- **Primary Blue**: `#3B82F6` - Main accent (buttons, links, highlights)
- **Blue Hover**: `#60A5FA` - Hover state
- **Blue Active**: `#1D4ED8` - Active state
- **Secondary Purple**: `#8B5CF6` - Subtle accent (gradients, glow)
- **Purple Soft**: `#A78BFA` - Soft purple variant
- **Purple Deep**: `#6D28D9` - Deep purple variant

### Status Colors
- **Positive**: `#22C55E` - Success/positive states
- **Negative**: `#EF4444` - Error/negative states

### Borders & Effects
- **Border**: `rgba(255, 255, 255, 0.05)` - Subtle borders
- **Glass Effect**: `rgba(255, 255, 255, 0.03)` - Glassmorphism
- **Hover Overlay**: `rgba(255, 255, 255, 0.05)` - Hover effect
- **Glow**: `rgba(59, 130, 246, 0.2)` - Blue glow effect

## Gradients

### Main Gradient
```css
linear-gradient(135deg, #3B82F6, #8B5CF6)
```

### Subtle Gradient
```css
linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))
```

### Radial Glow
```css
radial-gradient(circle at top right, rgba(59, 130, 246, 0.10), transparent)
```

## Component Usage

### Buttons
- **Background**: `#3B82F6`
- **Hover**: `#60A5FA`
- **Text**: `#FFFFFF`

### Cards
- **Background**: `#111827`
- **Border**: `rgba(255, 255, 255, 0.05)`
- **Hover Shadow**: `rgba(59, 130, 246, 0.2)`

### Navigation
- **Active Link**: `#3B82F6`
- **Hover Link**: `#60A5FA`
- **Underline**: `#3B82F6`

### Forms
- **Input Background**: `#111827`
- **Focus Ring**: `#3B82F6`
- **Focus Ring Opacity**: `0.2`

## Design Principles

1. **Warna bukan fokus utama** - Konten adalah prioritas
2. **Accent secukupnya** - Maksimal 5-10% dari layar
3. **Hindari warna terlalu terang** - Tetap calm dan nyaman
4. **Gunakan layering** - Bukan flat design
5. **Subtle effects** - Glassmorphism dan glow yang halus

## CSS Variables

Semua warna tersimpan dalam CSS variables di `css/style.css`:

```css
--bg-primary: #0B0F19;
--bg-secondary: #111827;
--bg-tertiary: #020617;
--text-primary: #E5E7EB;
--text-secondary: #9CA3AF;
--text-tertiary: #6B7280;
--border-color: rgba(255, 255, 255, 0.05);
--accent-primary: #3B82F6;
--accent-primary-hover: #60A5FA;
--accent-primary-active: #1D4ED8;
--accent-secondary: #8B5CF6;
--accent-secondary-soft: #A78BFA;
--accent-secondary-deep: #6D28D9;
--positive: #22C55E;
--negative: #EF4444;
```

## Implementation Status

✅ CSS variables defined
✅ All HTML files updated
✅ Background system applied
✅ Button styling updated
✅ Card styling updated
✅ Navigation styling updated
✅ Form styling updated
✅ Gradient system applied
✅ Particle/shape colors updated
✅ Scrollbar styling updated

## Files Modified

- `css/style.css` - Color variables and component styles
- `home.html` - Navigation, hero, footer
- `about.html` - All sections with new colors
- `projects.html` - Project cards
- `contact.html` - Form inputs
- `certificates.html` - Certificate cards
- `index.html` - Redirect page
