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
  useEffect(() => {

  }, [characterForm]);
  const [searchState, setSearchState] = useState("");
  const handleInput = e => {
    setSearchState(e.target.value);
  }
  const filtered = characterForm.filter(character => {
    return character.name.toLowerCase().includes(searchState.toLowerCase());
  })


  const Navbar = styled.div`
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 25px;
  `

  return (
    <main data-testid='app'>
      <Header />
      <Navbar>
        <Link style={{textDecoration: 'none', color: 'Green'}} to="/">Home</Link>
        <Link style={{textDecoration: 'none', color: 'Green'}} to="/character-list">Character List</Link>
      </Navbar>
      <SearchForm handleInput = {handleInput} />
      <Route exact path="/" component={WelcomePage} />
      <Route path = "/character-list" component={CharacterList}><CharacterList forms={filtered} /></Route>
    </main>
  );
}
