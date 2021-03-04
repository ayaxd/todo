import { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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

const Title = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <InputBase
          autoFocus
          value='ToDo'
          inputProps={{ className: classes.input }}
          fullWidth
          onBlur={() => setOpen(false)}
        ></InputBase>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            className={classes.editableTitle}
            onClick={() => setOpen(true)}
          >
            ToDo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
