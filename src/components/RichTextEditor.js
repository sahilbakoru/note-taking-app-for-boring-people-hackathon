// src/components/RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, setValue }) => {
  const handleChange = (content) => {
    setValue(content); // Update parent component with text content
  };

  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
