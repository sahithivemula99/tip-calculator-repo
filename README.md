# Tip Calculator / Bill Splitter 💰

A responsive single-page Tip Calculator and Bill Splitter web app that updates calculations live as users type.

Users can:

- Enter a bill amount
- Select a preset tip percentage (10%, 15%, 20%) or enter a custom tip
- Enter the number of people splitting the bill
- View live results instantly:
  - Total tip amount
  - Grand total (bill + tip)
  - Per-person share
- See inline validation errors
- Reset all inputs with one click

---

## Features

✅ Real-time calculation (no calculate button)

✅ Preset + custom tip percentage

✅ Active preset highlighting

✅ Inline validation messages

✅ Handles invalid inputs gracefully

✅ Responsive design for mobile and desktop

✅ Keyboard-friendly navigation

✅ Reset functionality

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

*(Replace this section if using React/Vue/Svelte/etc.)*

---

## Folder Structure

```bash
tip-calculator/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── ANSWERS.md
└── assets/
```

---

## How to Run Locally

### Requirements

No installation required if using Vanilla HTML/CSS/JS.

### Steps

1. Clone repository

```bash
git clone <repository-url>
```

2. Navigate into project folder

```bash
cd tip-calculator
```

3. Open:

```bash
index.html
```

or use VS Code Live Server:

```bash
Right Click → Open with Live Server
```

---

## If Using React + Vite

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

## Validation Rules

| Input | Validation |
|---------|------------|
| Bill Amount | Must be greater than 0 |
| Tip Percentage | Must be ≥ 0 and ≤ 100 |
| Number of People | Must be an integer ≥ 1 |

Errors appear below their corresponding fields and disappear automatically after correction.

---

## Rounding Policy

Per-person values are rounded to **2 decimal places using standard rounding**:

Example:

```text
₹123.456 → ₹123.46
```

This approach:

- Matches common payment systems
- Keeps calculations predictable
- Avoids confusing fractional currency values

---

## Responsive Behavior

### Mobile (~360px)

- Inputs stack vertically
- Buttons resize automatically
- Larger touch targets
- Results remain visible without horizontal scrolling

### Desktop (~1440px)

- Uses wider spacing
- Better use of available screen area
- Balanced layout between inputs and results

---

## Accessibility

Implemented:

- Proper form labels
- Keyboard tab navigation
- Visible focus states
- Semantic HTML
- High contrast text

Known limitation:

- Advanced screen-reader announcements for dynamic result updates were not implemented.

---

## Future Improvements

Possible enhancements:

- Dark mode toggle
- Currency selector
- Animated transitions
- Split by custom amounts instead of equal shares
- Local storage persistence

---

## Deployment

Live URL:

```text
Add deployed URL here
```

Examples:

- Vercel
- Netlify
- GitHub Pages

---

## Author

Vemula Sahithi
