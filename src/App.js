import React, { useState, useEffect } from "react";
import reactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header.js";

export default function App() {
  const [charaterForm, setCharacterForm] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharacterForm(response.data.results) 
    });
  }, []);
  useEffect(() =>{

  }, [characterForm]);


  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}
