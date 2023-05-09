const h2 = React.createElement(
  "h2",
  { className: "heading2", id: "heading2" },
  "I am React Heading 2"
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(h2);

//nested elements && children

const div = React.createElement("div", {}, [
  React.createElement("h1", {}, "I am inside div"),
  React.createElement("h2", {}, "I am inside div"),
]);
const r = ReactDOM.createRoot(document.getElementById("div"));
r.render(div); // this will replace the contents of the div

//JSX
