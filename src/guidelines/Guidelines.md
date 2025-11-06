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

## Platform-Specific Notes

### Web (React/TypeScript)
- Use Tailwind CSS for styling
- Motion/React for animations
- LocalStorage for persistence
- Lucide-react for icons

### Android (Kotlin/Jetpack Compose)
- Follow Material Design 3 guidelines
- Use Jetpack Compose state management
- SharedPreferences for persistence
- Material Icons for icons
- Reference `/guidelines/DesignSystem.md` for exact values

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
