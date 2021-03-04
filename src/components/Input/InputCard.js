import { useContext } from 'react';
import { InputBase, Paper, IconButton, Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import StoreApi from '../../utils/StoreApi';

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(0, 1, 1, 1),
  },
  btnConfirm: {
    background: '#5AAC44',
    color: '#fff',
    '&:hover': {
      background: fade('#5AAC44', 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const InputCard = ({ setOpen, listId, type }) => {
  const classes = useStyle();

  const [title, setTitle] = useState('');

  const { addCard, addList } = useContext(StoreApi);

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const btnConfirmHandler = () => {
    if (type === 'card') {
      addCard(title, listId);
      setTitle('');
      setOpen(false);
    } else if ((type = 'list')) {
      addList(title);
      setTitle('');
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={onChangeHandler}
            value={title}
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder={
              type === 'card'
                ? `Enter content for this card..`
                : `Enter the list title...`
            }
            onBlur={() => setOpen(false)}
          ></InputBase>
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={btnConfirmHandler}>
          {type === 'card' ? 'Add Card' : 'Add List'}
        </Button>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default InputCard;
