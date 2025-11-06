# Kavi Kannada Design System
## Material You 2025 Design Guidelines

This document provides the complete design system for Kavi Kannada to ensure consistency across web (React) and Android (Kotlin/Jetpack Compose) implementations.

---

## 🎨 Color System

### Primary Colors
```kotlin
// Primary Purple
val Primary = Color(0xFF6750A4)
val PrimaryContainer = Color(0xFFE8DEF8)
val OnPrimary = Color(0xFFFFFFFF)
val OnPrimaryContainer = Color(0xFF21005D)

// Secondary
val Secondary = Color(0xFF625B71)
val SecondaryContainer = Color(0xFFE8DEF8)
val OnSecondary = Color(0xFFFFFFFF)
val OnSecondaryContainer = Color(0xFF1D192B)

// Tertiary
val Tertiary = Color(0xFF7D5260)
val TertiaryContainer = Color(0xFFFFD8E4)
val OnTertiary = Color(0xFFFFFFFF)
val OnTertiaryContainer = Color(0xFF31111D)
```

### Surface Colors
```kotlin
val Surface = Color(0xFFFFFFFF)
val SurfaceVariant = Color(0xFFE7E0EC)
val SurfaceTint = Color(0xFF6750A4)
val Background = Color(0xFFFEF7FF)  // Main app background
val OnSurface = Color(0xFF1C1B1F)
val OnSurfaceVariant = Color(0xFF49454F)
val Outline = Color(0xFF79747E)
val OutlineVariant = Color(0xFFCAC4D0)
```

### Gradient Colors
```kotlin
// Use for special UI elements like icons, buttons
val GradientPurple = listOf(
    Color(0xFF6750A4),
    Color(0xFF7F67BE)
)

val GradientPink = listOf(
    Color(0xFFEC4899),
    Color(0xFFF43F5E)
)

val GradientGreen = listOf(
    Color(0xFF4ADE80),
    Color(0xFF10B981)
)

val GradientBlue = listOf(
    Color(0xFF60A5FA),
    Color(0xFF06B6D4)
)

val GradientAmber = listOf(
    Color(0xFFFBBF24),
    Color(0xFFF97316)
)
```

### Semantic Colors
```kotlin
// Clipboard Type Colors
val WebLinkGradient = listOf(Color(0xFF60A5FA), Color(0xFF06B6D4))
val PhoneGradient = listOf(Color(0xFF4ADE80), Color(0xFF10B981))
val EmailGradient = listOf(Color(0xFFA78BFA), Color(0xFF8B5CF6))
val TextGradient = listOf(Color(0xFFFBBF24), Color(0xFFF97316))

// Background tints for clipboard types
val WebLinkBg = Color(0xFFEFF6FF)      // Blue-50
val PhoneBg = Color(0xFFF0FDF4)        // Green-50
val EmailBg = Color(0xFFFAF5FF)        // Purple-50
val TextBg = Color(0xFFFFFBEB)         // Amber-50

// Success/Error/Warning
val Success = Color(0xFF4ADE80)
val Error = Color(0xFFEF4444)
val Warning = Color(0xFFFBBF24)
```

---

## 📐 Spacing System

Use consistent spacing throughout the app:

```kotlin
object Spacing {
    val xs = 4.dp      // Tiny gaps
    val sm = 8.dp      // Small gaps
    val md = 12.dp     // Default item spacing
    val lg = 16.dp     // Section spacing
    val xl = 20.dp     // Large spacing
    val xxl = 24.dp    // Extra large spacing
    val xxxl = 32.dp   // Screen padding
}

// Grid system (for layouts)
val gridGap = 12.dp
val containerPadding = 20.dp
```

**Usage Examples:**
- Button padding: `horizontal = 24.dp, vertical = 12.dp`
- Card padding: `20.dp`
- Screen margins: `20.dp`
- Between sections: `24.dp`
- Between items in list: `12.dp`

---

## 🔤 Typography

### Font Weights
```kotlin
val Light = FontWeight.W300
val Regular = FontWeight.W400
val Medium = FontWeight.W500
val SemiBold = FontWeight.W600
val Bold = FontWeight.W700
```

### Text Styles
```kotlin
// Display - Large headings
val DisplayLarge = TextStyle(
    fontSize = 57.sp,
    lineHeight = 64.sp,
    fontWeight = FontWeight.W400
)

// Headline - Section headers
val HeadlineLarge = TextStyle(
    fontSize = 32.sp,
    lineHeight = 40.sp,
    fontWeight = FontWeight.W400
)

val HeadlineMedium = TextStyle(
    fontSize = 28.sp,
    lineHeight = 36.sp,
    fontWeight = FontWeight.W400
)

val HeadlineSmall = TextStyle(
    fontSize = 24.sp,
    lineHeight = 32.sp,
    fontWeight = FontWeight.W400
)

// Title - Card titles, dialog titles
val TitleLarge = TextStyle(
    fontSize = 22.sp,
    lineHeight = 28.sp,
    fontWeight = FontWeight.W400
)

val TitleMedium = TextStyle(
    fontSize = 16.sp,
    lineHeight = 24.sp,
    fontWeight = FontWeight.W500,
    letterSpacing = 0.15.sp
)

val TitleSmall = TextStyle(
    fontSize = 14.sp,
    lineHeight = 20.sp,
    fontWeight = FontWeight.W500,
    letterSpacing = 0.1.sp
)

// Body - Main content text
val BodyLarge = TextStyle(
    fontSize = 16.sp,
    lineHeight = 24.sp,
    fontWeight = FontWeight.W400,
    letterSpacing = 0.5.sp
)

val BodyMedium = TextStyle(
    fontSize = 14.sp,
    lineHeight = 20.sp,
    fontWeight = FontWeight.W400,
    letterSpacing = 0.25.sp
)

val BodySmall = TextStyle(
    fontSize = 12.sp,
    lineHeight = 16.sp,
    fontWeight = FontWeight.W400,
    letterSpacing = 0.4.sp
)

// Label - Buttons, tabs
val LabelLarge = TextStyle(
    fontSize = 14.sp,
    lineHeight = 20.sp,
    fontWeight = FontWeight.W500,
    letterSpacing = 0.1.sp
)

val LabelMedium = TextStyle(
    fontSize = 12.sp,
    lineHeight = 16.sp,
    fontWeight = FontWeight.W500,
    letterSpacing = 0.5.sp
)

val LabelSmall = TextStyle(
    fontSize = 11.sp,
    lineHeight = 16.sp,
    fontWeight = FontWeight.W500,
    letterSpacing = 0.5.sp
)
```

**Usage Guide:**
- Page titles: `HeadlineLarge` or `HeadlineMedium`
- Section headers: `TitleLarge`
- Card titles: `TitleMedium`
- Body text: `BodyLarge` or `BodyMedium`
- Captions/timestamps: `BodySmall`
- Button text: `LabelLarge`
- Badges/chips: `LabelSmall`

---

## 🎯 Border Radius

Material You 2025 uses organic, rounded shapes:

```kotlin
object CornerRadius {
    val xs = 8.dp      // Small elements
    val sm = 12.dp     // Chips, badges
    val md = 16.dp     // Cards, inputs (default)
    val lg = 20.dp     // Large cards, panels
    val xl = 24.dp     // Modals, sheets
    val xxl = 28.dp    // Primary buttons, main containers
    val xxxl = 32.dp   // Bottom sheets, large surfaces
    val full = 9999.dp // Circular (pills, icons)
}
```

**Component-Specific:**
- Buttons: `28.dp` (primary), `9999.dp` (pill style)
- Cards: `20.dp` - `28.dp`
- Input fields: `16.dp`
- Chips/Badges: `12.dp` - `9999.dp`
- Bottom sheets: `32.dp` (top corners only)
- Icon containers: `14.dp` - `16.dp`
- Keyboard keys: `12.dp`

---

## 🌊 Elevation & Shadows

Material You uses subtle shadows for depth:

```kotlin
// Shadow definitions (use with Modifier.shadow())
val ElevationLevel1 = 2.dp  // Subtle lift (cards at rest)
val ElevationLevel2 = 4.dp  // Normal cards
val ElevationLevel3 = 8.dp  // Floating elements (FAB)
val ElevationLevel4 = 12.dp // Dialogs, modals
val ElevationLevel5 = 16.dp // Bottom sheets

// Custom shadow colors
val ShadowColor = Color.Black.copy(alpha = 0.08f)
```

**Jetpack Compose Example:**
```kotlin
Card(
    modifier = Modifier
        .shadow(
            elevation = 4.dp,
            shape = RoundedCornerShape(20.dp),
            spotColor = Color.Black.copy(alpha = 0.08f)
        ),
    shape = RoundedCornerShape(20.dp)
) {
    // Content
}
```

**Gradient Icon Shadows:**
```kotlin
// For gradient icon buttons (like toolbar icons)
Modifier.shadow(
    elevation = 6.dp,
    shape = CircleShape,
    spotColor = /* gradient color */.copy(alpha = 0.3f)
)
```

---

## 🎬 Animations

### Timing Functions
```kotlin
// Easing curves
val StandardEasing = CubicBezierEasing(0.4f, 0.0f, 0.2f, 1.0f)
val DecelerateEasing = CubicBezierEasing(0.0f, 0.0f, 0.2f, 1.0f)
val AccelerateEasing = CubicBezierEasing(0.4f, 0.0f, 1.0f, 1.0f)
val SpringStiff = spring<Float>(stiffness = 300f)
val SpringBouncy = spring<Float>(dampingRatio = 0.7f, stiffness = 200f)
```

### Duration
```kotlin
val DurationShort = 150  // Quick actions (button tap)
val DurationMedium = 300 // Standard transitions
val DurationLong = 500   // Screen transitions
```

### Common Animations

**Scale on Press:**
```kotlin
val scale by animateFloatAsState(
    targetValue = if (pressed) 0.95f else 1f,
    animationSpec = spring(dampingRatio = 0.5f)
)
Modifier.scale(scale)
```

**Fade In:**
```kotlin
AnimatedVisibility(
    visible = visible,
    enter = fadeIn(animationSpec = tween(300)) + 
            slideInVertically(initialOffsetY = { it / 4 }),
    exit = fadeOut(animationSpec = tween(150))
) {
    // Content
}
```

**Slide Up (Bottom Sheet):**
```kotlin
AnimatedVisibility(
    visible = showSheet,
    enter = slideInVertically(
        initialOffsetY = { it },
        animationSpec = spring(dampingRatio = 0.8f, stiffness = 300f)
    ),
    exit = slideOutVertically(
        targetOffsetY = { it },
        animationSpec = tween(200)
    )
) {
    // Sheet content
}
```

**Toolbar Slide Animation:**
```kotlin
// For toolbar icons appearing one by one
items.forEachIndexed { index, item ->
    AnimatedVisibility(
        visible = showToolbar,
        enter = fadeIn(
            animationSpec = tween(
                durationMillis = 200,
                delayMillis = index * 40,
                easing = StandardEasing
            )
        ) + scaleIn(
            initialScale = 0.8f,
            animationSpec = spring(stiffness = 300f)
        )
    ) {
        // Icon
    }
}
```

---

## 🎨 Component Patterns

### Primary Button
```kotlin
Button(
    onClick = { },
    modifier = Modifier
        .fillMaxWidth()
        .height(56.dp)
        .shadow(8.dp, RoundedCornerShape(28.dp), spotColor = Primary.copy(0.25f)),
    shape = RoundedCornerShape(28.dp),
    colors = ButtonDefaults.buttonColors(
        containerColor = Color.Transparent
    ),
    contentPadding = PaddingValues(0.dp)
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.horizontalGradient(
                    colors = listOf(Color(0xFF6750A4), Color(0xFF7F67BE))
                )
            ),
        contentAlignment = Alignment.Center
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(Icons.Default.Check, contentDescription = null)
            Spacer(Modifier.width(8.dp))
            Text("Continue", style = MaterialTheme.typography.labelLarge)
        }
    }
}
```

### Secondary Button
```kotlin
Button(
    onClick = { },
    modifier = Modifier
        .fillMaxWidth()
        .height(56.dp),
    shape = RoundedCornerShape(28.dp),
    colors = ButtonDefaults.buttonColors(
        containerColor = Color(0xFFE8DEF8)
    )
) {
    Text(
        "Settings",
        style = MaterialTheme.typography.labelLarge,
        color = Color(0xFF6750A4)
    )
}
```

### Card Component
```kotlin
Card(
    modifier = Modifier
        .fillMaxWidth()
        .shadow(2.dp, RoundedCornerShape(20.dp)),
    shape = RoundedCornerShape(20.dp),
    colors = CardDefaults.cardColors(
        containerColor = Color.White
    )
) {
    Column(
        modifier = Modifier.padding(16.dp)
    ) {
        // Card content
    }
}
```

### Gradient Icon Button
```kotlin
Box(
    modifier = Modifier
        .size(40.dp)
        .shadow(6.dp, CircleShape, spotColor = Color(0xFF6750A4).copy(0.3f))
        .background(
            brush = Brush.linearGradient(
                colors = listOf(Color(0xFF6750A4), Color(0xFF7F67BE))
            ),
            shape = CircleShape
        )
        .clickable { },
    contentAlignment = Alignment.Center
) {
    Icon(
        Icons.Default.Settings,
        contentDescription = "Settings",
        tint = Color.White,
        modifier = Modifier.size(20.dp)
    )
}
```

### Clipboard Item Card (Swipeable)
```kotlin
val offsetX = remember { mutableStateOf(0f) }

Box(
    modifier = Modifier.fillMaxWidth()
) {
    // Delete background
    if (offsetX.value < -100f) {
        Box(
            modifier = Modifier
                .matchParentSize()
                .background(
                    brush = Brush.horizontalGradient(
                        colors = listOf(Color(0xFFEF4444), Color(0xFFF43F5E))
                    ),
                    shape = RoundedCornerShape(20.dp)
                )
                .padding(end = 24.dp),
            contentAlignment = Alignment.CenterEnd
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(Icons.Default.Delete, tint = Color.White)
                Spacer(Modifier.width(8.dp))
                Text("Delete", color = Color.White, fontWeight = FontWeight.Medium)
            }
        }
    }

    // Swipeable card
    Card(
        modifier = Modifier
            .offset { IntOffset(offsetX.value.toInt(), 0) }
            .pointerInput(Unit) {
                detectHorizontalDragGestures(
                    onDragEnd = {
                        if (offsetX.value < -150f) {
                            // Delete item
                        } else {
                            offsetX.value = 0f
                        }
                    }
                ) { _, dragAmount ->
                    offsetX.value = (offsetX.value + dragAmount).coerceIn(-300f, 0f)
                }
            },
        shape = RoundedCornerShape(20.dp)
    ) {
        // Card content
    }
}
```

### Badge/Chip
```kotlin
Surface(
    shape = RoundedCornerShape(12.dp),
    color = Color(0xFFEFF6FF) // WebLinkBg
) {
    Text(
        "Link",
        modifier = Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
        style = MaterialTheme.typography.labelSmall,
        color = Color(0xFF1C1B1F)
    )
}
```

### Search Bar
```kotlin
TextField(
    value = searchQuery,
    onValueChange = { searchQuery = it },
    modifier = Modifier
        .fillMaxWidth()
        .height(48.dp),
    placeholder = { Text("Search...") },
    leadingIcon = {
        Icon(Icons.Default.Search, contentDescription = null)
    },
    trailingIcon = {
        if (searchQuery.isNotEmpty()) {
            IconButton(onClick = { searchQuery = "" }) {
                Icon(Icons.Default.Close, contentDescription = "Clear")
            }
        }
    },
    shape = RoundedCornerShape(16.dp),
    colors = TextFieldDefaults.colors(
        focusedContainerColor = Color(0xFFF3EDF7),
        unfocusedContainerColor = Color(0xFFF3EDF7),
        focusedIndicatorColor = Color.Transparent,
        unfocusedIndicatorColor = Color.Transparent
    )
)
```

---

## 🎯 Layout Patterns

### Screen Container
```kotlin
Column(
    modifier = Modifier
        .fillMaxSize()
        .background(Color(0xFFFEF7FF))
        .padding(20.dp)
) {
    // Content
}
```

### Sticky Header
```kotlin
LazyColumn {
    stickyHeader {
        Surface(
            modifier = Modifier.fillMaxWidth(),
            color = Color(0xFFFEF7FF).copy(alpha = 0.95f),
            shadowElevation = 1.dp
        ) {
            Row(
                modifier = Modifier.padding(20.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Image(/* logo */)
                Spacer(Modifier.width(16.dp))
                Text("Settings", style = MaterialTheme.typography.headlineMedium)
            }
        }
    }
    
    items(settingsList) { item ->
        // List items
    }
}
```

### Bottom Sheet
```kotlin
if (showSheet) {
    ModalBottomSheet(
        onDismissRequest = { showSheet = false },
        sheetState = rememberModalBottomSheetState(),
        shape = RoundedCornerShape(topStart = 32.dp, topEnd = 32.dp),
        containerColor = Color.White,
        scrimColor = Color.Black.copy(alpha = 0.4f)
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            // Sheet content
        }
    }
}
```

---

## 📱 Keyboard Specific

### Key Button
```kotlin
Box(
    modifier = Modifier
        .weight(1f)
        .aspectRatio(1f)
        .padding(4.dp)
        .shadow(2.dp, RoundedCornerShape(12.dp))
        .background(Color.White, RoundedCornerShape(12.dp))
        .clickable { }
        .then(
            if (pressed) Modifier.scale(0.95f) else Modifier
        ),
    contentAlignment = Alignment.Center
) {
    Text(
        text = letter,
        style = MaterialTheme.typography.titleLarge,
        color = Color(0xFF1C1B1F)
    )
}
```

### Keyboard Height
```kotlin
val keyboardHeights = mapOf(
    "small" to 220.dp,
    "medium" to 260.dp,
    "large" to 300.dp,
    "extra_large" to 340.dp
)
```

### Suggestion Chip
```kotlin
Surface(
    modifier = Modifier
        .height(40.dp)
        .clickable { },
    shape = RoundedCornerShape(20.dp),
    color = Color(0xFFF3EDF7)
) {
    Text(
        text = suggestion,
        modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
        style = MaterialTheme.typography.bodyMedium,
        color = Color(0xFF1C1B1F)
    )
}
```

---

## 🎨 Design Principles

### 1. **Organic Shapes**
- Use rounded corners (20-32dp) for most elements
- Avoid sharp corners except for small icons

### 2. **Elevation Hierarchy**
- Background: flat
- Cards: 2-4dp elevation
- Floating elements: 8-12dp elevation
- Dialogs/modals: 16dp elevation

### 3. **Color Usage**
- Primary color for main actions
- Gradients for visual interest (icons, special buttons)
- Semantic colors for categories (clipboard types, status)
- Neutral backgrounds with slight purple tint

### 4. **Spacing Consistency**
- Use 4dp grid system
- Minimum touch target: 48dp × 48dp
- Consistent padding: 16-20dp for containers

### 5. **Animation Guidelines**
- Use spring animations for playful feel
- Duration: 150-300ms for most interactions
- Stagger animations for lists (40ms delay between items)
- Scale down to 0.95 on press

### 6. **Accessibility**
- Minimum text size: 12sp (labels), 14sp (body)
- Color contrast ratio: 4.5:1 minimum
- Touch targets: 48dp minimum
- Provide haptic feedback for key actions

---

## 🚀 Quick Reference

### Common Component Sizes
```kotlin
// Buttons
val buttonHeight = 56.dp
val smallButtonHeight = 48.dp
val iconButtonSize = 40.dp

// Icons
val iconSizeSmall = 16.dp
val iconSizeMedium = 20.dp
val iconSizeLarge = 24.dp

// Containers
val containerIconSize = 40.dp
val containerIconSizeLarge = 56.dp

// Lists
val listItemHeight = 72.dp
val listItemHeightCompact = 56.dp
```

### Color Quick Access
```
Background: #FEF7FF
Surface: #FFFFFF
Primary: #6750A4
Primary Container: #E8DEF8
Text Primary: #1C1B1F
Text Secondary: #49454F
Text Tertiary: #79747E
Outline: #E8DEF8
```

---

## 📦 Complete Kotlin Theme Example

```kotlin
// themes/Color.kt
val Purple40 = Color(0xFF6750A4)
val Purple80 = Color(0xFFE8DEF8)
val PurpleGrey40 = Color(0xFF625B71)
val Pink40 = Color(0xFF7D5260)
val Background = Color(0xFFFEF7FF)

private val LightColorScheme = lightColorScheme(
    primary = Purple40,
    secondary = PurpleGrey40,
    tertiary = Pink40,
    background = Background,
    surface = Color.White,
    onPrimary = Color.White,
    onSecondary = Color.White,
    onTertiary = Color.White,
    onBackground = Color(0xFF1C1B1F),
    onSurface = Color(0xFF1C1B1F),
    primaryContainer = Purple80,
    onPrimaryContainer = Color(0xFF21005D)
)

// themes/Type.kt
val Typography = Typography(
    displayLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 57.sp,
        lineHeight = 64.sp
    ),
    headlineLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 32.sp,
        lineHeight = 40.sp
    ),
    titleLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 22.sp,
        lineHeight = 28.sp
    ),
    bodyLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        lineHeight = 24.sp,
        letterSpacing = 0.5.sp
    ),
    labelLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.1.sp
    )
)

// themes/Theme.kt
@Composable
fun KaviKannadaTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
```

---

## ✅ Checklist for New Screens

- [ ] Background color is `#FEF7FF`
- [ ] Border radius is 20-32dp for main containers
- [ ] Text uses Material You typography scale
- [ ] Buttons are 56dp height with 28dp corner radius
- [ ] Gradients used for special UI elements (icons, accent buttons)
- [ ] Animations use spring or standard easing
- [ ] Touch targets are minimum 48dp
- [ ] Proper elevation/shadow for depth
- [ ] Consistent 20dp screen padding
- [ ] Icons are 20-24dp size

---

This design system ensures visual consistency across all platforms while maintaining the Material You 2025 aesthetic of Kavi Kannada. Use these values as the foundation for all UI development in Kotlin/Jetpack Compose.
