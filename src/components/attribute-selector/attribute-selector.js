import React from "react";
import AttributeList from "../attribute-list";
import {DragDropContext} from "react-beautiful-dnd";

import testObject from "../../services/test-object";

import './attribute-selector.css';


const AttributeSelector = () => {

  const onDragEnd = (result) => {

  }

  return (

    <div className='attribute-selector'>
      <span className='attribute-selector__title'>Атрибуты выгрузки</span>
      <div className='attribute-selector__lists'>
        <DragDropContext onDragEnd={onDragEnd}>
          {
            testObject.columnOrder.map((columnId) => {
              const column = testObject.columns[columnId];
              const tasks = column.taskId.map((taskId) => {
                return testObject.tasks[taskId];
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