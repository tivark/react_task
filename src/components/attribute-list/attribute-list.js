import React from "react";
import {Button} from "@material-ui/core";
import {Droppable} from "react-beautiful-dnd";
import AttributeItem from "../attribute-item";
import './attribute-list.css';

const AttributeList = ({column, items}) => {

  return (
    <div className='attribute-list'>
      <span className='attribute-list__header'>
        <span className='attribute-list__title'>{column.title}</span>
        <Button variant='contained'>Добавить всё</Button>
      </span>
      <Droppable droppableId={column.id}>
        {
          (provided) => {
            return (
              <div className='attribute-list__items'
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {items.map((item, index) => {
                  return <AttributeItem key={item.id} id={item.id} content={item.name} index={index}/>
                })}
                {provided.placeholder}
              </div>
            )
          }
        }
      </Droppable>
    </div>
  )
}

export default AttributeList;