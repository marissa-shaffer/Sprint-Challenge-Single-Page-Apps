import React, { useState } from "react";
import {Field, Form, withFormik} from "formik";

const SearchForm = props => {
  return(
    <input onChange={props.handleInput} type="text" placeholder="Who are you searching for?"/>
  );
}

export default SearchForm;