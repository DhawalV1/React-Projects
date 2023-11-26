const parent = React.createElement(
    "div",{id:"parent"},
    [React.createElement(
        "div",{id:"child1"},
        [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h1",{},"I am an h2 tag")]
    ),React.createElement(
        "div",{id:"child2"},
        [React.createElement("h1",{},"I am an h3 tag"),React.createElement("h1",{},"I am an h4 tag")]
    )]
);
const heading = React.createElement("h1",{id:"heading"}, "Hello World From React");


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

root.render(heading);

root.render(parent);