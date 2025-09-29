# 🛒 React TypeScript Shopping Cart Application

A modern, responsive shopping cart application built with React, TypeScript, and Vite. Features a clean UI with Bootstrap styling, persistent cart storage, and a seamless shopping experience.

## ✨ Features

- 🛒 **Shopping Cart Functionality**
  - Add/remove items from cart
  - Quantity management with +/- controls
  - Persistent cart storage using localStorage
  - Real-time total calculation
  - Cart modal with item details

- 🎨 **Modern UI/UX**
  - Responsive Bootstrap design
  - Clean, professional styling
  - Shopping cart icon with quantity badge
  - Offcanvas cart modal
  - Mobile-friendly interface

- ⚡ **Developer Experience**
  - TypeScript for type safety
  - Fast Vite build system with HMR
  - ESLint code quality checks
  - Component-based architecture
  - React Context for state management

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 4.4.5
- **UI Framework**: React Bootstrap 2.9.1
- **Routing**: React Router DOM 6.17.0
- **Styling**: Bootstrap 5.3.2
- **State Management**: React Context API
- **Storage**: Browser localStorage
- **Development**: ESLint + TypeScript strict mode

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CartItem.tsx     # Individual cart item display
│   ├── Navbar.tsx       # Navigation bar with cart icon
│   ├── ShoppingCart.tsx # Cart modal component
│   └── StoreItem.tsx    # Store item card component
├── context/             # React Context for state management
│   └── ShoppingCartContext.tsx  # Global cart state
├── data/               # Static data
│   └── item.json       # Store items data
├── hooks/              # Custom React hooks
│   └── useLocalStorage.tsx  # localStorage integration
├── pages/              # Route components
│   ├── About.tsx       # About page
│   ├── Home.tsx        # Home page
│   └── Store.tsx       # Store page with items grid
├── utilities/          # Helper functions
│   └── FormatCurrency.ts  # Currency formatting
├── App.tsx             # Main app component
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 14 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   # Navigate to the project directory
   cd ReactTypeScript---WebDevSimplified
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Build the app for production

# Code Quality
npm run lint         # Run ESLint to check code quality

# Preview
npm run preview      # Preview the production build locally
```

## 🎯 How to Use

### Navigation
- **Home** (`/`) - Landing page
- **Store** (`/store`) - Browse and purchase items
- **About** (`/about`) - About section

### Shopping Experience
1. Visit the **Store** page to see available items
2. Click **"Add to Cart"** to add items to your cart
3. Use **+/-** buttons to adjust quantities
4. Click the **cart icon** in the navbar to view your cart
5. **Remove items** using the × button in the cart modal
6. Your cart is **automatically saved** to browser storage

## 🔧 Code Architecture

### State Management
The application uses React Context API for global state management:

```typescript
// ShoppingCartContext provides:
- cartItems: CartItem[]           // Array of items in cart
- cartQuantity: number            // Total item count
- getItemQuantity(id): number     // Get quantity for specific item
- increaseCartQuantity(id): void  // Add item to cart
- decreaseCartQuantity(id): void  // Remove item from cart
- removeFromCart(id): void        // Remove item completely
- openCart() / closeCart(): void  // Control cart modal
```

### Data Structure

**Store Items:**
```typescript
{
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
```

**Cart Items:**
```typescript
{
  id: number;
  quantity: number;
}
```

### Key Components

- **`ShoppingCartProvider`**: Wraps the entire app, manages cart state
- **`Navbar`**: Navigation with cart icon and quantity badge
- **`Store`**: Grid layout displaying all available items
- **`StoreItem`**: Individual item card with add/remove functionality
- **`ShoppingCart`**: Modal displaying cart contents and total
- **`CartItem`**: Individual cart item with image, details, and remove button

## 🛠️ Custom Hooks

### `useLocalStorage<T>`
Provides localStorage integration with React state:
```typescript
const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
```

Features:
- Automatic serialization/deserialization
- Type-safe generic implementation
- Initial value handling

## 🎨 Styling

- **Bootstrap 5.3.2** for responsive grid system and components
- **React Bootstrap** for React-specific Bootstrap components
- **Custom CSS** for specific styling needs
- **Responsive design** that works on all device sizes

## 📦 Build & Deploy

### Development Build
```bash
npm run dev
```
- Hot Module Replacement (HMR)
- Fast compilation with SWC
- TypeScript checking
- Development server on port 5173

### Production Build
```bash
npm run build
```
- TypeScript compilation
- Vite bundling and optimization
- Static files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Tests the optimized version

## 🔍 Code Quality

The project includes:
- **TypeScript strict mode** for type safety
- **ESLint** for code quality and consistency
- **React best practices** with functional components and hooks
- **Proper error handling** and edge cases
- **Accessible UI** with semantic HTML and ARIA attributes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development
- UI components from [React Bootstrap](https://react-bootstrap.github.io/)
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)
- Inspired by modern e-commerce shopping experiences

---

**Happy Shopping! 🛒✨**