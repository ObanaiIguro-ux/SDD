# Design System Documentation: Cinematic Skin Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Bioluminescent Diagnostic"**

This design system is built to bridge the gap between clinical precision and high-end editorial aesthetics. We are moving away from the "standard SaaS" look of white cards and blue buttons. Instead, we treat the interface as a dark, cinematic canvas where information is revealed through light, depth, and translucency.

To break the "template" feel, we employ **Intentional Asymmetry**. Large-scale typography is often offset, and UI elements are layered with varying levels of transparency to mimic the way light passes through the upper layers of the skin (dermis). We do not build grids; we build environments.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of `surface_container_lowest` (#000000), utilizing the amber spectrum to signify energy, warmth, and the "pulse" of AI skin analysis.

### The "No-Line" Rule
**Borders are a failure of hierarchy.** In this system, 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined through:
- **Tonal Shifts:** Transitioning from `surface` (#0e0e0e) to `surface_container_low` (#131313).
- **Luminescent Edge Highlights:** A subtle top-down gradient within a container rather than a stroke.
- **Negative Space:** Using the Spacing Scale to let elements breathe.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of obsidian and frosted glass.
- **Base Layer:** `surface` (#0e0e0e).
- **Primary Content Area:** `surface_container` (#191919).
- **Interactive Elevated Elements:** `surface_container_highest` (#262626).
- **Floating Modals:** Use `surface_variant` with a 40px `backdrop-blur`.

### The "Glass & Gradient" Rule
To achieve "visual soul," use linear gradients (45° or 135°) transitioning from `primary` (#ff9f4a) to `primary_container` (#fd8b00) for all high-value actions. Backgrounds should feature large, low-opacity "blobs" of `secondary` (#ff734c) with 150px+ blurs to create a cinematic atmosphere.

---

## 3. Typography
We use a dual-font approach to balance authority with utility.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and premium "editorial" feel. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an impactful, cinematic hierarchy.
*   **Body & Labels (Inter):** The workhorse for readability. Use `body-md` (0.875rem) for all clinical data and AI insights to ensure clarity against dark backgrounds.

**Hierarchy Tip:** Always pair a `display-sm` headline with a `label-md` uppercase sub-headline in `primary` (#ff9f4a) to establish a sophisticated, high-end SaaS rhythm.

---

## 4. Elevation & Depth
Depth is not about "drop shadows"; it is about **Tonal Layering**.

*   **The Layering Principle:** Instead of shadows, nest containers. A `surface_container_highest` card sitting on a `surface_container_low` background creates a natural, soft lift.
*   **Ambient Shadows:** For floating elements (like AI scan results), use a shadow color tinted with `primary` at 5% opacity. Blur values must be high (30px–60px) to simulate a soft glow rather than a hard cast shadow.
*   **The "Ghost Border" Fallback:** If a container requires definition against a similar tone, use a "Ghost Border"—the `outline_variant` token at 15% opacity.
*   **Glassmorphism:** All floating cards must use a semi-transparent `surface_container` (e.g., #191919 at 70% alpha) with a `backdrop-filter: blur(20px)`. This integrates the component into the atmospheric background.

---

## 5. Components

### Buttons
- **Primary (Glowing):** Background gradient (`primary` to `primary_container`). Border-radius: `full`. Box-shadow: 0 4px 20px `primary` at 30% opacity.
- **Secondary (Glass):** Transparent background, `backdrop-blur(10px)`, Ghost Border (`outline_variant` at 20%).
- **Tertiary:** No background. Text in `primary_dim`. High-contrast hover state.

### Input Fields
- **Style:** Underline only or Ghost Border. Background: `surface_container_low`. 
- **Active State:** The bottom border transforms into a `primary` gradient. 
- **Error State:** Use `error` (#ff7351) text with a subtle `error_container` glow behind the input.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Lists:** Separate items using 12px–16px vertical padding. Use a subtle background hover state (`surface_bright` at 5% opacity).
- **Cards:** Use `xl` (1.5rem) corner radius. Content should be padded generously (32px+) to maintain the premium feel.

### Specialized AI Components
- **The "Pulse" Scanner:** A horizontal gradient line (`primary` to transparent) that moves vertically over skin images to indicate AI processing.
- **Glow Chips:** Use `secondary_container` for the background with `on_secondary_container` text for high-priority health alerts.

---

## 6. Do's and Don'ts

### Do
- **Do** use intentional asymmetry. A headline aligned left with a CTA offset to the right feels more premium than center-alignment.
- **Do** use "Skin Tones" for secondary gradients to reinforce the platform's purpose.
- **Do** ensure `on_surface` (#ffffff) text has at least 80% opacity for primary content to pass AA accessibility standards on dark backgrounds.

### Don't
- **Don't** use pure white (#FFFFFF) for large surfaces. It breaks the cinematic depth. Use `surface_bright` instead.
- **Don't** use 1px solid borders to "box in" content. It looks cheap and clinical.
- **Don't** use high-frequency motion. Transitions should be "liquid"—slow, ease-in-out curves (e.g., 500ms).
- **Don't** clutter the screen. If you have more than 5 elements in a single view, increase the spacing or move to a layered "step" interaction.