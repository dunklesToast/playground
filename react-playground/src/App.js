import React from "react";

const elements = [
  {
    text: 'abc',
    id: 1
  },
  {
    text: 'def',
    id: 2
  },
  {
    text: 'ghi',
    id: 3
  }
]

const App = () => {
  return (
  <EditorProvider>
    {
     elements.map((el) => {
    return <p data-elementId={el.id}>{el.text}</p>
  })
    }
  </EditorProvider>
      )
};


const EditorProvider = ({ children }) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, { onClick: () => alert(child.props['data-elementId']), style: {cursor: 'pointer'} });
  });
}

export default App;
