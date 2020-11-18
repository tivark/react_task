import React from "react";
import {Droppable} from "react-beautiful-dnd";
import AttributeItem from "../attribute-item";
import './attribute-list.css';
import AttributeListButton from "../attribute-list-button";

const AttributeList = ({column, items}) => {

  const buttonType = column.id === 'available'
    ? 'ADD_ALL'
    : 'REMOVE_ALL';

  return (
    <div className='attribute-list'>
      <span className='attribute-list__header'>
        <span className='attribute-list__title'>{column.title}</span>
        <AttributeListButton
          type={buttonType}
          isInactive={!column.itemsId.length}
          columnId={column.id}
        />
      </span>
      <Droppable droppableId={column.id}>
        {
          (provided) => {
            return (
              <div className='attribute-list__items'
                   ref={provided.innerRef}
                   {...provided.droppableProps}>
                {items.map((item, index) => {
                  return <AttributeItem
                    key={item.id}
                    id={item.id}
                    content={item.name}
                    index={index}
                    columnId={column.id}
                  />
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