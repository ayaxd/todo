import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputContainer from './components/Input/InputContainer';
import List from './components/List/List';
import store from './utils/store';
import StoreApi from './utils/StoreApi';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#F7A2AD',
  },
}));

const App = () => {
  const classes = useStyle();
  const [data, setData] = useState(store);

  const addList = (title) => {
    const newListId = uuidv4();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };

    setData(newState);
  };

  const addCard = (content, listId) => {
    const newCardId = uuidv4();
    const newCard = {
      id: newCardId,
      content,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };

    setData(newState);

    console.log();
  };
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };

    setData(newState);

    console.log(title);
  };
  return (
    <StoreApi.Provider value={{ addCard, addList, updateListTitle }}>
      <div className={classes.root}>
        {data.listIds.map((id) => {
          const list = data.lists[id];
          return <List list={list} key={id}></List>;
        })}
        <InputContainer type='list' />
      </div>
    </StoreApi.Provider>
  );
};

export default App;
