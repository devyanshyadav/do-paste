import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const DevDropDown = ({ togButton = "", children = "", setExternal=()=>{} }) => {
  const [tog, setTog] = useState(false);
  const [dropPosition, setDropPosition] = useState({ top: "", left: "" });
  const toggleRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !toggleRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setTog(false);
      }
    };

    const handleScrollOrResize = () => {
      if (tog) {
        setTog(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [tog]);

  useEffect(() => {
    if (tog && toggleRef.current) {
      const toggleRect = toggleRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current
        && dropdownRef.current.getBoundingClientRect()
        ;
      const newPosition = {
        top: toggleRect.bottom, // Position 10px below the toggle button
        left: toggleRect.left + toggleRect.width / 2 - dropdownRect.width / 2, // Center horizontally
      };
      setDropPosition(newPosition);
    }

    setExternal(tog);
  }, [tog]);

  return (
    <section className="w-fit">
      <div
        ref={toggleRef}
        onClick={() => setTog(!tog)}
        className="cursor-pointer"
        contentEditable={false}
      >
        {togButton}
      </div>
      {tog &&
        createPortal(
          <div
            ref={dropdownRef}
            onClick={() => setTog(false)}
            style={{
              position: "fixed",
              top: `${dropPosition.top}px`,
              left: `${dropPosition.left}px`,
            }}
            className="fixed"
          >
            {children}
          </div>,
          document.body
        )}
    </section>
  );
};

export default DevDropDown;
