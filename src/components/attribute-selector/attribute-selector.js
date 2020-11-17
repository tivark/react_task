import React, {useState} from "react";
import AttributeList from "../attribute-list";
import {DragDropContext} from "react-beautiful-dnd";


import testObject from "../../services/test-object";

import './attribute-selector.css';

const AttributeSelector = () => {

  const [stateObj, setStateObj] = useState(testObject);

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
      const newTasksIds = Array.from(start.taskId);
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskId: newTasksIds
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

    const startTasksId = Array.from(start.taskId);
    startTasksId.splice(source.index, 1);
    const startColumn = {
      ...start,
      taskId: startTasksId
    }

    const finishTasksId = Array.from(finish.taskId);
    finishTasksId.splice(destination.index, 0, draggableId);
    const finishColumn = {
      ...finish,
      taskId: finishTasksId
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
              const tasks = column.taskId.map((taskId) => {
                return stateObj.tasks[taskId];
              });
              return <AttributeList key={columnId} column={column} tasks={tasks}/>
            })
          }
        </DragDropContext>
      </div>
    </div>
  )
}

export default AttributeSelector;