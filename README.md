# Gadget  

![Gadget Application Screenshot](https://i.ibb.co.com/7xmjzCXW/gad.png) 

---

## Table of Contents  

- [Project Overview](#project-overview)  
- [Screenshot](#screenshot)  
- [Technologies Used](#technologies-used)  
- [Core Features](#core-features)  
- [Dependencies](#dependencies)  
- [Installation and Running Locally](#installation-and-running-locally)  
- [Live Project](#live-project)  
- [Relevant Resources](#relevant-resources)  

---

## Project Overview  

**Gadget** is a learning project and single-page application built with React. It fetches gadget data (including laptops, phones, and watches) from a JSON source and enables users to explore various categories. Users can view product details and save their selections to local storage through an "Add to Cart" feature.

---

## Screenshot  

**Category**
(https://i.ibb.co.com/m5YmcwJ9/mac.png)
**Product Details**
(https://i.ibb.co.com/3yTWnTzW/details.png)

---

## Technologies Used  

- **Frontend:** React, React Router DOM  
- **Styling:** Tailwind CSS, DaisyUI  
- **Utilities:** Local Storage for state persistence, React Hot Toast for notifications, React Icons  

---

## Core Features  

1. **Single Page Application:** Fast and seamless navigation between pages  
2. **Category Filtering:** Search and filter products by category  
3. **Product Details:** View detailed information about a specific gadget  
4. **Local Storage Persistence:** Selected items are saved locally  
5. **No Duplicate Selection:** Prevents users from adding the same item twice  

---

## Dependencies  

### Production Dependencies  

```json
{
  "localforage": "^1.10.0",
  "match-sorter": "^7.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.3.0",
  "react-router-dom": "^6.27.0",
  "sort-by": "^1.2.0"
}
```

### Development Dependencies  

```json
{
  "@eslint/js": "^9.13.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.3",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.14",
  "eslint": "^9.13.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.11.0",
  "postcss": "^8.4.47",
  "tailwindcss": "^3.4.14",
  "vite": "^5.4.10"
}
```

---

## Installation and Running Locally  

1. **Clone the repository:**  
   ```bash
   git clone <repository-link>
   cd gadget-app
   ```  

2. **Install dependencies:**  
   ```bash
   npm install
   ```  

3. **Start the development server:**  
   ```bash
   npm run dev
   ```  



## Live Project  

Visit the live platform here: [Gadget](https://gentle-druid-62f647.netlify.app/)  

---

## Relevant Resources  

- [React Documentation](https://reactjs.org/docs/getting-started.html)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- [Vite Documentation](https://vitejs.dev/guide/)  
