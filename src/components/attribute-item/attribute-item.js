import React from "react";
import {Draggable} from "react-beautiful-dnd";
import './attribute-item.css';
import {Button} from "@material-ui/core";

const AttributeItem = ({id, content, index}) => {
  // const dragId = id + content[0];
  return (
    <Draggable draggableId={id} index={index}>
      {
        (provided) => {
          return (
            <div className='attribute-item'
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}>
              {content}
            </div>
          )}
      }
    </Draggable>
  )
}

export default AttributeItem;