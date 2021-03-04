import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
import Title from './Title';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
}));
const List = () => {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title></Title>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <InputContainer></InputContainer>
      </Paper>
    </div>
  );
};

export default List;
