import React, { useState, useEffect } from "react";
import reactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import styled from 'styled-components';
import SearchForm from "./components/SearchForm";

export default function App() {
  const [characterForm, setCharacterForm] = useState([]);

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
