import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkItem = links.map(link => {
    const hashLink = "#" + link
    return (
      <a key={link} href={hashLink}>{link}</a>
    )
  })

  return <nav>
    {linkItem}
  </nav>;
}

export default NavBar;
