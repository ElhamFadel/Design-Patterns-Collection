import useExpanded from "./useExpanded";

const information = [
  {
    header:"title1",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lorem convallis, elementum risus non, ornare leo. Maecenas ut urna at enim pretium malesuada ac eget nisi."
  },
  {
    header:"title2",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lorem convallis, elementum risus non, ornare leo. Maecenas ut urna at enim pretium malesuada ac eget nisi."
  },
  {
    header:"title3",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lorem convallis, elementum risus non, ornare leo. Maecenas ut urna at enim pretium malesuada ac eget nisi."
  }
]

function App() {
  const {expanded,toggleExpanded} = useExpanded();
  return (
    <div className="App">
      Hiiii
    </div>
  );
}

export default App;
