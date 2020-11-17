import React, {useState} from "react";
import {connect} from 'react-redux';

import {DragDropContext} from "react-beautiful-dnd";
import AttributeList from "../attribute-list";

import {baseLoaded, columnChanged, attributeRelocated} from "../../actions";
import './attribute-selector.css';


const AttributeSelector = (props) => {

  const {items, columns, columnOrder} = props;

  const onDragEnd = ({destination, source, draggableId}) => {

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId]

    if (start === finish) {
      const newItemsId = [...start.itemsId];
      newItemsId.splice(source.index, 1);
      newItemsId.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        itemsId: newItemsId
      }

      props.columnChanged(newColumn);
      return;
    }

    const startItemsId = [...start.itemsId];
    startItemsId.splice(source.index, 1);
    const startColumn = {
      ...start,
      itemsId: startItemsId
    }

    const finishItemsId = [...finish.itemsId];
    finishItemsId.splice(destination.index, 0, draggableId);
    const finishColumn = {
      ...finish,
      itemsId: finishItemsId
    }

    props.attributeRelocated(startColumn, finishColumn);
  }

  return (
    <div className='attribute-selector'>
      <span className='attribute-selector__title'>Атрибуты выгрузки</span>
      <div className='attribute-selector__lists'>
        <DragDropContext onDragEnd={onDragEnd}>
          {
            columnOrder.map((columnId) => {
              const column = columns[columnId];
              const renderItems = column.itemsId.map((itemId) => {
                return items[itemId];
              });
              return <AttributeList
                key={columnId}
                column={column}
                items={renderItems}
              />
            })
          }
        </DragDropContext>
      </div>
    </div>
  )
}

const mapStateToProps = ({items, columns, columnOrder}) => {
  return {
    items,
    columns,
    columnOrder
  }
}

const mapDispatchToProps = {
  baseLoaded,
  columnChanged,
  attributeRelocated
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSelector);