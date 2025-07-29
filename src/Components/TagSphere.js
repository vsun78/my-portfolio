// TagSphere.js
// This component renders a rotating 3D tag cloud inspired by the spinning sphere
// seen on https://hartmans.ai.  It uses basic trigonometry to position words
// evenly on a sphere and animates them with a simple rotation.

import { useEffect, useRef } from 'react';

/**
 * A simple 3D tag sphere component. The tags prop should be an array of strings.
 * The sphere rotates continuously around the X and Y axes. Each tag is scaled
 * based on its depth (z position) and fades out slightly when further away.
 */
export default function TagSphere({ tags, radius = 150 }) {
  const containerRef = useRef(null);
  const tagRefs = useRef([]);
  // Store the initial positions of tags on the sphere so that rotations are based
  // off of a static reference rather than mutating coordinates each frame.
  const initialPositions = useRef([]);
  // Refs to track rotation angles around X and Y axes (in radians).
  const angleXRef = useRef(0);
  const angleYRef = useRef(0);
  // Refs to track automatic rotation speeds.  These can be temporarily set to
  // zero while dragging and reset on mouse up.
  const speedXRef = useRef(0.002);
  const speedYRef = useRef(0.003);
  // Drag state management.
  const isDraggingRef = useRef(false);
  const lastMouseXRef = useRef(0);
  const lastMouseYRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !tags || tags.length === 0) return;

    // Remove any existing spans (cleanup for hot reloading)
    container.innerHTML = '';
    tagRefs.current = [];
    initialPositions.current = [];

    // Create spans for each tag
    tags.forEach((text) => {
      const span = document.createElement('span');
      span.textContent = text;
      span.style.position = 'absolute';
      span.style.whiteSpace = 'nowrap';
      span.style.top = '50%';
      span.style.left = '50%';
      span.style.transformOrigin = 'center center';
      span.style.fontSize = '1.1rem';
      span.style.color = '#ccd5e0';
      container.appendChild(span);
      tagRefs.current.push({ el: span, x: 0, y: 0, z: 0 });
    });

    const total = tagRefs.current.length;
    // Distribute tags evenly on the sphere using the Fibonacci sphere algorithm
    tagRefs.current.forEach((tag, i) => {
      // Use Fibonacci sphere algorithm to compute initial x, y, z positions.
      const k = -1 + (2 * (i + 1) - 1) / total;
      const phi = Math.acos(k);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      tag.x = x;
      tag.y = y;
      tag.z = z;
      initialPositions.current.push({ x, y, z });
    });

    let reqId;
    // Default speeds used when not dragging.  These are used to reset the speeds
    // on mouse up.
    const defaultSpeedX = speedXRef.current;
    const defaultSpeedY = speedYRef.current;

    // Render loop: apply rotation angles and update element positions.
    const render = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      // Increment rotation angles by current speeds on each frame.
      angleXRef.current += speedXRef.current;
      angleYRef.current += speedYRef.current;
      // Precompute trigonometric values.
      const cosX = Math.cos(angleXRef.current);
      const sinX = Math.sin(angleXRef.current);
      const cosY = Math.cos(angleYRef.current);
      const sinY = Math.sin(angleYRef.current);

      // Iterate over tags and update positions based on rotated initial coordinates.
      tagRefs.current.forEach((tag, i) => {
        const init = initialPositions.current[i];
        // Rotate around X axis
        const y1 = init.y * cosX - init.z * sinX;
        const z1 = init.y * sinX + init.z * cosX;
        // Rotate around Y axis
        const x1 = init.x * cosY - z1 * sinY;
        const z2 = init.x * sinY + z1 * cosY;
        // Save rotated coordinates (not strictly needed but preserved for potential future usage)
        tag.x = x1;
        tag.y = y1;
        tag.z = z2;
        // Perspective projection
        const depth = 400;
        const scale = depth / (depth - z2);
        const x2d = x1 * scale + width / 2;
        const y2d = y1 * scale + height / 2;
        // Apply CSS transforms
        const el = tag.el;
        el.style.transform = `translate(-50%, -50%) translate(${x2d}px, ${y2d}px) scale(${scale})`;
        // Fade out when far away
        const opacity = Math.min(1, Math.max(0, (scale - 0.6)));
        el.style.opacity = opacity.toString();
      });
      reqId = requestAnimationFrame(render);
    };
    reqId = requestAnimationFrame(render);

    // Drag handlers
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      // Stop automatic rotation while dragging
      speedXRef.current = 0;
      speedYRef.current = 0;
      lastMouseXRef.current = e.clientX;
      lastMouseYRef.current = e.clientY;
    };
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastMouseXRef.current;
      const dy = e.clientY - lastMouseYRef.current;
      // Adjust rotation angles based on mouse movement.  Horizontal drag rotates
      // around the Y axis, vertical drag rotates around the X axis.  The scaling
      // factor determines sensitivity; tweak as desired.
      angleYRef.current += dx * 0.005;
      angleXRef.current -= dy * 0.005;
      lastMouseXRef.current = e.clientX;
      lastMouseYRef.current = e.clientY;
    };
    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        // Restore default speeds for continuous rotation
        speedXRef.current = defaultSpeedX;
        speedYRef.current = defaultSpeedY;
      }
    };
    const handleMouseLeave = handleMouseUp;

    // Attach event listeners to the container
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [tags, radius]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        // prevent text selection
        userSelect: 'none',
      }}
    />
  );
}