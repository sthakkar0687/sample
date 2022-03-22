
import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavMenus";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/newpage" activeStyle>
                        First Page
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;