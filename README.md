# 🚀 DevStack

**DevStack** is a simple and interactive web application where users can explore different development skills and add their favorite skills to their personal stack. It is designed with a clean and responsive user interface for a better user experience.

## 🛠️ Technologies Used

* **React.js** – For building the user interface
* **TypeScript** – For type-safe development
* **Tailwind CSS** – For styling and responsive design
* **React Icons** – For using icons in the application
* **JSON** – For storing and loading skill data

## ✨ Features

### 1. 🔍 Explore Skills

Users can explore different development skills through attractive skill cards.

### 2. ➕ Add Skills to Your Stack

Users can add their preferred skills to **Your Stack** by clicking the **Add to Stack** button.

### 3. 🗑️ Manage Your Stack

Users can view their selected skills and remove any skill from their stack whenever they want.

---

# 🧠 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

It makes React code easier to read and helps us create UI components easily.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data that belongs to a component and can change over time.

**Example:**

```jsx
// Props
<SkillCard card={card} />

// State
const [selectedCards, setSelectedCards] = useState([]);
```

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data inside a React component.

In this project, I used `useState` to store the **selected skill cards**.

```jsx
const [selectedCards, setSelectedCards] = useState([]);
```

When a user adds or removes a skill, the state is updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component.

I used it to **load the skill data from the JSON file when the component loads**.

It helps make sure the data is fetched at the right time.

```jsx
useEffect(() => {
    fetch("/skills.json")
        .then(res => res.json())
        .then(data => setCards(data));
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added, or removed. This makes updating the UI more efficient.

```jsx
{cards.map(card => (
    <SkillCard
        key={card.name}
        card={card}
    />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI based on a condition.

In this project, I used it to show an empty message when there are no selected cards.

```jsx
{selectedCards.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    <StackCards selectedCards={selectedCards} />
)}
```

If there are no selected cards, the empty stack message is shown. Otherwise, the selected cards are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

```jsx
<SkillCard card={card} />
```

A child can send data back to the parent by calling a **function passed through props**.

```jsx
<SkillCard
    card={card}
    setSelectedCards={setSelectedCards}
/>
```

Here, the parent gives the child the `setSelectedCards` function. The child can call it to update the parent's state.

---

## 📌 Project Purpose

This project helped me practice:

* React Components
* TypeScript
* Props and State
* `useState`
* `useEffect`
* Conditional Rendering
* `.map()` and `key`
* Parent-Child Data Communication
* JSON Data Handling
* Tailwind CSS
* React Icons

---

### 👨‍💻 Developed By

**Billal Hossain**

> Built as a React project to practice modern frontend development concepts.
