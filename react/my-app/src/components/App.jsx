import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Heading />
            {notes.map(note => { return (<Note key={note.key} tittle={note.title} content={note.content} />) })}
            <Footer />
        </div>
    );
}

export default App;
