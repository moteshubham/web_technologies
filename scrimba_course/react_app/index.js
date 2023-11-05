ReactDOM.render(
  <ul>
    <li>mote</li>
    <li>sukale</li>
  </ul>,
  document.getElementById("root")
);

// const h1 = document.createElement("h1");
// h1.textContent = "dhoooooooooooooom";
// h1.className = "header";
// document.getElementById("root").append(h1);

const navbar = (
  <nav>
    <h1>Mote chi website</h1>
    <ul>
      <li>pricing</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  </nav>
);


ReactDOM.render(navbar, document.getElementById("root"))