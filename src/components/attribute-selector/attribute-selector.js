import React from "react";
import {connect} from 'react-redux';

import {DragDropContext} from "react-beautiful-dnd";
import AttributeList from "../attribute-list";

import {baseLoaded, attributeDragEnd } from "../../actions";
import './attribute-selector.css';


const AttributeSelector = (props) => {

  const {items, columns, columnOrder} = props;

  const onDragEnd = (result) => {
    props.attributeDragEnd(result);
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
  attributeDragEnd
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeSelector);