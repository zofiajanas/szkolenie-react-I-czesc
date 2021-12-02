import { useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { API_HP_CHARACTERS, API_HP_CHARACTERS_HOUSE } from '../../api';
import Search from './Search';

const Wrapper = styled.div`
  background-color: #250101;
  padding-top: 40px;
  min-height: 100vh;
`;

const List = styled.ul`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  list-style: none;
`;

const SingleItem = styled.li`
  width: 25%;
  background-color: #e9e7e7;
  margin: 20px;
  padding: 40px;

  img {
    width: 80px;
    height: auto;
  }
`;

const CharactersList = () => {
  const [baseCharactersList, setBaseCharactersList] = useState([]);

  const [charactersList, setCharactersList] = useState([]);

  const getCharacters = async () => {
    try {
      const resp = await fetch(API_HP_CHARACTERS);
      const data = await resp.json();
      setCharactersList(data);
      setBaseCharactersList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCharacters();

    return () => {
      setCharactersList([]);
    };
  }, []);

  const charactersRender = charactersList.map((char, i) => (
    <SingleItem key={`${char.name}-${i}`}>
      <p>{char.name}</p>
      <p>{char.house}</p>
      <img src={char.image} alt={`${char.name}`} />
    </SingleItem>
  ));

  const onSearch = _.debounce(value => {
    const newCharacters = baseCharactersList.filter(char =>
      char.name.toUpperCase().includes(value.toUpperCase())
    );
    setCharactersList(newCharacters);
  }, 500);

  return (
    <Wrapper>
      <Search onSearch={onSearch} />
      <List>{charactersRender}</List>
    </Wrapper>
  );
};

export default CharactersList;
