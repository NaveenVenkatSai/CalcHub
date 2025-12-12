<!-- Project Title -->
<h1 align="center">📘 CalcHub – Modern Multi-Calculator UI</h1>

<p align="center">
A modern, elegant, and responsive multi-calculator web application built using <b>React, TypeScript, Vite, and TailwindCSS</b>.
<br/>CalcHub brings multiple everyday calculators into one clean and beautiful interface.
</p>

---

## 🌟 Features

### 🧮 Included Calculators
- Age Calculator  
- BMI Calculator  
- CGPA / SGPA Calculator  
- Currency Converter  
- Discount Calculator  
- EMI / Loan Calculator  
- GST Calculator  
- Percentage Calculator  
- Scientific Calculator  
- Temperature Converter  

---

## 🎨 UI / UX Highlights
- Modern glassmorphism interface  
- Smooth animations  
- Fully responsive for all devices  
- Elegant gradients & shadows  
- Reusable component library  
- Clean code architecture  

---

## ⚙️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| **React + TypeScript** | UI Components |
| **Vite** | Lightning-fast bundling |
| **TailwindCSS** | Styling |
| **Lucide / Custom UI** | Icons & UI |
| **Vercel** | Deployment |

---

## 📁 Folder Structure

src/
│
├── assets/                 # Images & icons
├── components/
│   ├── calculators/        # All calculator components
│   ├── ui/                 # Reusable UI components
│   ├── CalculatorCard.tsx
│   ├── CalculatorGrid.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Hero.tsx
│
├── styles/                 # Global CSS
├── App.tsx
├── main.tsx
└── index.html

---

## 🛠 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/NaveenVenkatSai/CalcHub.git
cd CalcHub

2️⃣ Install dependencies

npm install

3️⃣ Run the development server

npm run dev


⸻

🏗 Production Build

Generate the optimized production build:

npm run build

This will output:

build/
   index.html
   assets/


⸻

☁️ Deployment (Vercel)

Since the project outputs to build/, configure Vercel like this:

➤ Add vercel.json (highly recommended)

{
  "buildCommand": "npm run build",
  "outputDirectory": "build"
}

➤ Vercel Settings

Setting	Value
Framework Preset	Vite
Build Command	npm run build
Output Directory	build
Root Directory




🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a Pull Request or Issue.



⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub!
Your support motivates me to add more calculators & features.



👨‍💻 Author

Naveen Venkat Sai Chebrolu
CSE with IoT • Designer • Web Developer
Passionate about UI/UX and building useful tools.
