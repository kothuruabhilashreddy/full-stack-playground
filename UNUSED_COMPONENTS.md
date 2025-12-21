# Unused Components Documentation

This document lists all UI components in `src/app/components/ui/` that are **not currently being used** in the portfolio application.

## Unused Components

The following components from the `ui` folder are not imported or used anywhere in the application:

1. `accordion.tsx`
2. `alert-dialog.tsx`
3. `alert.tsx`
4. `aspect-ratio.tsx`
5. `avatar.tsx`
6. `badge.tsx`
7. `breadcrumb.tsx`
8. `button.tsx`
9. `calendar.tsx`
10. `card.tsx`
11. `carousel.tsx`
12. `chart.tsx`
13. `checkbox.tsx`
14. `collapsible.tsx`
15. `command.tsx`
16. `context-menu.tsx`
17. `dialog.tsx`
18. `drawer.tsx`
19. `dropdown-menu.tsx`
20. `form.tsx`
21. `hover-card.tsx`
22. `input-otp.tsx`
23. `input.tsx`
24. `label.tsx`
25. `menubar.tsx`
26. `navigation-menu.tsx`
27. `pagination.tsx`
28. `popover.tsx`
29. `progress.tsx`
30. `radio-group.tsx`
31. `resizable.tsx`
32. `scroll-area.tsx`
33. `select.tsx`
34. `separator.tsx`
35. `sheet.tsx`
36. `sidebar.tsx`
37. `skeleton.tsx`
38. `slider.tsx`
39. `sonner.tsx`
40. `switch.tsx`
41. `table.tsx`
42. `tabs.tsx`
43. `textarea.tsx`
44. `toggle-group.tsx`
45. `toggle.tsx`
46. `tooltip.tsx`
47. `use-mobile.ts`
48. `utils.ts` (Note: This might be used by other components, but not directly in the app)

## Recommendation

These components appear to be from a UI component library (likely shadcn/ui) that was included in the project template but are not needed for the current portfolio implementation. 

**Options:**
1. **Keep them** - If you plan to use them in the future, you can leave them as-is
2. **Remove them** - If you want to clean up the codebase, you can delete the unused components to reduce bundle size and complexity

## Currently Used Components

- `ImageWithFallback.tsx` (from `components/figma/`) - Used in Header component
- Custom portfolio components in `components/portfolio/`:
  - `ExpertiseCard.tsx`
  - `TabButton.tsx`
  - `ProjectCard.tsx`
  - `PaperCard.tsx`
  - `CourseCard.tsx`
  - `FollowChip.tsx`
  - `Header.tsx`
  - `Footer.tsx`

