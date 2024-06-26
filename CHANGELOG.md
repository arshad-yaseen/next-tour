# next-tour

## 0.7.0

### Minor Changes

- Now able interact with target element during highlight.
- Introduce new controls
  - `closeTour`: Closes the currently active tour without marking it as completed. This allows the tour to be resumed later from the step where it was left off. To continue the tour, call `continueTour`.
  - `continueTour`: Resumes the currently active tour from the step where it was left off.
- New step options
  - `nextOnClickTarget`: Enables advancing to the next step by clicking the target element.
  - `backOnClickTarget`: Enables going back to the previous step by clicking the target element.
  - `closeOnClickTarget`: Allows closing the tour by clicking the target element.

## 0.6.0

### Minor Changes

- Step target spotlight
- Improve focus trapping
- Focus buttons styles.

## 0.5.0

### Minor Changes

- Transform for step positioning
- Route change support
- Viewport edge aware step positioning
- New step and tour options.
  - Tour options: `showProgress`, `showBackButton`, `showCloseButton`, `showOverlay`
  - Step options: `onBeforeNext`, `onBeforeBack`, `onNext`, `onBack`

## 0.4.0

### Minor Changes

- Implement MutationObserver to handle non-existent step targets
- Introduce progress bar for tour steps
- Refine Provider implementation for better context management and performance

## 0.3.1

### Patch Changes

- Performance improvements
- Steps without target
- Tech debt

## 0.3.0

### Minor Changes

- Step Footer Actions
- Step Title
- Design tokens
- New step design

## 0.2.6

### Patch Changes

- When proceeding to the next step, ensure that the target is in the viewport. If not, first scroll it into view.
- Improved typings, Code refactor, Improve Performance

## 0.2.5

### Patch Changes

- Animations and Transitions

## 0.2.4

### Patch Changes

- Update variable names in `utils/positioning.ts`

## 0.2.3

### Patch Changes

- Step Popvers

## 0.2.2

### Patch Changes

- Remove advanced tree-shake in bundling

## 0.2.1

### Patch Changes

- Popover component(WIP)

## 0.2.0

### Minor Changes

- New setup
