### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is the most popular front-end framework for JavaScript development. React makes it easier to build modular applications.

- What is Babel?
  It's a JavaScript compiler that transforms new JavaScript syntax and features into a form that is compatible with older environments, ensuring that the code runs smoothly across different browsers and versions.

- What is JSX?
  JSX is like HTML embedded in JavaScript in return.

- How is a Component created in React?
  Component is a functions that knows how to render itself into HTML.

- What are some difference between state and props?
  State is a data structure that holds information that may change over the lifecycle of the component. It is managed within the component. Props are read-only data passed from a parent component to a child component.

- What does "downward data flow" refer to in React?
  This means that a parent component can pass data to its child components through props, but not the other way around.

- What is a controlled component?
  A controlled component is a form element (such as an input, textarea, or select) that is controlled by React state.

- What is an uncontrolled component?
  Uncontrolled components rely on the DOM to manage their own state. They use ref to access the form elements and read their values directly from the DOM.

- What is the purpose of the `key` prop when rendering a list of components?
  It helps React identify which items have changed, been added, or removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  The array can change, hence the keys will change.

- Describe useEffect. What use cases is it used for in React components?
  useEffect is a hook in React that allows you to perform side effects in function components. It's used for many cases, for example with a timer, data fetching, DOM.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  It returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook. The object persists across renders (so it’s like a local variable, but independent of state). Mutating the object does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
  Ref would be used with accessing DOM, timers. Ref wouldn't be used with making changes in the DOM (toggle classes, set text, etc).

- What is a custom hook in React? When would you want to write one?
  custom hook in React is a reusable function that allows you to extract and share logic between different components. You can make hooks to abstract logic, handle repeated tasks, generate your own JSX.
