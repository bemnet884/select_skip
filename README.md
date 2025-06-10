````markdown
# ♻️ Skip Size Selector Redesign – REMWaste Coding Challenge

This project is a **UI redesign** of the **"Choose Your Skip Size"** page for [REMWaste's booking platform](https://wewantwaste.co.uk/), built as part of the front-end job challenge.

The goal is to create a responsive, modern, and user-friendly interface for selecting a skip size, while maintaining the original functionality.

---

## 🚀 Live Demo

🔗 [Live on Vercel](#) *(https://select-skip.vercel.app/)*  
💻 [GitHub Repository](#) *(https://github.com/bemnet884/select_skip)*

---

## 🧰 Tech Stack

| Technology       | Description |
|------------------|-------------|
| **React 18**     | Component-based UI framework |
| **Next.js** (App Router) | Routing and rendering (with **Server Actions** for API fetching) |
| **TypeScript**   | Static typing for safer, maintainable code |
| **Tailwind CSS** | Utility-first responsive styling |
| **shadcn/ui**    | Accessible and composable UI components (Popover, Sheet, Modal) |
| **Lucide Icons** | Lightweight SVG icon library |

---

## ✅ Features Implemented

### 🧭 Stepper Navigation
- Displays step progress (e.g., "Step 3: Choose Your Skip").
- Mimics the natural flow from postcode ➝ address ➝ waste type.

### 📦 Skip Selection
- Fetches skips dynamically using **Next.js Server Actions** from the API:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- Skip card includes:
  - Name, size, and image
  - Price
  - "Select this Skip" button
- **Modal** confirmation upon skip selection

### 🔍 Filter System

- **Mobile**: Filters open in a **Sheet** (slide-over drawer)
- **Desktop**: Filters appear in a **Popover**

Filtering includes:
- Skip size
- Skip type
- Other relevant categories (depending on data)

### 🎨 UX/UI
- Fully responsive on all screen sizes
- Mobile-first layout
- Clear visual hierarchy
- Interactive and accessible components

---

## 📦 Installation

```bash
git clone https://github.com/bemnet884/select_skip.git
cd select_skip

# Install dependencies
npm install

# Run the development server
npm run dev
````

---

## 📌 Notes

* The focus of this solution is **only** on the skip selection page (step 2).
* Upstream steps like postcode entry, address, or waste type selection are mocked or pre-filled.
* The selected postcode used for API is `NR32` and area is `Lowestoft`.

---

## 🙋 Contact

**Developer**: Bemnet (Bem)
📧 Email: \[[hannabemnet94@gmail.com](mailto:hannabemnet94@gmail.com)]
🌐 LinkedIn: [www.linkedin.com/in/bemnetbeyene](#)

---

Thanks to REMWaste for this challenge opportunity. Looking forward to your feedback!

```
