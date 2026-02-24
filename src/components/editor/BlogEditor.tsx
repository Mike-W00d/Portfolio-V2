"use client";

import MDEditor from "@uiw/react-md-editor";

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function BlogEditor({ value, onChange, className }: BlogEditorProps) {
  return (
    <div className={className} data-color-mode="light">
      <MDEditor
        value={value}
        onChange={(val) => onChange(val || "")}
        height="100%"
        previewOptions={{
          components: {
            img: ({ src, ...props }) => {
              if (!src) return null;
              return <img src={src} {...props} />;
            },
          },
        }}
      />
    </div>
  );
}
