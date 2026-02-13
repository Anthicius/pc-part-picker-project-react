# React PC Part Picker (Performance Optimized)

A high-performance PC configuration tool built to demonstrate **Referential Integrity** and **Render Optimization** in React. This project showcases how to prevent unnecessary re-renders in a complex component tree using `React.memo`, `useMemo`, and `useCallback`.

---

## Features

* **Normalized State Architecture:** Manages selected parts using an Object/Map structure (`{ cpu: null, gpu: null }`) instead of an Array. This enables **O(1)** lookup times for selection logic, replacing common O(n) array methods.
* **Expensive Calculation Memoization:** Uses `useMemo` to cache the "Total Price" calculation. The math only runs when parts actually change, completely ignoring unrelated state updates (like Theme toggling).
* **Stable Event Handlers:** Implements `useCallback` to freeze function references. This allows child components to be strictly memoized because the function prop doesn't change identity between renders.
* **Render Control:** Wraps individual `PartCard` components in `React.memo`. This guarantees they do not re-render when the global "Dark Mode" theme is toggled, protecting the DOM from unnecessary updates.
* **Impossible States Prevention:** Enforces "One Part Per Category" logic mechanically through state structure rather than fragile validation checks.
* **Global Theme Context:** A CSS Variable-based Dark/Light mode that persists across the entire application without causing complex layout shifts or prop drilling.

---

## Architectural Concepts Used

### 1. Referential Integrity
This project solves the "Referential Equality" problem where `{} === {}` is `false`. By using `useCallback` and `useMemo`, we ensure that objects and functions remain stable across renders. This prevents the "Domino Effect" where a parent render forces all children to re-render simply because props were recreated.

### 2. The "Backdoor" Pattern (Functional State Updates)
Demonstrates how to use the functional updater form of state setters (`setState(prev => ...)`) to remove dependencies from `useCallback` arrays. 
* **The Win:** The function is created **once** on mount and never recreated.
* **The Result:** We solve the "Stale Closure" problem permanently without needing to track state variables in dependency arrays.

### 3. Separation of Concerns (Visual vs. Logical)
* **App.jsx:** Manages Global State, Theme, and Handler Logic.
* **ComputerParts.jsx:** Handles the Grid Layout and Prop Passing.
* **PartList.jsx:** Manages Category Column logic and list mapping.
* **PartCard.jsx:** A Pure Component (Memoized) responsible strictly for presentation.

---

## Tech Stack

* **Core:** React 18+
* **Hooks:** `useState`, `useEffect`, `useMemo`, `useCallback`
* **Optimization:** `React.memo`
* **Styling:** CSS Variables, CSS Grid, Flexbox
* **Tooling:** Vite

---

<img width="1788" height="864" alt="image" src="https://github.com/user-attachments/assets/3fb86fb5-7a71-4cc2-ab10-bc927924db02" />
<img width="1788" height="864" alt="image" src="https://github.com/user-attachments/assets/f5151e5a-9eb4-4d89-aca6-87d44063891a" />
