# Recursive Grid

A recursive 3x3 grid application built with React and Tailwind CSS. The grid implements specific "ripple" rules where interactions with one box propagate changes to neighbors based on divisibility logic.

## 🚀 Deployment

**[Insert Deployment Link Here]**

## 📸 Screenshots

### 1. Initial State
*Starting state: All grid values are 0 (Even - Light Gray).*
![Initial State](<img width="1919" height="868" alt="Screenshot 2026-02-13 181602" src="https://github.com/user-attachments/assets/18cb5659-d17f-471a-a727-1ac2d05f9f2c" />)

### 2. Divisible by 3 (Ripple Rule A)
*Example: A box becomes divisible by 3 (Navy Blue/Purple), effectively decrementing its Right Neighbor.*
![Divisible by 3](<img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/b9ae316c-e8ab-4f86-b639-ab91be376a23" />)

### 3. Divisible by 5 (Ripple Rule B)
*Example: A box becomes divisible by 5, incrementing its Bottom Neighbor by 2.*
![Divisible by 5](<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/92b3c262-6cd7-4f0d-b993-5bde129324a0" />)

### 4. Locked State (Reaching 15)
*Example: A box reaches 15 or higher, turns Red, and becomes locked.*
![Locked State](<img width="1916" height="870" alt="Screenshot 2026-02-13 183006" src="https://github.com/user-attachments/assets/4d6b594d-be81-4656-9e82-890d4e3b2eb5" />)


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
