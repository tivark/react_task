import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {connect} from 'react-redux';
import {attributeRelocate} from "../../actions";

import './attribute-item.css';
import {IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';


const AttributeItem = (props) => {
  const {id, content, index, columnId} = props;
  const buttonIcon = columnId === 'available'
    ? <AddIcon/>
    : <DeleteIcon/>;

  const onClickHandler = () => {
    props.attributeRelocate(id);
  }

  return (
    <Draggable draggableId={id} index={index}>
      {
        (provided) => {
          return (
            <div className='attribute-item'
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
                 ref={provided.innerRef}>
              <DragIndicatorIcon />
              <div className='attribute-item__text'>{content}</div>
              <IconButton onClick={onClickHandler} className='attribute-item__button'>
                {buttonIcon}
              </IconButton>
            </div>
          )
        }
      }
    </Draggable>
  )
}

const mapDispatchToProps = {
  attributeRelocate
}

export default connect(null, mapDispatchToProps)(AttributeItem);