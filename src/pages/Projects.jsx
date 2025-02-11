import React, { useState } from "react";

const projectsList = [
    { 
        name: "Portfolio Website", 
        github: "https://github.com/MarshRey/PersonalRoadmapWebsite", 
        tags: ["React", "Web"], 
        description: "A personal portfolio built using React." 
    },
    { 
        name: "Solar System", 
        github: "https://github.com/MarshRey/SolarSystem", 
        tags: ["JavaScript", "Web"], 
        description: "A Solar system simulation using JavaScript and HTML5 Canvas." 
    },
    { 
        name: "Ant Simulation", 
        github: "https://github.com/MarshRey/AntsSimulation", 
        tags: ["JavaScript", "Web"], 
        description: "A website siumulating ant behavior." 
    },
    { 
        name: "EECS445-Project1", 
        github: "https://github.com/MarshRey/p1-445", 
        tags: ["MachineLearning", "AI", "Python"], 
        description: "A machine learning project that focuses on extracting meaningful features from ICU patient data" 
    },
    { 
        name: "EECS445-Project2", 
        github: "https://github.com/MarshRey/EECS445Project2", 
        tags: ["MachineLearning", "AI", "Python"], 
        description: "A machine learning project that focuses on creating a convolutional neural network to classify images."
    },
    { 
        name: "EECS370-lab1", 
        github: "https://github.com/MarshRey/EECS370-lab1.git", 
        tags: ["C", "Bitwise"], 
        description: "Bitwise operations in C, focusing on masking and shifting."
    },
    { 
        name: "EECS370-lab2", 
        github: "https://github.com/MarshRey/EECS370-lab2.git", 
        tags: ["C", "Bitwise"], 
        description: "Counting the number of 1s in a 32-bit integer using bitwise operations."
    },
    { 
        name: "EECS370-Project3", 
        github: "https://github.com/MarshRey/EECS370-p3.git", 
        tags: ["C", "Processor"], 
        description: "A pipelined processor simulator that emulates CPU pipeline behavior."
    },
    { 
        name: "EECS370-Project4", 
        github: "https://github.com/MarshRey/EECS370-p4.git", 
        tags: ["C", "Cache"], 
        description: "A cache simulator for the LC-2K architecture, including an assembler and simulator."
    },
    { 
        name: "EECS485-Project5", 
        github: "https://github.com/MarshRey/EECS485P5", 
        tags: ["Map-Reduce", "Search Engine", "Python"], 
        description: "A map reduce program to build a search engine for wikipedia."
    },
    { 
        name: "EECS493-Project1", 
        github: "https://github.com/MarshRey/eecs493assignment2", 
        tags: ["GameDev", "Web", "JavaScript"], 
        description: "A simple webpage simulating a game using node.js event handlers."
    },
    { 
        name: "EECS485-Project1", 
        github: "https://github.com/MarshRey/p1-insta485-static", 
        tags: ["Web", "Python"], 
        description: "Construction of a static web page simulating instagram."
    },
    { 
        name: "EECS445-Project1", 
        github: "https://github.com/MarshRey/p1-445", 
        tags: ["Convolutional Neural Network", "AI", "Python"], 
        description: "This project is focused on implementing and evaluating various machine learning models and techniques for classification tasks."
    },
    { 
        name: "EECS445-Project2", 
        github: "https://github.com/MarshRey/EECS445Project2", 
        tags: ["Convolutional Neural Network", "AI", "Python"], 
        description: "This project focuses on implimenting a convolutional neural network to classify images."
    },
    { 
        name: "EECS485-Project2", 
        github: "https://github.com/MarshRey/p2-485", 
        tags: ["Web", "JavaScript", "SQL", "Python"], 
        description: "A web application simulating a instagram dynamically using SQL."
    },
    { 
        name: "EECS485-Project3", 
        github: "https://github.com/MarshRey/p3-insta485-clientside", 
        tags: ["Web", "JavaScript", "SQL", "Python"], 
        description: "A deployable website to Amazon Web Services that functions similarly to a modern social media platform."
    },
    { 
        name: "Google Chrome Tab Organizer Extension", 
        github: "https://github.com/MarshRey/ChromeTabOrganizer", 
        tags: ["Web", "JavaScript", "Chrome Extension"], 
        description: "A chrome extension to color tabs for organization"
    },
    { 
        name: "Google Chrome Tab Organizer Extension", 
        github: "https://github.com/MarshRey/ChromeTabOrganizer", 
        tags: ["Web", "JavaScript", "Chrome Extension"], 
        description: "A chrome extension to group tabs for organization"
    },
    { 
        name: "Google Chrome Tab Color Changer Extension", 
        github: "https://github.com/MarshRey/Change-My-Background", 
        tags: ["Web", "JavaScript", "Chrome Extension"], 
        description: "A chrome extension to group tabs for organization"
    },
];

function Projects() {
    const [searchTag, setSearchTag] = useState("");

    const filteredProjects = projectsList.filter((project) =>
        searchTag ? project.tags.includes(searchTag) : true
    );

    return (
        <div style={styles.container}>
            {/* Move search bar to the top */}
            <div style={styles.searchContainer}>
                <h1>My Projects</h1>
                <label>Filter by Tag: </label>
                <select onChange={(e) => setSearchTag(e.target.value)} style={styles.select}>
                    <option value="">All</option>
                    <option value="React">React</option>
                    <option value="Python">Python</option>
                    <option value="AI">AI</option>
                    <option value="C++">C++</option>
                    <option value="GameDev">Game Dev</option>
                    <option value="C">C</option>
                    <option value="Processor">Processor</option>
                    <option value="Cache">Cache</option>
                    <option value="Bitwise">Bitwise</option>
                    <option value="Web">Web</option>
                    <option value="MachineLearning">Machine Learning</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Map-Reduce">Map-Reduce</option>
                    <option value="Search Engine">Search Engine</option>
                    <option value="SQL">SQL</option>
                    <option value="Convolutional Neural Network">Convolutional Neural Network</option>
                    <option value="Chrome Extension">Chrome Extension</option>
                </select>
            </div>

            {/* Display Projects */}
            <ul style={styles.list}>
                {filteredProjects.map((project, index) => (
                    <li key={index} style={styles.item}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
                            <h3>{project.name}</h3>
                        </a>
                        <p>{project.description}</p>
                        <p style={styles.tags}>Tags: {project.tags.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    searchContainer: {
        position: "fixed",  /* Keep it at the top */
        top: "100px",  /* Below the navbar */
        left: "0",
        width: "100%",  /* Stretch across the screen */
        background: "#222",
        padding: "10px 0",
        zIndex: "100",
        color: "white",
        textAlign: "center",  /* Centers the text */
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        display: "flex",  /* Use Flexbox for better alignment */
        justifyContent: "center",  /* Center horizontally */
        alignItems: "center",  /* Center vertically */
        gap: "10px",  /* Add space between elements */
    },
    select: {
        margin: "0",
        padding: "8px",
    },
    list: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px",
        width: "100%",
        marginTop: "180px", /* Ensures list doesn't overlap search bar */
    },
    item: {
        background: "#444",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        color: "white",
        transition: "0.3s",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    projectLink: {
        color: "lightblue",
        textDecoration: "none",
    },
    tags: {
        fontSize: "14px",
        color: "gray",
    }
};

export default Projects;