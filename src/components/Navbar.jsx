// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav style={styles.navbar}>
//       <Link to="/" style={styles.link}>Home</Link>
//       <Link to="/checkout" style={styles.link}>Checkout</Link>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "10px 20px",
//     backgroundColor: "#333",
//     color: "#fff",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#fff",
//     margin: "0 10px",
//   },
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Trims guide to gains</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "top",
    padding: "10px 20px",
    backgroundColor: "#1a1a2e",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#f9f9f9",
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#f9f9f9",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s",
  },
};

export default Navbar;
