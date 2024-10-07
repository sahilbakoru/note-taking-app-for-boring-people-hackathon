// src/components/RichTextEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, setValue }) => {
  const handleChange = (content) => {
    setValue(content); 
  };

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
