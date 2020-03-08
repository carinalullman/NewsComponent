import React from 'react';
import NewsComponent from './NewsComponent';

const divStyle = {
    position: "absolute",
    background: "beige",
    border: "4px solid brown",
    borderRadius: "10px",
    padding: "12px",
    width: "400px",
    left: "300px",
    top: "200px",
}

function App() {
    return (
        <>
            <div style={divStyle}>
                <NewsComponent />
            </div>
        </>
    )

}

export default App;
