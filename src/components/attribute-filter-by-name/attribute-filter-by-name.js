import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from '@material-ui/styles';
import {changeFilterInput} from '../../actions';

const useStyles = makeStyles({
  container: {
    marginBottom: '10px'
  }
})

const AttributeFilterByName = (props) => {

  const onChangeInput = (event) => {
    props.changeFilterInput(event.target.value);
  }

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon color='action'/>
        </Grid>
        <Grid item>
          <TextField
            value={props.filter}
            onChange={onChangeInput}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filterByName
  }
}

const mapDispatchToProps = {
  changeFilterInput
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeFilterByName);