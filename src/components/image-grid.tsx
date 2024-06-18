"use client";

import { SearchResults } from "@/app/(Pages)/gallery/page";
import { ReactNode, useState, useEffect, useCallback } from "react";

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResults[];
  getImage: (imageData: SearchResults) => ReactNode;
}) {
  // State to track the number of columns based on screen size
  const [columns, setColumns] = useState(1);
  const [columnImages, setColumnImages] = useState<Array<SearchResults[]>>([]);

  // Helper to split images into columns when the number of columns changes
  const distributeImagesIntoColumns = useCallback(() => {
    const newColumns = Array.from({ length: columns }, () => [] as SearchResults[]);
    images.forEach((image, idx) => {
      newColumns[idx % columns].push(image);
    });
    setColumnImages(newColumns);
  }, [columns, images]);

  // Update the number of columns based on the current screen width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setColumns(4); // Large devices (1024px and above)
      } else if (width >= 640) {
        setColumns(2); // Medium devices (640px - 1024px)
      } else {
        setColumns(1); // Small devices (below 640px)
      }
    };

    updateColumns(); // Set initial columns on mount

    const debouncedResize = debounce(updateColumns, 100); // Debounced resize handler
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize); // Cleanup on unmount
  }, []);

  // Distribute images into columns when the column count changes
  useEffect(() => {
    distributeImagesIntoColumns();
  }, [columns, distributeImagesIntoColumns]);

  // Helper function to debounce resize event
  function debounce(fn: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {columnImages.map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {column.map(getImage)}
        </div>
      ))}
    </div>
  );
}