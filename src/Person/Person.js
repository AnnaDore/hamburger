import React from "react";
//import "./Person.css";
import classes from './Person.css'
//import Radium from 'radium'
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 2px solid black;
  padding: 5px;
`;

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "150px",
    },
  };
  return (
    <StyleDiv>
      <div className={classes.Person} style={style}>
        <p onClick={props.click}>
          Im a {props.name} and im {props.age} yo
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyleDiv>
  );
};

export default person;


/* className="Person"  */