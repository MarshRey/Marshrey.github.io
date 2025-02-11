import React, { useEffect } from "react";
import * as d3 from "d3";

const Skills = () => {
    // const [infoBoxVisible, setInfoBoxVisible] = useState(true);
    
    useEffect(() => {
        const nodes = [
            { id: 'Computer Science', fixed: true, fx: window.innerWidth / 2, fy: window.innerHeight / 2 },
        
            // Major Nodes
            { id: 'Programming Languages', parent: 'Computer Science' },
            { id: 'Data Structures', parent: 'Computer Science' },
            { id: 'Common Algorithms', parent: 'Asymptotic Notation' },
            { id: 'Complexity Classes', parent: 'Common Algorithms' },
            { id: 'System Design', parent: 'Complexity Classes' },
            { id: 'Databases', parent: 'System Design' },
            { id: 'Networking', parent: 'Databases' },
            { id: 'Security', parent: 'Networking' },
            { id: 'How Computers Work', parent: 'Security' },
            { id: 'Asymptotic Notation', parent: 'Data Structures' },
        
            // Programming Languages Children
            { id: 'Python', parent: 'Programming Languages' },
            { id: 'C++', parent: 'Programming Languages' },
            { id: 'JavaScript', parent: 'Programming Languages' },
        
            // Data Structures Children
            { id: 'Array', parent: 'Data Structures' },
            { id: 'Linked List', parent: 'Data Structures' },
            { id: 'Stack', parent: 'Data Structures' },
            { id: 'Queue', parent: 'Data Structures' },
            { id: 'Tree', parent: 'Data Structures' },
            { id: 'Hash Table', parent: 'Data Structures' },
            { id: 'Balanced Trees', parent: 'Tree' },
            // { id: 'Binary Search Tree', parent: 'Balanced Trees' },
        
            // Asymptotic Notation Children
            { id: 'Big O Notation', parent: 'Asymptotic Notation' },
            { id: 'Common Runtimes', parent: 'Asymptotic Notation' },
        
            // Common Algorithms Children
            { id: 'Graph', parent: 'Common Algorithms' },
            { id: 'Tree Algorithms', parent: 'Common Algorithms' },
            { id: 'Recursion', parent: 'Common Algorithms' },
            { id: 'Sorting', parent: 'Common Algorithms' },
            { id: 'Greedy Algorithms', parent: 'Common Algorithms' },
            { id: 'Backtracking', parent: 'Common Algorithms' },
        
            // Complexity Classes Children
            { id: 'P', parent: 'Complexity Classes' },
            { id: 'NP', parent: 'Complexity Classes' },
            { id: 'P = NP', parent: 'Complexity Classes' },
            { id: 'NP-Hard', parent: 'Complexity Classes' },
            { id: 'NP-Complete', parent: 'Complexity Classes' },
        
            // System Design Children
            { id: 'Horizontal Scaling', parent: 'System Design' },
            { id: 'Vertical Scaling', parent: 'System Design' },
            { id: 'Load Balancing', parent: 'System Design' },
            { id: 'Clustering', parent: 'System Design' },
            { id: 'CAP Theorem', parent: 'System Design' },
            { id: 'REST', parent: 'System Design' },
        
            // Databases Children
            { id: 'SQL', parent: 'Databases' },
            { id: 'NoSQL', parent: 'Databases' },
        
            // Networking Children
            { id: 'DNS', parent: 'Networking' },
            { id: 'HTTP', parent: 'Networking' },
            { id: 'TLS & HTTPS', parent: 'Networking' },
            { id: 'TCP Model', parent: 'Networking' },
        
            // Security Children
            { id: 'Hashing/Encryption/Encoding', parent: 'Security' },
            { id: 'Public Key Cryptography', parent: 'Security' },
            { id: 'Hashing Algorithms', parent: 'Security' },
        
            // How Computers Work Children
            { id: 'Registers and RAM', parent: 'How Computers Work' },
            { id: 'CPU Cache', parent: 'How Computers Work' },
            { id: 'Instructions and Programs', parent: 'How Computers Work' },
            { id: 'Processes and Threads', parent: 'How Computers Work' },
        ];

        const links = [
            // Major links
            { source: 'Computer Science', target: 'Programming Languages', type: 'major' },
            { source: 'Computer Science', target: 'Data Structures', type: 'major' },
            { source: 'Computer Science', target: 'Common Algorithms', type: 'major' },
            { source: 'Computer Science', target: 'Complexity Classes', type: 'major' },
            { source: 'Computer Science', target: 'System Design', type: 'major' },
            { source: 'Computer Science', target: 'Databases', type: 'major' },
            { source: 'Computer Science', target: 'Networking', type: 'major' },
            { source: 'Computer Science', target: 'Security', type: 'major' },
            { source: 'Computer Science', target: 'How Computers Work', type: 'major' },
            { source: 'Computer Science', target: 'Asymptotic Notation', type: 'major' },
        
            // Asymptotic Notation children
            { source: 'Asymptotic Notation', target: 'Big O Notation' },
            { source: 'Asymptotic Notation', target: 'Common Runtimes' },
        
            // Programming Languages children
            { source: 'Programming Languages', target: 'Python' },
            { source: 'Programming Languages', target: 'C++' },
            { source: 'Programming Languages', target: 'JavaScript' },
        
            // Data Structures children
            { source: 'Data Structures', target: 'Array' },
            { source: 'Data Structures', target: 'Linked List' },
            { source: 'Data Structures', target: 'Stack' },
            { source: 'Data Structures', target: 'Queue' },
            { source: 'Data Structures', target: 'Tree' },
            { source: 'Data Structures', target: 'Hash Table' },
            { source: 'Data Structures', target: 'Balanced Trees' },
            // { source: 'Balanced Trees', target: 'Binary Search Tree' },
        
            // Common Algorithms children
            { source: 'Common Algorithms', target: 'Graph' },
            { source: 'Common Algorithms', target: 'Tree Algorithms' },
            { source: 'Common Algorithms', target: 'Recursion' },
            { source: 'Common Algorithms', target: 'Sorting' },
            { source: 'Common Algorithms', target: 'Greedy Algorithms' },
            { source: 'Common Algorithms', target: 'Backtracking' },
        
            // Complexity Classes children
            { source: 'Complexity Classes', target: 'P' },
            { source: 'Complexity Classes', target: 'NP' },
            { source: 'Complexity Classes', target: 'P = NP' },
            { source: 'Complexity Classes', target: 'NP-Hard' },
            { source: 'Complexity Classes', target: 'NP-Complete' },
        
            // System Design children
            { source: 'System Design', target: 'Horizontal Scaling' },
            { source: 'System Design', target: 'Vertical Scaling' },
            { source: 'System Design', target: 'Load Balancing' },
            { source: 'System Design', target: 'Clustering' },
            { source: 'System Design', target: 'CAP Theorem' },
            { source: 'System Design', target: 'REST' },
        
            // Databases children
            { source: 'Databases', target: 'SQL' },
            { source: 'Databases', target: 'NoSQL' },
        
            // Networking children
            { source: 'Networking', target: 'DNS' },
            { source: 'Networking', target: 'HTTP' },
            { source: 'Networking', target: 'TLS & HTTPS' },
            { source: 'Networking', target: 'TCP Model' },
        
            // Security children
            { source: 'Security', target: 'Hashing/Encryption/Encoding' },
            { source: 'Security', target: 'Public Key Cryptography' },
            { source: 'Security', target: 'Hashing Algorithms' },
        
            // How Computers Work children
            { source: 'How Computers Work', target: 'Registers and RAM' },
            { source: 'How Computers Work', target: 'CPU Cache' },
            { source: 'How Computers Work', target: 'Instructions and Programs' },
            { source: 'How Computers Work', target: 'Processes and Threads' },
        ];

        const width = window.innerWidth;
        const height = window.innerHeight;

        const container = d3
            .select("#graph-container")
            .style("overflow", "auto")
            .style("width", "100%")
            .style("height", "100%");

        const svg = container
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `-${width / 2} -${height / 2} ${width * 2} ${height * 2}`)
            .attr("preserveAspectRatio", "xMidYMid meet");

        const simulation = d3
            .forceSimulation(nodes)
            .force("link", d3.forceLink(links).id((d) => d.id).distance(150))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .on("tick", () => {
                svg.selectAll("line")
                    .data(links)
                    .join("line")
                    .attr("stroke", "#aaa")
                    .attr("x1", (d) => d.source.x)
                    .attr("y1", (d) => d.source.y)
                    .attr("x2", (d) => d.target.x)
                    .attr("y2", (d) => d.target.y);

                svg.selectAll("circle")
                    .data(nodes)
                    .join("circle")
                    .attr("r", 20)
                    .attr("fill", "#007acc")
                    .attr("cx", (d) => d.x)
                    .attr("cy", (d) => d.y);

                svg.selectAll("text")
                    .data(nodes)
                    .join("text")
                    .text((d) => d.id)
                    .attr("x", (d) => d.x + 10)
                    .attr("y", (d) => d.y + 5)
                    .attr("font-size", "12px")
                    .attr("fill", "#fff");
            });

        return () => {
            d3.select("#graph-container").selectAll("*").remove(); // Clean up the SVG
        };
    }, []);

    return (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <div id="graph-container"></div>
            <div
                id="info-box"
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                {/* <h2 id="node-title">Computer Science</h2>
                <p id="node-description">
                    Welcome to my Computer Science knowledge map! Click on any node to learn more about what I've studied during my time in college.
                </p> */}
            </div>
        </div>
    );
};

export default Skills;