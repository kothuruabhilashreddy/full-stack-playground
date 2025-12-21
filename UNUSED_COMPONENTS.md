# Component Cleanup Documentation

All unused UI components have been removed from the project to keep the codebase clean and maintainable.

## Removed Components

The following components from `src/app/components/ui/` have been deleted as they were not being used in the portfolio application:

- All 48 unused UI library components (accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toggle-group, toggle, tooltip, use-mobile, utils.ts)

- `ExpertiseCard.tsx` (from `components/portfolio/`) - Removed as it's no longer used in the simplified UI

## Currently Used Components

The following components are actively used in the application:

- `ImageWithFallback.tsx` (from `components/figma/`) - Used in Header component
- Custom portfolio components in `components/portfolio/`:
  - `TabButton.tsx`
  - `ProjectCard.tsx`
  - `PaperCard.tsx`
  - `CourseCard.tsx`
  - `FollowChip.tsx`
  - `Header.tsx`
  - `Footer.tsx`

## Result

The codebase is now cleaner with only the components that are actually being used, making it easier to maintain and reducing unnecessary dependencies.
