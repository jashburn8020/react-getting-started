# React

- A JavaScript library for building user interfaces
- Used as a base in the development of single-page or mobile applications

## Notable Features

- **Components**
  - React code is made of entities called components
  - can be rendered to a particular element in the DOM using the React DOM library
  - when rendering a component, one can pass in values that are known as "props"
  - 2 primary ways of declaring components:
    - **functional components**
      - are declared with a function that then returns some JSX
    - **class-based components**
      - declared using ES6 classes
      - also known as "stateful" components - their state can hold values throughout the component and can be passed to child components through props
- **Virtual DOM**
  - an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM
  - allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change
- **Lifecycle methods**
  - hooks that allow execution of code at set points during a component's lifetime
  - `shouldComponentUpdate`
    - allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required
  - `componentDidMount`
    - called once the component has "mounted" (the component has been created in the user interface, often by associating it with a DOM node)
    - commonly used to trigger data loading from a remote source via an API
  - `componentWillUnmount`
    - called immediately before the component is torn down or "unmounted"
    - commonly used to clear resource demanding dependencies to the component that will not simply be removed with the unmounting of the component
  - `render`
    - the most important lifecycle method and the only required one in any component
    - usually called every time the component's state is updated, which should be reflected in the user interface
- **JSX**
  - JavaScript XML, an extension to the JavaScript language syntax
- **React Hooks**
  - functions that let developers "hook into" React state and lifecycle features from function components
  - Hooks let you use React without classes
- **Flux architecture**
  - to support React's concept of unidirectional data flow
  - is sometimes expressed as "properties flow down, actions flow up"
  - features **actions** which are sent through a central **dispatcher** to a **store**, and changes to the store are propagated back to the **view**
  - propagation is accomplished through component properties
  - React component should not directly modify any props passed to it
    - should be passed callback functions that create actions which are sent by the dispatcher to modify the store

# Setup and Installation

- Create React App
  - create a live development server
  - use Webpack to automatically compile React, JSX, and ES6
  - auto-prefix CSS files
  - use ESLint to test and warn about mistakes in the code
- Install nodeenv
  - `sudo pip install nodeenv`
- Create project directory
- Create new Node.js environment
  - go to project directory
  - `nodeenv -n 12.16.1 env`
  - current Node.js LTS version
- Activate environment
  - `. env/bin/activate`
  - deactivate environment using `deactivate_node`
- `npx create-react-app my-app` or `npm init react-app my-app`
- Move all files and directories in `my-app`, including `.git` and `.gitignore`, up 1 level
- Start the project
  - `npm start`

# Sources

- "Getting Started with React - An Overview and Walkthrough Tutorial." <https://www.taniarascia.com/getting-started-with-react/>.
- "React (web framework)." <https://en.wikipedia.org/wiki/React_(web_framework)>.
