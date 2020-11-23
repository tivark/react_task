import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { attributeRelocate } from '../../actions';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import './attribute-item.css';
import { commonStyles } from '../../styles/styles';

const useStyles = makeStyles( {
  attributeItem: {
    backgroundColor: commonStyles.backgroundColor,
    marginBottom: '5px',
    marginRight: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '.9em',
    '&:hover .item-button': {
      transition: 'opacity .5s',
      opacity: '1'
    }
  },
  iconButtonRoot: {
    padding: '3px',
    margin: '3px',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '& .MuiSvgIcon-root': {
      height: '18px',
      width: '18px'
    }
  },
  dragIndicatorRoot: {
    height: '18px',
    width: '18px'
  }
} )

const AttributeItem = (props) => {
  const { id, content, index, columnId } = props;
  const classes = useStyles();
  const buttonIcon = columnId === 'available'
    ? <AddIcon/>
    : <DeleteIcon/>;

  const onClickHandler = () => {
    props.attributeRelocate( id );
  }

  return (
    <Draggable draggableId={ id } index={ index }>
      {
        (provided) => {
          return (
            <Paper className={ classes.attributeItem }
                   { ...provided.draggableProps }
                   { ...provided.dragHandleProps }
                   ref={ provided.innerRef }>
              <DragIndicatorIcon
                className={ classes.dragIndicatorRoot }
                color='action'
              />
              <div className='attribute-item__text'>{ content }</div>
              <IconButton
                onClick={ onClickHandler }
                className='item-button'
                size='small'
                classes={ { root: classes.iconButtonRoot } }>
                { buttonIcon }
              </IconButton>
            </Paper>
          )
        }
      }
    </Draggable>
  )
}

const mapDispatchToProps = {
  attributeRelocate
}

export default connect( null, mapDispatchToProps )( AttributeItem );