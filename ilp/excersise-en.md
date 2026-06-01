# Individual Learning Phase: React 19 – Components, Props, and Dynamic Lists

## Your Goal

You will build a small React 19 application for a product catalog. In doing so, you will break down the interface into nested components, pass data via Props, render lists with `map()`, and pay attention to meaningful `key` Props. In the end, you will have a reusable structure with which you can display multiple product lists.

## What you need

- A running React 19 project
- An editor, e.g., VS Code
- A browser
- Basic knowledge of JSX, Components, and `useState`
- Optional: an already created Vite project as a starting point

## Schedule

- 10 minutes: Check project and prepare data
- 20 minutes: Build component hierarchy
- 25 minutes: Render first list with `map()`
- 25 minutes: Create reusable card component
- 20 minutes: Add second list view
- 20 minutes: Extend, review, clean up

## Basic Tasks

### Task 1:

Prepare product data **Goal:** You will create a realistic data basis that you can later use to test lists and components.

**Work Order:**
In your `App` component or in a separate file, create an array with at least 6 products. Each product should have at least these properties:

- `id`
- `name`
- `price`
- `category`
- `inStock`
- `description`

Organize the data such that there are at least 2 categories, e.g., "Accessories" and "Hardware". Store the product list in `state` or initially pass it as a constant data structure.

**Expected Result / Desired State:**
You have a clean product data basis that can be directly processed in JSX. Each element has a unique `id`.

---

### Task 2:

Create component hierarchy **Goal:** You will structure the application into several nested components.

**Work Order:**
Plan and create the following components:

- `App`
- `PageHeader`
- `ProductSection`
- `ProductList`
- `ProductCard`

First, build a basic layout:

- `App` contains the overall data
- `PageHeader` displays a title and a short subtitle
- `ProductSection` encapsulates an area with a heading
- `ProductList` is responsible for rendering the list
- `ProductCard` displays the data of a single product

Use the components directly in JSX and nest them appropriately.

**Expected Result / Desired State:**
Your application consists of several clearly separated components that are composed together. In the browser, at least one structured page with a heading and placeholders or initial data is visible.

---

### Task 3:

Pass data from parent to child **Goal:** You will pass product data via Props through the component hierarchy.

**Work Order:**
Pass the product list from `App` to `ProductSection` and from there to `ProductList`. Ensure that the data is not redefined in every component. Additionally, pass a title for the section, e.g., "All Products".

In `ProductList`, use the passed data to render the entries with `map()`. Pass each product further to `ProductCard`.

**Expected Result / Desired State:**
Data flows clearly from top to bottom through your components. `ProductList` dynamically renders entries from Props, and `ProductCard` receives exactly the data for a single product.

---

### Task 4:

Implement reusable product card **Goal:** You will build a component that can be used multiple times for different products.

**Work Order:**
Implement `ProductCard` to display at least these contents:

- Product name
- Category
- Price
- Short description
- Stock status, e.g., "In Stock" or "Out of Stock"

Use Props instead of fixed text. If necessary, add small sub-elements within the card, e.g., a separate display for the status. Ensure that the same `ProductCard` works for all products without needing adjustments.

**Expected Result / Desired State:**
Each product is displayed in the same reusable card structure. The content differs only via the Props.

---

### Task 5:

Display multiple lists with the same structure **Goal:** You will reuse existing components multiple times and show that your solution is reusable.

**Work Order:**
Create a second `ProductSection` that does not show all products, but only a subset, e.g.:

- only products that are in stock
- only products of a specific category
- only products below a certain price

Prepare the filtered list in `App` and pass it to the same components as in the first section. Use the same `ProductList` and the same `ProductCard` for both sections.

**Expected Result / Desired State:**
Two separate areas are visible in the browser, both using the same reusable components but displaying different data.

## Extension Tasks

### Extension Task 1: Handle empty lists gracefully

**Goal:** You will make your list component more robust.

**Work Order:**
Extend `ProductList` so that if the list is empty, it doesn't just show nothing. Instead, display an easily readable message, e.g., "No products found". Test this with a deliberately empty section.

**Expected Result / Desired State:**
Your list component cleanly displays both filled and empty states.

---

### Extension Task 2: Additional reusable status component

**Goal:** You will further break down your interface into small, clearly defined building blocks.

**Work Order:**
Extract the display of the stock status from `ProductCard` into its own component, e.g., `StockBadge`. Pass only the necessary information via Props and integrate the new component into `ProductCard`.

**Expected Result / Desired State:**
`ProductCard` has become more organized, and the status display is implemented as an independent, reusable component.

---

### Extension Task 3: Check and improve keys

**Goal:** You will correctly use `key` Props and avoid common list errors.

**Work Order:**
Review your `map()` output in `ProductList`. Ensure that each list item receives a stable, unique `key`. Do not use the array index if a unique `id` is available. Document in a short comment directly in the code why you chose this `key`.

**Expected Result / Desired State:**
Each dynamically rendered entry has a meaningful `key`, and your list structure is technically clean.

## Important Notes

- Work step-by-step and test in the browser after each task.
- Ensure that you manage data centrally only once and then pass it via Props.
- Always use `map()` for lists.
- Assign stable `key` Props to list elements based on a unique `id`.
- Keep components small and clearly responsible.
- If you use CSS, keep the styling simple and focus on the React structure.
- Name Props and components clearly and consistently.

## Reflection Questions

- What data is stored in `App`, and why is that sensible?
- At which points do you pass data from parent to child components?
- Which component in your solution is most reusable?
- Why is `map()` useful for dynamic rendering in React?
- Why is the `key` Prop important for lists?
- How do you recognize that your component hierarchy is clear and maintainable?