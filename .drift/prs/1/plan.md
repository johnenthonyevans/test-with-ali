**PR #1** (`studio/test-with-ali` → `main`)

## Status: **waiting for feedback**

Implementation is complete. Ready for review.

---

### What was built

- **Web prototype** — Next.js 14 (App Router) + React + TypeScript.
- **Rotation button** — A single primary button that rotates 360° on each click, with a smooth cubic-bezier transition (0.6s).
- **Styling** — Dark gradient background, gradient button (cyan → green), centered layout, responsive text.

### Run locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** (or the port Next.js prints if 3000 is in use).

### What to test

1. Open the app in a browser.
2. Click the “Click to rotate” button multiple times — each click should add a full 360° spin.
3. Confirm the animation feels smooth and the layout looks good on different viewport sizes.

### Architecture

- `app/page.tsx` — Client component with `useState` for rotation degrees; click handler adds 360 to state.
- `app/globals.css` — Global styles and dark gradient background.
- No Figma or external design assets; implementation follows the PR description (“cool button that has a rotation effect when clicked”).
