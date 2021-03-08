import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
import Title from './Title';

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}));
const List = ({ list }) => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title} listId={list.id} />
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={classes.cardContainer}
            >
              {list.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index}></Card>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <InputContainer type='card' listId={list.id}></InputContainer>
      </Paper>
    </div>
  );
};

export default List;
