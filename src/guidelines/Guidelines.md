# Kavi Kannada Development Guidelines

These guidelines ensure consistency across the Kavi Kannada app development (both web prototype and Android Kotlin app).

---

## General Guidelines

### Code Structure
- Keep components small and focused (max 250 lines)
- Extract reusable logic into custom hooks or utility functions
- Use TypeScript/Kotlin types strictly - no `any` types
- Component files should be named in PascalCase (e.g., `KeyboardDemo.tsx`)

### Layout Best Practices
- Use flexbox and grid for layouts - avoid absolute positioning unless necessary
- Mobile-first approach: design for 360px width minimum
- Use responsive units (rem, %, vh/vw) instead of fixed pixels where possible
- Maximum content width: 480px for mobile screens

### Performance
- Lazy load screens/components that aren't immediately visible
- Optimize images (use WebP format where possible)
- Debounce search inputs (300ms minimum)
- Memoize expensive computations with `useMemo`/`useCallback`

---

## Material You 2025 Design System

### Core Design Principles

Kavi Kannada follows **Material Design 3 (Material You 2025)** specifications. The design emphasizes:

1. **Organic Shapes** - Rounded corners (20-32px) for warmth and approachability
2. **Elevation Hierarchy** - Subtle shadows create depth without harshness
3. **Dynamic Color** - Purple-based palette with gradient accents
4. **Expressive Motion** - Spring animations for natural, playful interactions
5. **Accessible First** - 4.5:1 contrast minimum, 48px touch targets

### Color System

#### Primary Colors
```
Primary: #6750A4
Primary Container: #E8DEF8
On Primary: #FFFFFF
On Primary Container: #21005D

Secondary: #625B71
Secondary Container: #E8DEF8
On Secondary: #FFFFFF
On Secondary Container: #1D192B

Tertiary: #7D5260
Tertiary Container: #FFD8E4
On Tertiary: #FFFFFF
On Tertiary Container: #31111D
```

#### Surface Colors
```
Surface: #FFFFFF
Surface Variant: #E7E0EC
Surface Tint: #6750A4
Background: #FEF7FF  ← Main app background (purple tint)
On Surface: #1C1B1F
On Surface Variant: #49454F
```

#### Outline Colors
```
Outline: #79747E
Outline Variant: #CAC4D0
```

#### Semantic Colors
```
Error: #EF4444
Success: #4ADE80
Warning: #FBBF24

Web Link: #60A5FA (Background: #EFF6FF)
Phone: #4ADE80 (Background: #F0FDF4)
Email: #A78BFA (Background: #FAF5FF)
Text: #FBBF24 (Background: #FFFBEB)
```

### Typography System

**IMPORTANT**: Always use CSS classes from `globals.css` instead of Tailwind text utilities.

#### Display Styles
```css
.display-large
  font-size: 57px
  line-height: 64px
  font-weight: 400
```

#### Headline Styles
```css
.headline-large
  font-size: 32px
  line-height: 40px
  font-weight: 400

.headline-medium
  font-size: 28px
  line-height: 36px
  font-weight: 400

.headline-small
  font-size: 24px
  line-height: 32px
  font-weight: 400
```

#### Title Styles
```css
.title-large
  font-size: 22px
  line-height: 28px
  font-weight: 400

.title-medium
  font-size: 16px
  line-height: 24px
  font-weight: 500
  letter-spacing: 0.15px

.title-small
  font-size: 14px
  line-height: 20px
  font-weight: 500
  letter-spacing: 0.1px
```

#### Body Styles
```css
.body-large
  font-size: 16px
  line-height: 24px
  font-weight: 400
  letter-spacing: 0.5px

.body-medium
  font-size: 14px
  line-height: 20px
  font-weight: 400
  letter-spacing: 0.25px

.body-small
  font-size: 12px
  line-height: 16px
  font-weight: 400
  letter-spacing: 0.4px
```

#### Label Styles
```css
.label-large
  font-size: 14px
  line-height: 20px
  font-weight: 500
  letter-spacing: 0.1px

.label-medium
  font-size: 12px
  line-height: 16px
  font-weight: 500
  letter-spacing: 0.5px

.label-small
  font-size: 11px
  line-height: 16px
  font-weight: 500
  letter-spacing: 0.5px
```

#### Usage Guide
```
Page titles: .headline-large or .headline-medium
Section headers: .title-large
Card titles: .title-medium
Body text: .body-large or .body-medium
Captions/timestamps: .body-small
Button text: .label-large
Badges/chips: .label-small
```

### Spacing System (4dp Grid)

```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 20px    ← Default screen padding
xxl: 24px   ← Section spacing
xxxl: 32px  ← Large spacing
```

**Common Usage:**
- Screen padding: **20px** (always)
- Card padding: **16-24px**
- Section gaps: **24px**
- List item gaps: **12px**
- Button horizontal padding: **24px**
- Button vertical padding: **12px**

### Border Radius (Organic Shapes)

```
xs: 8px      Small elements
sm: 12px     Chips, badges, keyboard keys
md: 16px     Input fields
lg: 20px     Cards, list containers
xl: 24px     Modal dialogs
xxl: 28px    Primary buttons, large cards
xxxl: 32px   Bottom sheets (top corners)
full: 9999px Circular/pill shapes
```

**Component-Specific:**
- Primary buttons: **28px**
- Cards: **20px**
- Bottom sheets: **32px** (top corners only)
- Keyboard keys: **12px**
- Icon containers: **16px** (for 48px containers)
- Input fields: **16px**
- Chips: **12px** or **full** (pill style)

### Elevation & Shadows

Material You uses subtle shadows with slight tint:

```css
.elevation-1
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08)

.elevation-2
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08)

.elevation-3
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12)

.elevation-4
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12)

.elevation-5
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16)
```

**Usage:**
- Cards at rest: `.elevation-1`
- Keyboard surface: `.elevation-2`
- Floating elements (FAB): `.elevation-3`
- Dialogs, modals: `.elevation-4`
- Bottom sheets: `.elevation-5`

**Colored Shadows for Gradients:**
```tsx
// Primary purple gradient button
boxShadow: '0 8px 16px rgba(103, 80, 164, 0.25)'

// Success green gradient
boxShadow: '0 6px 12px rgba(74, 222, 128, 0.3)'

// Pink gradient
boxShadow: '0 8px 16px rgba(236, 72, 153, 0.25)'
```

---

## Gradient System (Material You 2025)

Kavi Kannada uses **diagonal gradients (135deg)** as the primary gradient direction for a modern, dynamic feel.

### 1. Primary Purple Gradient (Brand Identity)

**Usage**: Main CTAs, primary buttons, logo containers, brand elements

**CSS/Tailwind**:
```tsx
style={{ background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)' }}
```

**With Shadow**:
```tsx
style={{
  background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
  boxShadow: '0 8px 16px rgba(103, 80, 164, 0.25)'
}}
```

**Kotlin/Compose**:
```kotlin
Modifier.background(
    brush = Brush.linearGradient(
        colors = listOf(
            Color(0xFF6750A4),
            Color(0xFF7F67BE)
        )
    )
)
```

### 2. Pink-Rose Gradient (Donation/Love)

**Usage**: Donation buttons, favorite/heart actions, special CTAs

**CSS/Tailwind**:
```tsx
style={{ background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)' }}
```

**With Shadow**:
```tsx
style={{
  background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
  boxShadow: '0 8px 16px rgba(236, 72, 153, 0.25)'
}}
```

**Kotlin/Compose**:
```kotlin
Modifier.background(
    brush = Brush.linearGradient(
        colors = listOf(
            Color(0xFFEC4899),
            Color(0xFFF43F5E)
        )
    )
)
```

### 3. Success Green Gradient

**Usage**: Success states, confirmation screens, search button, achievement badges

**CSS/Tailwind**:
```tsx
style={{ background: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)' }}
```

**With Shadow**:
```tsx
style={{
  background: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)',
  boxShadow: '0 6px 12px rgba(74, 222, 128, 0.3)'
}}
```

**Kotlin/Compose**:
```kotlin
Modifier.background(
    brush = Brush.linearGradient(
        colors = listOf(
            Color(0xFF4ADE80),
            Color(0xFF10B981)
        )
    )
)
```

### 4. Feature Card Gradient (Pink-Purple)

**Usage**: Feature cards, highlighted sections, soft backgrounds

**CSS/Tailwind**:
```tsx
style={{ background: 'linear-gradient(135deg, #FFE8F7 0%, #F3EDF7 100%)' }}
```

**Kotlin/Compose**:
```kotlin
Modifier.background(
    brush = Brush.linearGradient(
        colors = listOf(
            Color(0xFFFFE8F7),
            Color(0xFFF3EDF7)
        )
    )
)
```

### 5. Toolbar Icon Gradients

**Amber (Settings/Actions)**:
```tsx
style={{ background: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)' }}
```

**Cyan (Clipboard/Web)**:
```tsx
style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)' }}
```

**Blue (Info/Help)**:
```tsx
style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #06B6D4 100%)' }}
```

**Purple (Premium/More)**:
```tsx
style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' }}
```

**Violet (Keyboard/Layout)**:
```tsx
style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)' }}
```

**Red (Delete/Error)**:
```tsx
style={{ background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' }}
```

### 6. Background Decorative Gradients

**Usage**: Background decoration blobs for ambient lighting (with blur-3xl)

**Purple Blob**:
```tsx
style={{ 
  background: 'linear-gradient(135deg, #D8B4FE 0%, #A855F7 100%)',
  opacity: 0.3,
  filter: 'blur(96px)'
}}
```

**Pink Blob**:
```tsx
style={{ 
  background: 'linear-gradient(135deg, #F9A8D4 0%, #D8B4FE 100%)',
  opacity: 0.2,
  filter: 'blur(96px)'
}}
```

### Gradient Component Patterns

#### Primary Button with Gradient
```tsx
<motion.button
  whileTap={{ scale: 0.97 }}
  className="label-large text-white touch-feedback"
  style={{
    width: '100%',
    height: '56px',
    background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
    borderRadius: '28px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(103, 80, 164, 0.25)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 12px 20px rgba(103, 80, 164, 0.35)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(103, 80, 164, 0.25)';
  }}
>
  Continue
</motion.button>
```

#### Gradient Icon Container
```tsx
<div 
  className="flex items-center justify-center"
  style={{
    width: '48px',
    height: '48px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
    boxShadow: '0 4px 8px rgba(103, 80, 164, 0.3)'
  }}
>
  <Icon className="w-6 h-6 text-white" />
</div>
```

#### Feature Card with Gradient Background
```tsx
<div 
  className="elevation-1"
  style={{
    background: 'linear-gradient(135deg, #FFE8F7 0%, #F3EDF7 100%)',
    borderRadius: '28px',
    padding: '24px'
  }}
>
  {/* Card content */}
</div>
```

### Gradient Best Practices

✅ **DO**:
- Use diagonal gradients (135deg) for most UI elements
- Match shadow colors to gradient dominant color at 25-30% opacity
- Keep gradients subtle (avoid harsh transitions)
- Use consistent gradient pairs across the app
- Apply gradients to backgrounds, not borders or text

❌ **DON'T**:
- Mix multiple gradient types on the same screen
- Use gradients on text (poor accessibility)
- Create custom gradient colors (stick to defined palettes)
- Overuse gradients (not every element needs one)
- Use gradients on elements smaller than 32px

---

## Animation System

### Timing Functions (Material You Standard)

```javascript
// Standard easing - most common
cubic-bezier(0.4, 0, 0.2, 1)

// Decelerate - entering screen
cubic-bezier(0.0, 0.0, 0.2, 1)

// Accelerate - exiting screen
cubic-bezier(0.4, 0.0, 1.0, 1.0)

// Spring animations - playful interactions
{ type: "spring", damping: 25, stiffness: 300 }
{ type: "spring", damping: 12, stiffness: 200 } // Bouncier
```

### Duration Standards

```
Quick interactions: 150ms  (button press, toggle)
Standard transitions: 300ms (slide-in, fade, most animations)
Screen changes: 500ms      (page transitions, bottom sheets)
Never exceed: 700ms        (feels sluggish)
```

### Common Animation Patterns

#### Fade + Slide In
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
```

#### Scale on Press (Touch Feedback)
```tsx
whileTap={{ scale: 0.97 }}
className="touch-feedback" // Adds transition: transform 150ms
```

#### Stagger List Items
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: index * 0.04,  // 40ms stagger
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    {/* Item content */}
  </motion.div>
))}
```

#### Spring Pop Animation
```tsx
initial={{ scale: 0, rotate: -20 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ 
  type: "spring", 
  stiffness: 200,
  damping: 12
}}
```

#### Bottom Sheet Slide Up
```tsx
initial={{ y: "100%" }}
animate={{ y: 0 }}
exit={{ y: "100%" }}
transition={{ type: "spring", damping: 25, stiffness: 300 }}
```

---

## Component Patterns (Material You 2025)

### Buttons

#### Primary Button (Gradient)
```tsx
<motion.button
  whileTap={{ scale: 0.97 }}
  className="label-large text-white touch-feedback"
  style={{
    width: '100%',
    height: '56px',
    background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
    borderRadius: '28px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(103, 80, 164, 0.25)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 12px 20px rgba(103, 80, 164, 0.35)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(103, 80, 164, 0.25)';
  }}
>
  Continue
</motion.button>
```

**Specs**:
- Height: **56px**
- Border radius: **28px**
- Font: **label-large**
- Shadow: Colored, elevation increases on hover
- Touch feedback: scale(0.97)

#### Secondary Button (Filled Tonal)
```tsx
<motion.button
  whileTap={{ scale: 0.97 }}
  className="label-large touch-feedback"
  style={{
    width: '100%',
    height: '56px',
    backgroundColor: '#E8DEF8',
    color: '#6750A4',
    borderRadius: '28px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#D7C6ED';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#E8DEF8';
  }}
>
  Settings
</motion.button>
```

**Specs**:
- Height: **56px**
- Background: **#E8DEF8** (primary container)
- Text: **#6750A4** (primary)
- Hover: Darker tint

#### Text Button
```tsx
<motion.button
  whileTap={{ scale: 0.97 }}
  className="label-large touch-feedback"
  style={{
    width: '100%',
    height: '48px',
    backgroundColor: 'transparent',
    color: '#6750A4',
    borderRadius: '24px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(103, 80, 164, 0.08)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  }}
>
  Skip for now
</motion.button>
```

**Specs**:
- Height: **48px** (smaller than filled buttons)
- No background, just state layer on hover
- 8% opacity state layer

### Cards

#### Standard Card (Material Surface)
```tsx
<div 
  className="elevation-1"
  style={{
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '16px'
  }}
>
  {/* Card content */}
</div>
```

**Specs**:
- Background: **#FFFFFF**
- Border radius: **20px**
- Padding: **16-24px**
- Elevation: **elevation-1**

#### Feature Card (Gradient Background)
```tsx
<div 
  className="elevation-1"
  style={{
    background: 'linear-gradient(135deg, #FFE8F7 0%, #F3EDF7 100%)',
    borderRadius: '28px',
    padding: '24px'
  }}
>
  {/* Card content */}
</div>
```

**Specs**:
- Background: Gradient
- Border radius: **28px** (larger for prominence)
- Padding: **24px**

### Icon Buttons (Gradient Containers)

```tsx
<div 
  className="flex items-center justify-center"
  style={{
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
    boxShadow: '0 4px 8px rgba(103, 80, 164, 0.3)',
    cursor: 'pointer'
  }}
>
  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
</div>
```

**Specs**:
- Size: **40-48px** container
- Icon: **20-24px**
- Border radius: **Full circle** (50%)
- Shadow: Colored to match gradient
- Stroke width: **2.5** for icons

### Bottom Sheet (Material You)

```tsx
<AnimatePresence>
  {isOpen && (
    <>
      {/* Scrim */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        onClick={onClose}
      />
      
      {/* Sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 elevation-5"
        style={{
          backgroundColor: '#FEF7FF',
          borderTopLeftRadius: '32px',
          borderTopRightRadius: '32px',
          padding: '0 16px 16px'
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-4 pb-2">
          <div 
            style={{ 
              width: '32px', 
              height: '4px', 
              backgroundColor: '#CAC4D0',
              borderRadius: '2px'
            }}
          />
        </div>
        
        {/* Sheet content */}
      </motion.div>
    </>
  )}
</AnimatePresence>
```

**Specs**:
- Scrim: **rgba(0, 0, 0, 0.4)**
- Top radius: **32px**
- Drag handle: **32px × 4px**, **#CAC4D0**
- Elevation: **elevation-5**
- Spring animation: damping 25, stiffness 300

### Chips & Suggestions

```tsx
<button
  className="label-large touch-feedback"
  style={{
    padding: '10px 12px',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    color: '#1C1B1F',
    border: 'none',
    cursor: 'pointer',
    boxShadow: 'var(--elevation-1)',
    transition: 'background-color 150ms'
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EDF7'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
>
  Suggestion text
</button>
```

**Specs**:
- Padding: **10-12px horizontal**, **10px vertical**
- Border radius: **16px** or **full** (pill)
- Background: **#FFFFFF** with hover state
- Font: **label-large** or **body-medium**

### Keyboard Keys

```tsx
<button
  className="touch-feedback"
  style={{
    height: '48px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: 'var(--elevation-1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 150ms'
  }}
>
  <span className="title-medium" style={{ color: '#1C1B1F' }}>
    A
  </span>
</button>
```

**Specs**:
- Height: **48px**
- Border radius: **12px**
- Background: **#FFFFFF**
- Shadow: **elevation-1**
- Font: **title-medium** for letters

---

## Icon Libraries

### Web (React/TypeScript) - Lucide React

**Library**: Lucide React  
**Website**: https://lucide.dev/icons/  
**Package**: `lucide-react`

**Installation**:
```bash
npm install lucide-react
```

**Usage**:
```tsx
import { Heart, Settings, Keyboard, ChevronRight } from 'lucide-react';

// Basic usage
<Heart className="w-5 h-5" style={{ color: '#6750A4' }} />

// In gradient container
<div 
  style={{
    width: '48px',
    height: '48px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <Settings className="w-6 h-6 text-white" strokeWidth={2} />
</div>
```

**Icon Sizing**:
```tsx
// Small (16px) - Inline icons, badges
<Icon className="w-4 h-4" />

// Medium (20px) - Default for buttons, list items
<Icon className="w-5 h-5" />

// Large (24px) - Headers, emphasized actions
<Icon className="w-6 h-6" />

// Extra Large (32px+) - Hero icons
<Icon className="w-8 h-8" />
```

**Stroke Width**:
- Default: `strokeWidth={2}` (standard)
- Thin: `strokeWidth={1.5}` (delicate icons)
- Bold: `strokeWidth={2.5}` (emphasis, important actions)

**Common Icons in Kavi Kannada**:
```
Heart - Donation, favorites
Settings - Settings, configuration
Keyboard - Keyboard actions
ChevronRight, ChevronLeft, ChevronDown - Navigation
Check, CheckCircle2 - Success states
X, XCircle - Close, cancel
Search - Search functionality
Trash2 - Delete actions
Copy, Clipboard - Clipboard actions
Globe - Web links
Phone - Phone numbers
Mail - Email addresses
Volume2 - Sound settings
Vibrate - Haptic feedback
Palette - Themes
Languages - Language selection
Info - Information
Moon - Dark mode
Shield - Privacy
Maximize2 - Size/height
MessageSquare - Messages
Undo2, Redo2 - Undo/redo
MoreHorizontal - More options
Mic - Voice input
Zap - Quick actions
Type - Text/typing
```

### Android (Kotlin/Jetpack Compose) - Material Icons

**Library**: Material Icons (Built into Jetpack Compose)  
**Website**: https://fonts.google.com/icons  
**Documentation**: https://developer.android.com/jetpack/compose/graphics/images/material-icons

**Installation**:
```kotlin
// In build.gradle.kts
dependencies {
    implementation("androidx.compose.material:material-icons-core:1.6.0")
    implementation("androidx.compose.material:material-icons-extended:1.6.0")
}
```

**Usage**:
```kotlin
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*

// Basic usage
Icon(
    imageVector = Icons.Filled.Favorite,
    contentDescription = "Favorite",
    modifier = Modifier.size(20.dp),
    tint = Color(0xFF6750A4)
)

// In gradient container
Box(
    modifier = Modifier
        .size(48.dp)
        .background(
            brush = Brush.linearGradient(
                colors = listOf(Color(0xFF6750A4), Color(0xFF7F67BE))
            ),
            shape = RoundedCornerShape(16.dp)
        ),
    contentAlignment = Alignment.Center
) {
    Icon(
        imageVector = Icons.Filled.Settings,
        contentDescription = "Settings",
        tint = Color.White,
        modifier = Modifier.size(24.dp)
    )
}
```

**Material Icons Mapping** (Lucide → Material Icons):
```
Heart → Icons.Filled.Favorite
Settings → Icons.Filled.Settings
Keyboard → Icons.Filled.Keyboard
ChevronRight → Icons.Filled.ChevronRight
Check → Icons.Filled.Check
CheckCircle2 → Icons.Filled.CheckCircle
X → Icons.Filled.Close
Search → Icons.Filled.Search
Trash2 → Icons.Filled.Delete
Copy → Icons.Filled.ContentCopy
Globe → Icons.Filled.Language
Phone → Icons.Filled.Phone
Mail → Icons.Filled.Email
Volume2 → Icons.Filled.VolumeUp
Vibrate → Icons.Filled.Vibration
Palette → Icons.Filled.Palette
Languages → Icons.Filled.Translate
Info → Icons.Filled.Info
Moon → Icons.Filled.DarkMode
Shield → Icons.Filled.Shield
Maximize2 → Icons.Filled.Fullscreen
MessageSquare → Icons.Filled.Message
Undo2 → Icons.Filled.Undo
Redo2 → Icons.Filled.Redo
MoreHorizontal → Icons.Filled.MoreHoriz
Mic → Icons.Filled.Mic
```

---

## Accessibility Requirements

### Touch Targets
- **Minimum size**: 48px × 48px (Material Design standard)
- **Ideal size**: 56px × 56px for primary actions
- **Spacing**: 8px minimum between touchable elements

### Color Contrast
- **Text on light background**: Minimum 4.5:1 contrast ratio
- **Large text (18px+)**: Minimum 3:1 contrast ratio
- **Icons**: Same as text requirements
- **Test all combinations**: Primary/secondary color pairs

### Focus States
- **Visible focus ring**: 2px purple outline with 2px offset
- **Keyboard navigation**: Logical tab order
- **Focus visible**: Use `:focus-visible` for keyboard-only focus

```css
*:focus-visible {
  outline: 2px solid #6750A4;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Screen Reader Support
- **Images**: Always include `alt` text
- **Buttons**: Descriptive labels (not "Click here")
- **Icons**: Include `aria-label` when no visible text
- **Headings**: Proper hierarchy (h1 → h2 → h3)

---

## Keyboard-Specific Rules

### Key Layout
- **Aspect Ratio**: Keys roughly square or slightly wider
- **Gap**: 6px between keys
- **Border Radius**: 12px per key
- **Background**: White (#FFFFFF) with elevation-1
- **Pressed State**: scale(0.97), subtle background tint

### Keyboard Heights
```
Small: 220px
Medium: 260px (default)
Large: 300px
Extra Large: 340px
```

### Suggestion Bar
- **Height**: 40-48px
- **Chip Style**: 16px radius, white background
- **Spacing**: 8px gap between suggestions
- **Scroll**: Horizontal scroll if overflow

### Toolbar
- **Position**: Above keyboard keys
- **Height**: 56px (includes padding)
- **Icons**: 40px gradient containers
- **Spacing**: Even distribution or 8px gap

---

## Screen-Specific Guidelines

### Welcome Screen
- Logo in gradient container (32px radius)
- Title: **headline-large**
- Description: **body-large**
- CTA: Full-width primary gradient button
- Background: Decorative gradient blobs with blur

### Keyboard Selection Screen
- Bottom sheet with 32px top radius
- Drag handle: 32px × 4px
- Radio buttons: Material You style with spring animation
- Scrim: rgba(0, 0, 0, 0.4)

### Thank You Screen
- Success icon: 112px gradient circle
- Particle effects: 8 particles radiating outward
- Feature card: Pink-purple gradient background
- Actions: Stacked button hierarchy

### Settings Screen
- Sticky header with elevation
- Sections grouped with label-large titles
- List items: 72px height minimum
- Icon containers: 48px with gradients
- Dividers: 1px #E7E0EC, offset from left

### Donation Screen
- Amount grid: 2 columns
- Selected state: Primary gradient
- UPI simulation: Mock payment flow
- Explanation link: Always provide context

---

## Data & State Management

### LocalStorage Keys
```
kavi_keyboard_height: "small" | "medium" | "large" | "extra_large"
kavi_settings: JSON object with all settings
kavi_clipboard_items: Array of clipboard items
kavi_keyboard_layout: "modern" | "inscript" | "phonetic"
```

### Settings Object Structure
```typescript
{
  keyBorders: boolean,
  sound: boolean,
  vibration: boolean,
  popup: boolean,
  autoCorrection: boolean,
  autoCapitalization: boolean,
  suggestions: boolean,
  keyboardHeight: string,
  layout: string,
  darkMode: boolean,
  notifications: boolean
}
```

### Clipboard Item Structure
```typescript
{
  id: string,
  text: string,
  type: "web" | "phone" | "email" | "text",
  timestamp: number,
  isPinned: boolean
}
```

---

## Testing Checklist

Before considering a feature complete:

- [ ] Works on 360px width (smallest mobile)
- [ ] Works on 768px width (tablet)
- [ ] All animations are smooth (60fps)
- [ ] Touch targets are 48px minimum
- [ ] Text is readable (4.5:1 contrast)
- [ ] Typography uses CSS classes (not Tailwind text utils)
- [ ] Gradients use exact color codes from guidelines
- [ ] Elevation shadows are subtle and appropriate
- [ ] No console errors or warnings
- [ ] LocalStorage persists correctly
- [ ] Loading states are handled
- [ ] Error states are handled
- [ ] Focus states are visible

---

## Quick Reference

### Most Used Colors
```
Background: #FEF7FF
Surface: #FFFFFF
Surface Tint: #F3EDF7
Primary: #6750A4
Primary Container: #E8DEF8
Text Primary: #1C1B1F
Text Secondary: #49454F
Text Tertiary: #79747E
Outline: #E7E0EC
```

### Most Used Spacing
```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 20px (screen padding)
xxl: 24px (section gaps)
xxxl: 32px
```

### Most Used Border Radius
```
Small: 12px (chips, keys)
Medium: 20px (cards)
Large: 28px (buttons, large cards)
Extra Large: 32px (bottom sheets)
Full: 9999px (circles)
```

### Typography Classes (Use these instead of Tailwind)
```
.headline-large - Page titles (32px)
.headline-medium - Section headers (28px)
.title-large - Card titles (22px)
.title-medium - List items (16px, medium weight)
.body-large - Body text (16px)
.body-medium - Secondary text (14px)
.body-small - Captions (12px)
.label-large - Buttons (14px, medium weight)
.label-medium - Small buttons (12px)
.label-small - Badges (11px)
```

### Elevation Classes
```
.elevation-1 - Cards at rest
.elevation-2 - Standard surfaces
.elevation-3 - Floating buttons
.elevation-4 - Dialogs
.elevation-5 - Bottom sheets
```

### Common Gradients
```tsx
// Primary purple
background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)'

// Pink-rose
background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)'

// Success green
background: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)'

// Feature card
background: 'linear-gradient(135deg, #FFE8F7 0%, #F3EDF7 100%)'
```

---

## Platform-Specific Notes

### Web (React/TypeScript)
- **CSS Framework**: Tailwind CSS + custom Material You tokens
- **Animation**: Motion/React (Framer Motion)
- **State**: React hooks (useState, useEffect, useContext)
- **Persistence**: LocalStorage for settings and data
- **Icons**: Lucide React (https://lucide.dev/icons/)
- **Fonts**: System fonts (SF Pro on iOS, Roboto on Android)

### Android (Kotlin/Jetpack Compose)
- **UI Framework**: Jetpack Compose with Material Design 3
- **State**: Compose state management (remember, mutableStateOf)
- **Persistence**: SharedPreferences for settings, Room for data
- **Icons**: Material Icons (https://fonts.google.com/icons)
- **Fonts**: Roboto (Material Design default)
- **Reference**: `/guidelines/DesignSystem.md` for exact Kotlin values

---

## Final Notes

- **Consistency is paramount**: Always reference these guidelines and `DesignSystem.md`
- **Material You first**: Design follows Material Design 3 specifications exactly
- **Typography**: Use CSS classes (.headline-large, .body-medium, etc.) - never Tailwind text utilities
- **Gradients**: Use exact 135deg diagonal gradients from the gradient system
- **Elevation**: Use .elevation-X classes for consistent shadows
- **Accessibility**: Not optional - 48px touch targets, 4.5:1 contrast minimum
- **Performance**: 60fps animations, debounced inputs, memoized computations
- **Test on real devices**: Emulators don't show everything

---

**For complete Kotlin/Jetpack Compose implementation details with exact dp/sp values, color codes, and Compose-specific patterns, see `/guidelines/DesignSystem.md`**
