# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a JS library that is used to build front end apps and UI. React solves effiency problems by allowing developers to write reusable code quicker and easier.

1. Describe component state.

    Component state holds information about the component thet can then be changed or updated. 

1. Describe props.

Props are information that is held in state and can be passed down from inside one component to another. They cannot be changed and are read-only.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A component side effect is anything that is affecting something outside the scope of the function that is being executed. To sync effects with state/prop changes, we pass in a decependency array as a 2nd argument of the effect hook.