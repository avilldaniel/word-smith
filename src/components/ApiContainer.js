import React, { useState } from 'react';

const ApiContainter = () => {
  const [word, setWord] = useState('');
  const [radio, setRadio] = useState('');

  const axios = require('axios');
  const baseURL = 'https://api.datamuse.com/words';

  // perf rhyme GET request
  const getPerfRhyme = async () => {
    try {
      const response = await axios.get(`${baseURL}?rel_rhy=test`);
      console.log(response);

      // console.log(response.data[0]); // best match
    } catch (error) {
      console.error(error);
    }
  }

  // near rhyme GET request
  const getNearRhyme = async () => {
    try {
      const response = await axios.get(`${baseURL}?rel_nry=test`);
      console.log(response);

      // console.log(response.data[0]); // best match
    } catch (error) {
      console.error(error);
    }
  }

  // sounds like GET request
  const getSoundsLike = async () => {
    try {
      const response = await axios.get(`${baseURL}?sl=test`);
      console.log(response);

      // console.log(response.data[0]); // best match
    } catch (error) {
      console.error(error);
    }
  }

  // associated GET request
  const getAssociated = async () => {
    try {
      const response = await axios.get(`${baseURL}?rel_trg=test`);
      console.log(response);

      // console.log(response.data[0]); // best match
    } catch (error) {
      console.error(error);
    }
  }

  // handle click
  const handleClick = async () => {
    try {
      const response = await axios.get(`${baseURL}${radio}${word}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="">
      <div>
        <input type="text" name="test" id="test" placeholder='ex. hello' onChange={event => setWord(event.target.value)} />
        <button type="submit" onClick={handleClick}>submit</button>
      </div>

        <input type="radio" value='perfRhyme' name='type' onChange={() => setRadio('?rel_rhy=')} defaultChecked/> perfect rhyme
        <input type="radio" value='nearRhyme' name='type' onChange={() => setRadio('?rel_nry=')} /> near rhyme  
        <input type="radio" value='soundsLike' name='type' onChange={() => setRadio('?sl=')} /> sounds like
        <input type="radio" value='associated' name='type' onChange={() => setRadio('?rel_trg=')} /> associated
      
      
    </div>
  );
}

export default ApiContainter;