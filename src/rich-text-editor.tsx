import React from "react";

export interface RichTextEditorProps {
  defaultValue: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ defaultValue }) => (
  <div contentEditable>{defaultValue}</div>
);

export default RichTextEditor;
