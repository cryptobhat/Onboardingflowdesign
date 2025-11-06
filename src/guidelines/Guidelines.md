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

## Design System Rules

### Color Usage
- **Primary Action**: Always use gradient purple (`#6750A4` to `#7F67BE`)
- **Backgrounds**: Main app background must be `#FEF7FF`
- **Surface Colors**: Cards and panels use `#FFFFFF` or `#F3EDF7`
- **Text Colors**:
  - Primary text: `#1C1B1F`
  - Secondary text: `#49454F`
  - Tertiary/hints: `#79747E`

### Typography Rules
- **Never** override font sizes, weights, or line heights unless explicitly needed
- Use semantic HTML elements (`h1`, `h2`, `p`) to leverage default typography from `globals.css`
- Minimum text size: 12px (for labels only), 14px for body text
- Button text: Always medium weight (500)

### Spacing Consistency
- Use the 4px grid system: 4, 8, 12, 16, 20, 24, 32
- Screen padding: **Always 20px (1.25rem)**
- Card padding: **16px minimum, 20px standard**
- Gap between sections: **24px**
- Gap between list items: **12px**

### Border Radius Standards
- Small elements (chips, badges): `12px`
- Standard cards: `20px`
- Large containers (modals, sheets): `28px`
- Keyboard keys: `12px`
- Icon buttons: Full circle (`9999px`)
- **Never use sharp corners** - minimum 8px radius

### Shadows & Elevation
- Subtle shadows only: max `shadow-lg` in Tailwind
- Use tinted shadows for colored elements (e.g., `shadow-purple-500/25`)
- Elevation layers:
  - Cards at rest: subtle shadow
  - Floating buttons: medium shadow
  - Modals/dialogs: strong shadow

### Gradient Styles

Kavi Kannada uses a carefully curated set of gradients to create depth, visual interest, and brand consistency. **Always use these exact gradient definitions** to ensure consistency across all platforms.

#### 1. Primary Purple Gradient (Main CTA)
**Usage**: Primary buttons, important CTAs, floating action buttons, success icons

**Tailwind (React)**:
```tsx
className="bg-gradient-to-r from-purple-600 to-purple-500"
// OR for diagonal (more dynamic)
className="bg-gradient-to-br from-purple-600 to-purple-500"
```

**Exact Colors**:
- Start: `#9333EA` (purple-600)
- End: `#A855F7` (purple-500)

**With Shadow**:
```tsx
className="bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/25"
```

**Kotlin/Compose**:
```kotlin
modifier = Modifier.background(
    brush = Brush.linearGradient(
        colors = listOf(
            Color(0xFF9333EA), // purple-600
            Color(0xFFA855F7)  // purple-500
        )
    )
)

// With shadow effect
modifier = Modifier
    .background(
        brush = Brush.linearGradient(
            colors = listOf(Color(0xFF9333EA), Color(0xFFA855F7))
        ),
        shape = RoundedCornerShape(28.dp)
    )
    .shadow(
        elevation = 8.dp,
        shape = RoundedCornerShape(28.dp),
        ambientColor = Color(0x40A855F7) // 25% opacity purple
    )
```

#### 2. Deep Purple Gradient (Brand Emphasis)
**Usage**: Icon containers, toolbar icons, premium features, branding elements

**Tailwind (React)**:
```tsx
className="bg-gradient-to-br from-[#6750A4] to-[#7F67BE]"
```

**Exact Colors**:
- Start: `#6750A4` (brand primary)
- End: `#7F67BE` (brand primary light)

**Icon Container Example**:
```tsx
<div className="w-10 h-10 bg-gradient-to-br from-[#6750A4] to-[#7F67BE] rounded-full flex items-center justify-center shadow-md shadow-purple-500/30">
  <Heart className="w-5 h-5 text-white" />
</div>
```

**Kotlin/Compose**:
```kotlin
Box(
    modifier = Modifier
        .size(40.dp)
        .background(
            brush = Brush.linearGradient(
                colors = listOf(
                    Color(0xFF6750A4),
                    Color(0xFF7F67BE)
                )
            ),
            shape = CircleShape
        )
        .shadow(4.dp, CircleShape),
    contentAlignment = Alignment.Center
) {
    Icon(
        imageVector = Icons.Filled.Favorite,
        contentDescription = "Favorite",
        tint = Color.White,
        modifier = Modifier.size(20.dp)
    )
}
```

#### 3. Pink-Purple Gradient (Feature Cards)
**Usage**: Feature cards, highlights, donation cards, special sections

**Tailwind (React)**:
```tsx
className="bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7]"
```

**Exact Colors**:
- Start: `#FFE8F7` (light pink)
- End: `#F3EDF7` (light purple/lavender)

**Feature Card Example**:
```tsx
<div className="bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7] rounded-[28px] p-6 shadow-sm">
  <h3>Support Kavi Kannada</h3>
  <p>Help us keep the keyboard free and awesome!</p>
</div>
```

**Kotlin/Compose**:
```kotlin
Card(
    modifier = Modifier
        .fillMaxWidth()
        .background(
            brush = Brush.linearGradient(
                colors = listOf(
                    Color(0xFFFFE8F7),
                    Color(0xFFF3EDF7)
                )
            ),
            shape = RoundedCornerShape(28.dp)
        )
        .padding(24.dp),
    shape = RoundedCornerShape(28.dp),
    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
) {
    Column {
        Text("Support Kavi Kannada")
        Text("Help us keep the keyboard free and awesome!")
    }
}
```

#### 4. Success Green Gradient (Optional)
**Usage**: Success states, confirmation screens, achievement badges

**Tailwind (React)**:
```tsx
className="bg-gradient-to-br from-green-500 to-emerald-500"
```

**Exact Colors**:
- Start: `#22C55E` (green-500)
- End: `#10B981` (emerald-500)

**Kotlin/Compose**:
```kotlin
brush = Brush.linearGradient(
    colors = listOf(
        Color(0xFF22C55E),
        Color(0xFF10B981)
    )
)
```

#### 5. Background Decorative Gradient (Ambient)
**Usage**: Background decoration blobs, ambient lighting effects

**Tailwind (React)**:
```tsx
// Purple blob (top right)
<div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-purple-500/20 rounded-full blur-3xl" />

// Pink blob (bottom left)
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-pink-300/20 to-purple-300/15 rounded-full blur-3xl" />
```

**Exact Colors (with opacity)**:
- Purple blob: `#D8B4FE/30` to `#A855F7/20`
- Pink blob: `#F9A8D4/20` to `#D8B4FE/15`

**Kotlin/Compose**:
```kotlin
// Purple ambient blob
Box(
    modifier = Modifier
        .offset(x = (-80).dp, y = (-80).dp)
        .size(256.dp)
        .background(
            brush = Brush.radialGradient(
                colors = listOf(
                    Color(0x4DD8B4FE), // 30% opacity
                    Color(0x33A855F7)  // 20% opacity
                )
            ),
            shape = CircleShape
        )
        .blur(radiusX = 120.dp, radiusY = 120.dp)
)
```

#### 6. Gradient Directions Guide

**Horizontal (Left to Right)**: `bg-gradient-to-r`
- Use for: Wide buttons, horizontal progress bars
- Energy: Forward movement, progress

**Vertical (Top to Bottom)**: `bg-gradient-to-b`
- Use for: Tall containers, screen backgrounds
- Energy: Natural light direction, calming

**Diagonal (Top-Left to Bottom-Right)**: `bg-gradient-to-br`
- Use for: Most UI elements, cards, icons
- Energy: Dynamic, modern, engaging
- **PREFERRED DIRECTION** for Kavi Kannada

**Diagonal (Bottom-Left to Top-Right)**: `bg-gradient-to-tr`
- Use for: Alternative decoration, secondary elements
- Energy: Uplifting, rising

#### 7. Gradient + Shadow Combinations

**Primary Button**:
```tsx
className="bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/25"
```

**Icon Container**:
```tsx
className="bg-gradient-to-br from-[#6750A4] to-[#7F67BE] shadow-md shadow-purple-500/30"
```

**Feature Card**:
```tsx
className="bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7] shadow-sm"
```

**Rule**: Match shadow color to the gradient's dominant color at ~25-30% opacity

#### 8. Complete Component Examples

**Primary CTA Button (Full Featured)**:

*React/Tailwind*:
```tsx
<button className="w-full h-14 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-transform active:scale-95">
  <Heart className="w-5 h-5" />
  <span className="font-medium">Continue</span>
</button>
```

*Kotlin/Compose*:
```kotlin
Button(
    onClick = { /* action */ },
    modifier = Modifier
        .fillMaxWidth()
        .height(56.dp)
        .background(
            brush = Brush.linearGradient(
                colors = listOf(Color(0xFF9333EA), Color(0xFFA855F7))
            ),
            shape = RoundedCornerShape(28.dp)
        )
        .shadow(8.dp, RoundedCornerShape(28.dp)),
    colors = ButtonDefaults.buttonColors(
        containerColor = Color.Transparent
    ),
    shape = RoundedCornerShape(28.dp)
) {
    Row(
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = Icons.Filled.Favorite,
            contentDescription = null,
            modifier = Modifier.size(20.dp),
            tint = Color.White
        )
        Text(
            text = "Continue",
            fontWeight = FontWeight.Medium,
            color = Color.White
        )
    }
}
```

**Gradient Icon Badge**:

*React/Tailwind*:
```tsx
<div className="relative">
  <div className="w-10 h-10 bg-gradient-to-br from-[#6750A4] to-[#7F67BE] rounded-full flex items-center justify-center shadow-md shadow-purple-500/30">
    <Settings className="w-5 h-5 text-white" />
  </div>
  {/* Optional notification dot */}
  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
</div>
```

*Kotlin/Compose*:
```kotlin
Box {
    Box(
        modifier = Modifier
            .size(40.dp)
            .background(
                brush = Brush.linearGradient(
                    colors = listOf(Color(0xFF6750A4), Color(0xFF7F67BE))
                ),
                shape = CircleShape
            )
            .shadow(4.dp, CircleShape),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            imageVector = Icons.Filled.Settings,
            contentDescription = "Settings",
            tint = Color.White,
            modifier = Modifier.size(20.dp)
        )
    }
    
    // Optional notification dot
    Box(
        modifier = Modifier
            .align(Alignment.TopEnd)
            .offset(x = 4.dp, y = (-4).dp)
            .size(12.dp)
            .background(Color(0xFFEF4444), CircleShape)
            .border(2.dp, Color.White, CircleShape)
    )
}
```

**Feature Card with Gradient Background**:

*React/Tailwind*:
```tsx
<div className="bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7] rounded-[28px] p-6 shadow-sm">
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-md shadow-purple-500/25 flex-shrink-0">
      <Heart className="w-6 h-6 text-white" />
    </div>
    <div className="flex-1">
      <h3 className="text-[#1C1B1F] mb-1">Support Development</h3>
      <p className="text-[#49454F]">Help us keep Kavi Kannada free and open source for everyone.</p>
    </div>
  </div>
</div>
```

*Kotlin/Compose*:
```kotlin
Card(
    modifier = Modifier
        .fillMaxWidth()
        .background(
            brush = Brush.linearGradient(
                colors = listOf(Color(0xFFFFE8F7), Color(0xFFF3EDF7))
            ),
            shape = RoundedCornerShape(28.dp)
        ),
    shape = RoundedCornerShape(28.dp),
    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
) {
    Row(
        modifier = Modifier.padding(24.dp),
        horizontalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Box(
            modifier = Modifier
                .size(48.dp)
                .background(
                    brush = Brush.linearGradient(
                        colors = listOf(Color(0xFF9333EA), Color(0xFFA855F7))
                    ),
                    shape = CircleShape
                )
                .shadow(4.dp, CircleShape),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = Icons.Filled.Favorite,
                contentDescription = null,
                tint = Color.White,
                modifier = Modifier.size(24.dp)
            )
        }
        
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = "Support Development",
                color = Color(0xFF1C1B1F),
                style = MaterialTheme.typography.titleMedium
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "Help us keep Kavi Kannada free and open source for everyone.",
                color = Color(0xFF49454F),
                style = MaterialTheme.typography.bodyMedium
            )
        }
    }
}
```

#### 9. Gradient Best Practices

✅ **DO**:
- Use diagonal gradients (`to-br`) for most UI elements
- Match shadow colors to gradient dominant color
- Keep gradients subtle (avoid harsh color transitions)
- Use consistent gradient pairs across the app
- Apply gradients to backgrounds, not borders

❌ **DON'T**:
- Mix multiple gradient types on the same screen
- Use gradients on text (poor accessibility)
- Create custom gradient colors (stick to defined palettes)
- Overuse gradients (not every element needs one)
- Use gradients on small elements under 32px

#### 10. Quick Gradient Reference

| Use Case | Gradient | Tailwind Class |
|----------|----------|----------------|
| Primary Button | Purple | `bg-gradient-to-r from-purple-600 to-purple-500` |
| Icon Container | Deep Purple | `bg-gradient-to-br from-[#6750A4] to-[#7F67BE]` |
| Feature Card | Pink-Purple | `bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7]` |
| Success State | Green | `bg-gradient-to-br from-green-500 to-emerald-500` |
| Background Blob | Purple (30%) | `bg-gradient-to-br from-purple-300/30 to-purple-500/20` |
| FAB (Floating) | Purple + Shadow | `bg-gradient-to-br from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30` |

---

## Component-Specific Guidelines

### Buttons

#### Primary Button
- **Height**: 56px (14 in Tailwind = 56px)
- **Border Radius**: 28px (rounded-full for pill shape)
- **Background**: Gradient (`from-purple-600 to-purple-500`)
- **Shadow**: Include colored shadow for depth
- **Text**: White, medium weight
- **Icon**: 20px size, 8px gap from text
- **Usage**: Maximum 1 primary button per screen section

```tsx
// Example
<button className="w-full h-14 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full shadow-lg shadow-purple-500/25">
  Continue
</button>
```

#### Secondary Button
- **Height**: 56px
- **Border Radius**: 28px
- **Background**: `#E8DEF8` (light purple)
- **Text**: `#6750A4` (purple), medium weight
- **Usage**: For alternative actions alongside primary buttons

#### Tertiary/Text Button
- **Height**: 48px
- **No background** - just text
- **Text**: `#6750A4`, regular weight
- **Hover**: Add background `#E8DEF8` with 30% opacity
- **Usage**: For less important actions (Skip, Cancel)

### Cards

#### Standard Card
- **Border Radius**: 20px
- **Background**: White (`#FFFFFF`)
- **Padding**: 16-20px
- **Shadow**: Subtle (`shadow-sm`)
- **Border**: None (use shadow for depth)

#### Feature Card (with gradient)
- **Border Radius**: 28px
- **Background**: Gradient or tinted (`from-[#FFE8F7] to-[#F3EDF7]`)
- **Padding**: 24px
- **Shadow**: Soft shadow
- **Usage**: Highlight important features or CTAs

### Icons

#### Sizing
- **Small**: 16px (toolbar badges, inline icons)
- **Medium**: 20px (buttons, list items)
- **Large**: 24px (headers, feature icons)
- **Hero**: 56px+ (welcome screens, success states)

#### Gradient Icon Containers
- **Size**: 40px container, 20px icon
- **Shape**: Circle
- **Shadow**: Colored shadow matching gradient
- **Usage**: Toolbar icons, feature highlights

```tsx
<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-md shadow-purple-500/30">
  <Icon className="w-5 h-5 text-white" />
</div>
```

### Input Fields

- **Height**: 48px minimum (for text inputs)
- **Border Radius**: 16px
- **Background**: `#F3EDF7` (light purple tint)
- **Border**: None when unfocused, 2px purple when focused
- **Padding**: 12px horizontal
- **Placeholder Color**: `#79747E`

### Badges/Chips

- **Height**: Auto (based on content + 8px vertical padding)
- **Border Radius**: 12px (or `9999px` for pill style)
- **Padding**: 12px horizontal, 4-6px vertical
- **Font Size**: 11-12px (label small)
- **Colors**: Use semantic colors based on type
  - Web: Blue background `#EFF6FF`, blue text
  - Phone: Green background `#F0FDF4`, green text
  - Email: Purple background `#FAF5FF`, purple text
  - Text: Amber background `#FFFBEB`, amber text

---

## Animation Guidelines

### Timing
- **Quick interactions**: 150ms (button press, toggle)
- **Standard transitions**: 300ms (slide-in, fade)
- **Screen changes**: 500ms (page transitions)
- **Never exceed**: 700ms (feels sluggish)

### Easing
- **Standard**: Use default easing for most animations
- **Spring**: Use for playful interactions (success animations, bouncy buttons)
- **Ease-out**: Use for elements entering the screen
- **Ease-in**: Use for elements exiting the screen

### Scale Animations
- **Button press**: Scale down to 0.95 (use `whileTap={{ scale: 0.97 }}`)
- **Icon pop**: Scale from 0 to 1 on appear
- **Never scale above 1.1** - looks jarring

### Stagger Animations
- **Delay**: 40-50ms between items
- **Max stagger items**: 8 items (longer lists look slow)
- **Usage**: List items appearing, toolbar icons

```tsx
// Example stagger
transition={{ delay: index * 0.04 }}
```

### Entrance Animations
- **Fade + Slide**: Combine for smooth entrances
- **Slide distance**: 20-40px maximum
- **Fade duration**: Match slide duration

---

## Keyboard-Specific Rules

### Key Layout
- **Aspect Ratio**: Keys should be roughly square or slightly wider
- **Gap**: 4px between keys (use `gap-1` in Tailwind)
- **Border Radius**: 12px per key
- **Background**: White with subtle shadow
- **Pressed State**: Scale 0.95, background tint

### Keyboard Heights
- **Small**: 220px
- **Medium**: 260px (default)
- **Large**: 300px
- **Extra Large**: 340px

### Suggestion Bar
- **Height**: 40px
- **Chip Style**: Pill-shaped, light purple background
- **Spacing**: 8px gap between suggestions
- **Scroll**: Horizontal scroll if overflow

### Toolbar
- **Position**: Fixed at bottom of keyboard
- **Height**: 48px
- **Background**: Slight gradient or blur
- **Icons**: 40px gradient containers with colored shadows
- **Spacing**: Even distribution or 12px gap

---

## Screen-Specific Guidelines

### Welcome Screen
- **Logo**: Centered, 120px size minimum
- **Title**: HeadlineLarge (32px)
- **Description**: BodyLarge (16px)
- **CTA Button**: Full width, gradient primary
- **Background**: Include subtle gradient decoration (blur-3xl)

### Keyboard Selection Screen
- **Step-by-step**: Number each instruction
- **Visuals**: Include mock screenshots or icons
- **Progress**: Show step X of Y
- **CTA**: "Continue" button at bottom

### Thank You Screen
- **Success Icon**: 112px (28 in Tailwind) gradient circle
- **Particles**: 8 particles animating outward (optional)
- **Card**: Feature card for donation/support message
- **Actions**: 2-3 buttons stacked vertically

### Settings Screen
- **Header**: Sticky with logo + title
- **Sections**: Grouped with section titles
- **List Items**: 72px height, icon + text + action
- **Dividers**: Between items in same section
- **Footer**: Version info, attribution

### Donation Screen
- **Preset Amounts**: Grid layout, 2 columns
- **Custom Amount**: Prominent input field
- **UPI Simulation**: Mock UPI apps with icons
- **Explanation Link**: Always provide "Why donate?" link

---

## Accessibility Requirements

### Touch Targets
- **Minimum size**: 48px × 48px
- **Ideal size**: 56px × 56px for primary actions
- **Spacing**: 8px minimum between touchable elements

### Color Contrast
- **Text on light background**: Minimum 4.5:1 contrast ratio
- **Large text (18px+)**: Minimum 3:1 contrast ratio
- **Icons**: Same as text requirements
- **Test**: All primary/secondary color combinations

### Focus States
- **Visible focus ring**: 2px purple outline with offset
- **Keyboard navigation**: Tab order must be logical
- **Skip links**: Provide for long lists

### Screen Reader Support
- **Images**: Always include `alt` text
- **Buttons**: Descriptive labels (not just "Click here")
- **Icons**: Include `aria-label` when no text
- **Headings**: Proper hierarchy (h1 → h2 → h3)

---

## Data & State Management

### LocalStorage Keys
- `kavi_keyboard_height`: "small" | "medium" | "large" | "extra_large"
- `kavi_settings`: JSON object with all settings
- `kavi_clipboard_items`: Array of clipboard items
- `kavi_keyboard_layout`: "modern" | "inscript" | "phonetic"

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
  layout: string
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

## File Organization

### Component Structure
```
/components
  /[ScreenName].tsx        # Main screens
  /[FeatureName]Panel.tsx  # Panels/overlays
  /settings
    /[SettingPage].tsx     # Setting sub-pages
  /ui
    /[component].tsx       # Shared UI components
```

### Naming Conventions
- **Components**: PascalCase (`KeyboardDemo.tsx`)
- **Utilities**: camelCase (`formatTime.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_CLIPBOARD_ITEMS`)
- **CSS files**: kebab-case (`globals.css`)

---

## Testing Checklist

Before considering a feature complete:

- [ ] Works on 360px width (smallest mobile)
- [ ] Works on 768px width (tablet)
- [ ] All animations are smooth (no jank)
- [ ] Touch targets are 48px minimum
- [ ] Text is readable (proper contrast)
- [ ] No console errors or warnings
- [ ] LocalStorage persists correctly
- [ ] Loading states are handled
- [ ] Error states are handled
- [ ] Works without JavaScript (where possible)

---

## Common Patterns

### Modal/Dialog
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[28px] p-6 max-w-sm w-full"
      >
        {/* Content */}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

### List with Stagger Animation
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.04 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

### Swipeable Item
```tsx
const [offsetX, setOffsetX] = useState(0);

<motion.div
  drag="x"
  dragConstraints={{ left: -200, right: 0 }}
  dragElastic={0.1}
  onDragEnd={(e, info) => {
    if (info.offset.x < -150) {
      onDelete();
    } else {
      setOffsetX(0);
    }
  }}
>
  {/* Swipeable content */}
</motion.div>
```

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
import { Heart, Settings, Keyboard, User, Search } from 'lucide-react';

// Basic usage
<Heart className="w-5 h-5 text-purple-600" />

// With custom size and color
<Settings className="w-6 h-6 text-[#6750A4]" />

// In gradient container
<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
  <Keyboard className="w-5 h-5 text-white" />
</div>
```

**Common Icons Used in Kavi Kannada**:
- `Heart` - Donation, favorites
- `Settings` - Settings, configuration
- `Keyboard` - Keyboard-related actions
- `ChevronRight`, `ChevronLeft`, `ChevronDown` - Navigation arrows
- `Check`, `CheckCircle2` - Success states
- `X`, `XCircle` - Close, cancel, delete
- `Search` - Search functionality
- `Trash2` - Delete actions
- `Pin`, `PinOff` - Pin/unpin items
- `Copy`, `Clipboard` - Clipboard actions
- `Globe` - Web links
- `Phone` - Phone numbers
- `Mail` - Email addresses
- `Type` - Text/typing
- `Volume2` - Sound settings
- `Vibrate` - Haptic feedback
- `Palette` - Themes/colors
- `Languages` - Language selection
- `Info` - Information
- `Moon` - Dark mode
- `Shield` - Privacy
- `Bell` - Notifications
- `Zap` - Quick actions
- `Maximize2` - Size/height
- `MessageSquare` - Messages/suggestions
- `Undo2`, `Redo2` - Undo/redo actions
- `MoreHorizontal` - More options menu

**Icon Sizing Guide**:
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
- Bold: `strokeWidth={2.5}` (emphasis)

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
import androidx.compose.material.icons.outlined.*

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
        .size(40.dp)
        .background(
            brush = Brush.linearGradient(
                colors = listOf(Color(0xFF6750A4), Color(0xFF7F67BE))
            ),
            shape = CircleShape
        ),
    contentAlignment = Alignment.Center
) {
    Icon(
        imageVector = Icons.Filled.Settings,
        contentDescription = "Settings",
        tint = Color.White,
        modifier = Modifier.size(20.dp)
    )
}
```

**Material Icons Mapping** (Lucide → Material Icons):
- `Heart` → `Icons.Filled.Favorite` / `Icons.Outlined.FavoriteBorder`
- `Settings` → `Icons.Filled.Settings`
- `Keyboard` → `Icons.Filled.Keyboard`
- `ChevronRight` → `Icons.Filled.ChevronRight`
- `Check` → `Icons.Filled.Check`
- `CheckCircle2` → `Icons.Filled.CheckCircle`
- `X` → `Icons.Filled.Close`
- `Search` → `Icons.Filled.Search`
- `Trash2` → `Icons.Filled.Delete`
- `Pin` → `Icons.Filled.PushPin`
- `Copy` → `Icons.Filled.ContentCopy`
- `Globe` → `Icons.Filled.Language`
- `Phone` → `Icons.Filled.Phone`
- `Mail` → `Icons.Filled.Email`
- `Type` → `Icons.Filled.TextFields`
- `Volume2` → `Icons.Filled.VolumeUp`
- `Vibrate` → `Icons.Filled.Vibration`
- `Palette` → `Icons.Filled.Palette`
- `Languages` → `Icons.Filled.Translate`
- `Info` → `Icons.Filled.Info`
- `Moon` → `Icons.Filled.DarkMode`
- `Shield` → `Icons.Filled.Shield`
- `Bell` → `Icons.Filled.Notifications`
- `Zap` → `Icons.Filled.Bolt`
- `Maximize2` → `Icons.Filled.Fullscreen`
- `MessageSquare` → `Icons.Filled.Message`
- `Undo2` → `Icons.Filled.Undo`
- `Redo2` → `Icons.Filled.Redo`
- `MoreHorizontal` → `Icons.Filled.MoreHoriz`

**Icon Sizing in Compose**:
```kotlin
// Small (16dp)
Modifier.size(16.dp)

// Medium (20dp) - Default
Modifier.size(20.dp)

// Large (24dp)
Modifier.size(24.dp)

// Extra Large (32dp+)
Modifier.size(32.dp)
```

---

## Platform-Specific Notes

### Web (React/TypeScript)
- **CSS Framework**: Tailwind CSS for styling
- **Animation**: Motion/React (formerly Framer Motion)
- **State**: React hooks (useState, useEffect, etc.)
- **Persistence**: LocalStorage for settings and data
- **Icons**: Lucide React (https://lucide.dev/icons/)
- **Fonts**: System fonts (SF Pro on iOS, Roboto on Android)

### Android (Kotlin/Jetpack Compose)
- **UI Framework**: Jetpack Compose with Material Design 3
- **State**: Jetpack Compose state management (remember, mutableStateOf)
- **Persistence**: SharedPreferences for settings, Room for complex data
- **Icons**: Material Icons (https://fonts.google.com/icons)
- **Fonts**: Roboto (default Material Design font)
- **Reference**: `/guidelines/DesignSystem.md` for exact color/spacing values

---

## Quick Reference

### Most Used Colors
```
Background: #FEF7FF
Surface: #FFFFFF
Card Tint: #F3EDF7
Primary: #6750A4
Primary Light: #E8DEF8
Text: #1C1B1F
Text Secondary: #49454F
Text Tertiary: #79747E
Outline: #E8DEF8
```

### Most Used Spacing
```
xs: 4px (gap-1)
sm: 8px (gap-2)
md: 12px (gap-3)
lg: 16px (gap-4)
xl: 20px (p-5)
xxl: 24px (gap-6)
```

### Most Used Radius
```
Small: 12px (rounded-xl)
Medium: 20px (rounded-[20px])
Large: 28px (rounded-[28px])
Full: 9999px (rounded-full)
```

---

## Final Notes

- **Consistency is key**: Always reference these guidelines and `DesignSystem.md`
- **User first**: If guidelines conflict with UX, prioritize user experience
- **Performance matters**: Fast animations > complex animations
- **Accessibility required**: Not optional - build it in from the start
- **Test on real devices**: Emulators/browsers don't show everything

---

**For Kotlin/Jetpack Compose specific implementation details, see `/guidelines/DesignSystem.md`**
