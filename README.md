# Recursive Grid

A recursive 3x3 grid application built with React and Tailwind CSS. The grid implements specific "ripple" rules where interactions with one box propagate changes to neighbors based on divisibility logic.

## 🚀 Deployment

**[Insert Deployment Link Here]**

## 📸 Screenshots

### 1. Initial State
*Starting state: All grid values are 0 (Even - Light Gray).*
![Initial State](./public/screenshots/initial-state.png)

### 2. Divisible by 3 (Ripple Rule A)
*Example: A box becomes divisible by 3 (Navy Blue/Purple), effectively decrementing its Right Neighbor.*
![Divisible by 3](./public/screenshots/divisible-by-3.png)

### 3. Divisible by 5 (Ripple Rule B)
*Example: A box becomes divisible by 5, incrementing its Bottom Neighbor by 2.*
![Divisible by 5](./public/screenshots/divisible-by-5.png)

### 4. Locked State (Reaching 15)
*Example: A box reaches 15 or higher, turns Red, and becomes locked.*
![Locked State](./public/screenshots/locked-state.png)


## 🛠️ Stack

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS (v4)

## 🧩 Visuals & Logic

### Visuals
- **Even Numbers**: Light Gray Background (`#e0e0e0`)
- **Odd Numbers**: Navy Blue Background (`#1a237e`), White Text
- **Locked**: Red Background, Box Shadow

### Interaction Rules
1. **Click**: Increments box value by 1.
2. **Ripple Rule A**: If a box's new number is **divisible by 3**, decrement the **RIGHT** neighbor by 1.
3. **Ripple Rule B**: If a box's new number is **divisible by 5**, increment the **BELOW** neighbor by 2.
4. **Locked State**: If a box reaches **15**, it turns Red and becomes locked. It cannot be clicked or changed by neighbors.

## 🏃‍♂️ Running Locally

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open in browser**: `http://localhost:5173`
