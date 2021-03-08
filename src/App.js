import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputContainer from './components/Input/InputContainer';
import List from './components/List/List';
import store from './utils/store';
import StoreApi from './utils/StoreApi';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#F7A2AD',
    width: '100%',
    overflowY: 'auto',
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

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log('destination', destination, 'source', source, draggableId);

    if (!destination) {
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };

      setData(newState);
    }
  };
  return (
    <StoreApi.Provider value={{ addCard, addList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {data.listIds.map((id) => {
            const list = data.lists[id];
            return <List list={list} key={id}></List>;
          })}
          <InputContainer type='list' />
        </div>
      </DragDropContext>
    </StoreApi.Provider>
  );
};

export default App;
