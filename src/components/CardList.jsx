import React, {useState, useEffect} from "react";

import "./CardList.css";

import { DisneyService } from "../services/DisneyService";
import { charList } from "../mocks/charList";




function CardList() {

  const [chars, setChars] = useState([]);
  const [selectChar, setSelectChar] = useState({});



 const getLista = async() =>{
  const response = await DisneyService.getLista();
  setChars(response);
 }

 useEffect(() => {
  getLista();
 }, [])

  return (
    <div className="CardList">
      <div className="Card__container">
        {charList.map((char, index) => (

          <div className="charListaItem">
            <div>
              <div className="char__name">{char}</div>
              
              
              
            </div>
            <img
              className="charListaItem__foto"
              src={char}
              alt='foto'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
