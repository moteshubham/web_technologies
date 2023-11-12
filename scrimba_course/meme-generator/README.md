# React Props vs State

### 1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later).

---

### 2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.

---

### 3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).

---

### 4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.

----------
# best practice
```javascript
    const [count, setCount] = React.useState(0)
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        setCount(prevCount => prevCount + 1)
    }
```

## read
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
   1.  New value of state (setCount(42))
   2. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

## ShortHands

  ### 1. for boolean
 ```javascript
 function changeMind() {
        setIsGoingOut(prevState => !prevState) //this line
    }
 ```

 # Conditional rendering

 ### 1. What is "conditional rendering"?
 When we want to only sometimes display something on the page
based on a condition of some sort


 ### 2. When would you use &&?
When you want to either display something or NOT display it


 ### 3. When would you use a ternary?
When you need to decide which thing among 2 options to display


 ### 4. What if you need to decide between > 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement