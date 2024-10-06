import React, { useState } from 'react';
import RichTextEditor from './components/RichTextEditor';
import DrawingCanvas from './components/DrawingCanvas';
import './App.css'
function App() {
  const [textContent, setTextContent] = useState(''); 
  return (
    <div className="app-container">
      <h1>Note Taking App</h1>

      <div className="note-container">
      
        <div className="note-section editor-section">
          <h2>Text Editor</h2>
          <RichTextEditor value={textContent} setValue={setTextContent} />
        </div>
        <div className="note-section canvas-section">
          <DrawingCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;
