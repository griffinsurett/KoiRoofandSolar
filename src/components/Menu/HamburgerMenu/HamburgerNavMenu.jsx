import React, { Suspense, lazy, useState, useEffect } from "react";

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

  // Dispatch a CustomEvent whenever menuOpen changes
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("react-hamburger-toggle", { detail: { isOpen: menuOpen } })
    );
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    if (document.activeElement) {
      document.activeElement.blur();
    }
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
