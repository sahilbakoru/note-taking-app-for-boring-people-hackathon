import React, { useState } from 'react';
import { Tldraw } from '@tldraw/tldraw';
import 'tldraw/tldraw.css'
// import '@tldraw/tldraw/editor.css'; 
import './DrawingCanvas.css'; 

const DrawingCanvas = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="drawing-container">
      <div className="drawing-header">
        <h2>Drawing Canvas</h2>
      </div>
      <div className="drawing-content">
        <div className="tldraw-wrapper">
          <Tldraw onMount={() => setIsLoaded(true)} />
        </div>
        {!isLoaded && <p>Loading drawing tools...</p>}
      </div>
    </div>
  );
};

export default DrawingCanvas;
