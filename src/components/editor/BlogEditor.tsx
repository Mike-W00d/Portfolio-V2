"use client";

import MDEditor from "@uiw/react-md-editor";

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogEditor({ value, onChange }: BlogEditorProps) {
  return (
    <MDEditor
      value={value}
      onChange={(val) => onChange(val || "")}
    />
  );
}
