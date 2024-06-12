// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from react"
// );
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "Helloooo")
//   )
// );
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Helloooo"),
    React.createElement("h2", { id: "heading2" }, "Hooo"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
