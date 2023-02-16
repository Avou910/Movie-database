import "./App.css";

import Movies from "./Movies.jsx";
import { useState } from "react";
import { TextField, Button, Stack, Paper, Container,Rating} from "@mui/material";
import { db } from "./config.js";
import { doc, setDoc } from "firebase/firestore";


function App() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);


  const addMovie = async () => {
    if (title !== "" && director !== "" && description !== ""&& year !== ""&& rating !== "") {
      try {
        await setDoc(doc(db, "movies", title), {
          title,
          year,
          director,
          description,
          rating
        });
        setTitle("");
        setYear("");
        setDirector("");
        setDescription("");
        setRating("");
        alert("A new movie has been added to the database!");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else alert("Missing fields");
  };

  return (
    <div className="App">
      <h1>Movies</h1>
      <Container
        component={Paper}
        sx={{ marginBottom: "20px", padding: "20px" }}
      >
        <h2 style={{ fontSize: "20px" }}>Add New Movie</h2>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            label="Year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />

          <TextField
            label="Director"
            value={director}
            onChange={(e) => {
              setDirector(e.target.value);
            }}
          />
          <TextField
            label="Description"
            multiline
            value={description}
            onChange={(e) => {
            setDescription(e.target.value);
            }}
          />

          
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => {
            setRating(e.target.value);
            }}
          />

          <Button size="small" variant="contained" onClick={addMovie}>
            Add Movie
          </Button>
        </Stack>
      </Container>
      <Movies />
    </div>
  );

}

export default App;