---
name: Technical Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  component-gap: 8px
  tight-gap: 4px
---

## Brand & Style
The design system is engineered for utility-first environments where information density and clarity are paramount. It targets professional operators and technical users who require immediate access to high-fidelity data without aesthetic distractions.

The style is **Industrial Minimalism**. It prioritizes structural integrity over decoration, utilizing a systematic approach to hierarchy. The emotional response is one of reliability, precision, and "zero-latency" comprehension. Visuals are grounded in a utilitarian framework that draws inspiration from modern developer tools and control room interfaces.

## Colors
The palette is rooted in a professional **Slate and Zinc** foundation to maintain a neutral environment for data analysis. 

- **Primary (Cobalt):** Used exclusively for primary actions and active states to ensure immediate recognition.
- **Neutrals:** A high-contrast range from Slate-50 for backgrounds to Slate-900 for primary text, ensuring deep legibility.
- **Functional Accents:** Status colors (Emerald, Amber, Rose) are high-chroma but used sparingly as indicators (dots, icons, or subtle badges) to flag system states without overwhelming the user interface.

## Typography
Typography in this design system is optimized for high-density layouts. **Inter** provides high legibility for UI labels and body text, while **JetBrains Mono** is employed for technical data points, status codes, and numerical values to ensure monospaced alignment in tables and dashboards.

Avoid large-scale display type. The maximum headline size is capped to preserve vertical space. Use `mono-label` for all metadata and system-generated strings to distinguish them from user-generated content.

## Layout & Spacing
This design system utilizes a **Fluid Grid with High Density**. It prioritizes horizontal space and minimizes vertical padding to allow as much data as possible to be "above the fold."

- **Grid:** A 12-column grid for desktop, collapsing to 4 columns for mobile.
- **Spacing Rhythm:** Based on a strict 4px baseline. Components typically use 8px or 12px gaps.
- **Density:** Use "Compact" spacing as the default. White space is treated as a functional separator rather than a stylistic choice.

## Elevation & Depth
Depth is conveyed through **Low-Contrast Outlines** rather than heavy shadows. This maintains the "industrial" feel and prevents the UI from feeling muddy in high-density views.

- **Level 0 (Background):** Surface color #F8FAFC.
- **Level 1 (Cards/Containers):** White background with a 1px solid border in Slate-200. No shadow.
- **Level 2 (Dropdowns/Modals):** White background with a 1px solid border in Slate-300 and a very tight, 4px blur ambient shadow (#0000000A).
- **Active State:** Elements may use a subtle inner stroke or a 1px Primary-colored border to indicate focus.

## Shapes
The shape language is **Soft** but disciplined. A universal 4px (`0.25rem`) corner radius is applied to buttons, inputs, and cards. This provides a modern touch while maintaining the structured, grid-aligned feel of a technical tool. Larger elements like modals do not exceed 8px (`0.5rem`) radius.

## Components
- **Buttons:** Primary buttons use high-contrast Cobalt backgrounds with white text. Secondary buttons use a Slate-100 fill or a 1px border. All buttons use compact padding (8px top/bottom, 12px left/right).
- **Cards:** Defined by 1px borders (Slate-200). Headers in cards should have a subtle bottom border and use `headline-md` or `mono-label`.
- **Inputs:** Square-ish (4px radius), 1px Slate-300 borders, and 14px text. Focus states use a 1px Primary border with a 2px soft outer glow.
- **Status Indicators:** Use small 8px circles (dots) with status colors. For more emphasis, use a subtle "Ghost Badge": a light tint of the status color with high-contrast text.
- **Data Tables:** High-density, no vertical borders. Horizontal borders only (Slate-100). Use JetBrains Mono for all numeric columns.
- **Lists:** Clean, 1px separated lines with 8px vertical padding per item.