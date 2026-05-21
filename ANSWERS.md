1. How to run
Requirements
Node.js (v18+ recommended)
Steps
cd "C:\Users\Sahithi Vemula\OneDrive\Desktop\Tip Calculator Bill Splitter web app"
npm install
npm run dev
Open the URL shown in the terminal (usually http://localhost:5173/).
Project is not deployed yet.

2. Stack & Design Choices
Stack choice
I used React + Vite because React makes handling inputs and live updates easy, while Vite is fast and simple to set up.
Design choices
I used a glassmorphism card layout to keep everything inside one focused section and make the UI look modern.
I used tip buttons in a grid instead of a dropdown because users can select a tip faster and clearly see which option is active.
I separated the results into individual boxes so users can quickly understand the total tip, total amount, and per-person amount.

3. Responsive & Accessibility
On 360px mobile
The layout adjusts automatically and fits the screen properly.
Buttons and inputs remain easy to tap.
On 1440px laptop
The calculator stays centered and doesn't stretch too much.
Accessibility handled
Used labels and native buttons for better keyboard navigation.
Accessibility skipped
I did not add additional ARIA attributes due to time limitations.

4. AI Usage
Where I used AI
Used AI to help with React project setup and fixing errors.
Used AI for improving UI ideas and documentation.
Changes made to AI output
AI initially suggested a fixed-width layout, but I changed it to use maxWidth: "100%" so the app works better on smaller screens.

5. Honest Gap
One thing that still needs improvement is better accessibility support. If I had one more day, I would add ARIA attributes, stronger keyboard support, and dark mode.