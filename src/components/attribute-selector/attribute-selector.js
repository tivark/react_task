import React, {useState} from "react";
import {connect} from 'react-redux';

import {DragDropContext} from "react-beautiful-dnd";
import AttributeList from "../attribute-list";

import {baseLoaded} from "../../actions";
import testObject from "../../services/test-object";
import './attribute-selector.css';


const AttributeSelector = (props) => {

  const [stateObj, setStateObj] = useState(testObject);

  // useEffect(() => {
  //   props.baseLoaded([]);
  // }, [])

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }

    const start = stateObj.columns[source.droppableId];
    const finish = stateObj.columns[destination.droppableId]

    if (start === finish) {
      const newItemsId = [...start.itemsId];
      newItemsId.splice(source.index, 1);
      newItemsId.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        itemsId: newItemsId
      }

      const newState = {
        ...stateObj,
        columns: {
          ...stateObj.columns,
          [newColumn.id]: newColumn
        }
      }
      setStateObj(newState);
      return;
    }

    const startItemsId = [...start.itemsId];
    startItemsId.splice(source.index, 1);
    const startColumn = {
      ...start,
      itemsId: startItemsId
    }

    const finishItemsId = Array.from(finish.itemsId);
    finishItemsId.splice(destination.index, 0, draggableId);
    const finishColumn = {
      ...finish,
      itemsId: finishItemsId
    }

    const newState = {
      ...stateObj,
      columns: {
        ...stateObj.columns,
        [startColumn.id]: startColumn,
        [finishColumn.id]: finishColumn
      }
    }
    setStateObj(newState);
  }

  return (
    <div className='attribute-selector'>
      <span className='attribute-selector__title'>Атрибуты выгрузки</span>
      <div className='attribute-selector__lists'>
        <DragDropContext onDragEnd={onDragEnd}>
          {
            stateObj.columnOrder.map((columnId) => {
              const column = stateObj.columns[columnId];
              const items = column.itemsId.map((itemId) => {
                return stateObj.items[itemId];
              });
              return <AttributeList key={columnId} column={column} items={items}/>
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
  baseLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSelector);