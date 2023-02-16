import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,

 
  
} from "@mui/material";
import { db } from "./config.js";
import { collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";

export default function Movies() {


  const [rows, setRows] = useState([]);
  const getMovies = () => {
    const q = query(collection(db, "movies"));
    onSnapshot(q, (querySnapshot) => {
      const rows = [];
      querySnapshot.forEach((doc) => {
        rows.push(doc.data())
      });
      setRows(rows);
    });
  };
  useEffect(() => {
    getMovies();
  },[]);

  const deleteMovie = async (title) =>{
    await deleteDoc(doc(db, "movies", title));
    alert(title+" has been successfully deleted.")
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="collapsible table">
        <TableHead>
          <TableRow>
      
            <TableCell sx={{ fontWeight: 700 }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Year</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Director</TableCell>
            <TableCell
             style = {{whiteSpace:"normal",
             wordWrap: "break-word" }}
            sx={{ fontWeight: 700 }}>Description</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Rating</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.director}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={()=>deleteMovie(row.title)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      

    </TableContainer>
  );
}

 