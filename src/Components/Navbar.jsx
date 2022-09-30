import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  {
    path: "/",
    title: "HOME"
  },
  {
    path: "/about",
    title: "ABOUT"
  },
  {
    path: "/contact",
    title: "CONTACT"
  },
  {
    path: "/login",
    title: "LOGIN"
  },
  {
    path: "/users",
    title: "USERS"
  }
];

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
        padding: "20px",
        alignItems: "center",
        background: "teal"
      }}
    >
      {links.map((link) => {
        return (
          <NavLink
            key={link.path}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
            to={link.path}
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
