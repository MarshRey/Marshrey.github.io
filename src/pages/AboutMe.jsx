import React from 'react';

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
    },
    banner: {
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        fontSize: '2em',
        marginBottom: '20px',
    },
    content: {
        width: '80%',
        maxWidth: '800px',
        textAlign: 'left',
        fontSize: '1.2em',
        lineHeight: '1.6',
    },
    link: {
        color: '#007acc',
        textDecoration: 'none',
        fontSize: '1.2em',
        marginTop: '20px',
        display: 'block',
    },
};

const AboutMe = () => {
    return(
        <div style={(styles.container) }>
        <div style={styles.content}>
                <p>
                    My name is Marsh Reynolds, I have attended the University of Michigan for 4 years working towards a degree in computer science. I have worked in many group projects and I have completed many personal projects.
                    I am a creative mind always looking to push myself to learn as much as I can. I love having fun and working with other people towards the amazing feeling of getting a project done.
                </p>
                <p>
                    I am seeking employment in the field of software development. I am looking for a company that will allow me to grow and learn as a developer as well as to work with other people and learn from them.
                </p>
                <a href="https://linktr.ee/marshreynolds" style={styles.link} target="_blank" rel="noopener noreferrer">
                    Here is my Linktree
                </a>
            </div>
        </div>
    )
}

export default AboutMe;