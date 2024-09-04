// ### create element in React
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// heading is js object
const root = ReactDOM.createRoot(document.getElementById("root"));
// render converts js object to tag
root.render(heading);

// ### create nested elements in React
// <div id="parent">
// <div id="child">
// <h1>im h1</h1>
// <h2>im h2</h2>
// </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im h1"),
    React.createElement("h2", {}, "im h2"),
  ])
);

root.render(parent);

// if h1 is also in index.html this will replace the previous

// react can only be applied on small potion of your app so it library so it is library