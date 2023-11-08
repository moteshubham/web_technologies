import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"


function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))



// ReactDOM.render(
//   <ul>
//     <li>mote</li>
//     <li>sukale</li>
//   </ul>,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "dhoooooooooooooom";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const navbar = (
//   <nav>
//     <h1>Mote chi website</h1>
//     <ul>
//       <li>pricsdfing</li>
//       <li>about</li>
//       <li>contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root")) // this is react 17 way
// ===================================
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)  = this is react 18 syntax
// =========================================
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(navbar);
// // =========================================


// const sample = (
//   <div>
//     <h1>My awesome website in React</h1>
//     <h3>Reasons I love React</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's declarative</li>
//       <li>It's a hireable skill</li>
//       <li>It's actively maintained by skilled people</li>
//     </ol>
//   </div>
// );

// document.getElementById("root").append(sample);
// =======================================================================
// new project
// import React from "react"
// import ReactDOM from "react-dom"

// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))



// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.