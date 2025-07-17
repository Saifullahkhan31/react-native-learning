# useEffect Hook Notes

## Basic Syntax:
`useEffect(() => { `   
`// code to be executed `  
`}, [dependencies]);`

When to use `useEffect`:
- When you need to perform side effects (e.g., API calls, DOM mutations, timers)
- When you need to update the component's state based on external changes
- When you need to clean up after the component is unmounted

#### Use

* Whe can omit the use of dependency array but in that case the useEffect will run after every render of the component which will cause infinite loops and other issues.

e.g: `useEffect(() => { // code to be executed });`

**So what if we want to run the effect only once?** In that case, we can pass an empty dependency array like this:

e.g: `useEffect(() => { // code to be executed }, []);` 

with nothing in the dependency array, the effect will run only once when the component mounts.

**What if we dont want to run the effect only once? and also not want to run it after every render?** That means when someone wants to run the effect for only one state. In that case we can pass a dependency array with the values that we want to watch for changes. For example, if we want to run the effect every time the `count` state changes, we can pass `[count]` as the dependency array. The effect will run every time the `count` state changes. We can use it like this:

`useEffect(() => { // code to be executed }, [count]);`