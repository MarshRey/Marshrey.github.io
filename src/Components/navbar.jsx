import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <h2 style={styles.logo}>My Portfolio</h2>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/about" style={styles.link}>About</Link></li>
                <li><Link to="/projects" style={styles.link}>Projects</Link></li>
                <li><Link to="/skills" style={styles.link}>Skills</Link></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%", /* Ensures navbar fits the screen */
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#333",
        padding: "10px 20px",
        color: "white",
        zIndex: "1000",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        flexWrap: "wrap", /* Makes sure it adjusts for small screens */
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "0",
        margin: "0",
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        padding: "8px 12px",
        transition: "0.3s",
        display: "block",
    },
    linkAfterSkills: {
        marginRight: "20px", // Add extra margin after the Skills link
    }
};

export default Navbar;