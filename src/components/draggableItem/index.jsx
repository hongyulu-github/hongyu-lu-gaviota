import { useEffect, useRef, useState } from "react";

function DraggableItem({ child, setDraggedItem }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const itemRef = useRef();

  useEffect(() => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setPosition({ x: rect.left, y: rect.top });
    }
  }, []);

  const handleDragStart = (event) => {
    setDraggedItem(event.target);
    event.dataTransfer.setData(
      "application/react-drag-position",
      JSON.stringify({
        offsetX: event.nativeEvent.offsetX,
        offsetY: event.nativeEvent.offsetY,
      })
    );
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const data = JSON.parse(
      event.dataTransfer.getData("application/react-drag-position")
    );
    const newX = event.clientX - data.offsetX;
    const newY = event.clientY - data.offsetY;

    setPosition({ x: newX, y: newY });
  };

  return (
    <div
      id={child.id}
      ref={itemRef}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
      }}
    >
      {child}
    </div>
  );
}

export default DraggableItem;
