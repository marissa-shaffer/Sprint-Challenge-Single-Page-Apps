import React, { useState } from "react";
import styled from "style-components";
import SearchForm from '../Components/SearchForm.js';

const CharacterList = props => {
  const CharacterForm = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly; 
  `;
}

  return (
    <div>
      <CharacterForm>
        {props.forms.map(form => (
          <div key={form.id}>
            <img src={form.image} alt=""/>
            <h2>{form.name}</h2>
          </div>
        ))}
      </CharacterForm>
    </div>
  );

 export default CharacterList;