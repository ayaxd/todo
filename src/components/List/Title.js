import { useContext, useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StoreApi from '../../utils/StoreApi';

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
  },
  editableTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  input: {
    margin: theme.spacing(1),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    '&:focus': {
      background: '#ddd',
    },
  },
}));

const Title = ({ title, listId }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(StoreApi);

  const onChangeHandler = (e) => {
    setNewTitle(e.target.value);
    console.log(newTitle);
  };

  const onBlurHandler = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <InputBase
          autoFocus
          value={newTitle}
          inputProps={{ className: classes.input }}
          fullWidth
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        ></InputBase>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            className={classes.editableTitle}
            onClick={() => setOpen(true)}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
