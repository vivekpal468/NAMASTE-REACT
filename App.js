/*
*<div id="parent">
    <div id = "child1">
      <h1>I am an heding</h1>
    </div>
     <div id = "child2">
      <h1>I am  heading 2</h1>
    </div>
 </div>
*
*
*
*
*
*
*
*/

const heading = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"} ,React.createElement("h1",{},"I am an heading"), 
React.createElement("div",{id:"child2"},React.createElement("h1",{}, "I am also an heading"))
              )
        ]
)

console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //Render Method is using for converting the React Element(javascript Object) and put into the DOM(Html Document)
