import React, { useRef, useState, useEffect } from 'react'

function useHover(ref) {
  const [isHovering, setIsHovering] = useState(false);
  const on = () => setIsHovering(true);
  const off = () => setIsHovering(false);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    return () => {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    }
  }, [])
  return isHovering;
}


export default function Hover() {
  const ref = useRef();
  const isHovering = useHover(ref);
  console.log(isHovering);
  return (
    <div ref={ref} style={{ width: 300, height: 300, background: isHovering ? "red" : "blue"}}>
      <button onClick={()=> console.log(ref.current)}>Click me</button>
    </div>
  )
}
