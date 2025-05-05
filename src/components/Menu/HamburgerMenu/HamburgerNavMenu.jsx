// src/components/Menu/HamburgerMenu/HamburgerNavMenu.jsx
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";

// Lazy load the Hamburger Menu Container and Hamburger Button
const HamburgerMenuContainer = lazy(() => import("./HamburgerMenuContainer.jsx"));
const HamburgerButton = lazy(() => import("./HamburgerIcon.jsx"));

export default function HamburgerNavMenu({
  items,
  hamburgerTransform = true,
  breakpoint,
  menuItem,
  submenuItem,
  isHierarchical,
  listClass,
  hamburgerMenu, // additional hamburger customization options
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isFirstRender = useRef(true);

  // When we programmatically close (menuOpen → false), dispatch a native change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!menuOpen) {
      const checkbox = document.getElementById("hamburger-toggle");
      if (checkbox) {
        checkbox.checked = false;
        const evt = new Event("change", { bubbles: true });
        checkbox.dispatchEvent(evt);
      }
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    if (document.activeElement) document.activeElement.blur();
  };

  return (
    <>
      <Suspense fallback={<div>Loading Menu...</div>}>
        <HamburgerButton
          isOpen={menuOpen}
          onChange={toggleMenu}
          hamburgerTransform={hamburgerMenu?.hamburgerIconTransform ?? true}
          className={hamburgerMenu?.hamburgerIconClass}
        />
        <HamburgerMenuContainer 
          items={items} 
          isOpen={menuOpen} 
          onClose={closeMenu}
          breakpoint={breakpoint}
          menuItem={menuItem}
          submenuItem={submenuItem}
          isHierarchical={isHierarchical}
          listClass={listClass}
          hamburgerMenu={hamburgerMenu}
        />
      </Suspense>
    </>
  );
}
