import React from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import AttributeList from '../attribute-list';
import {baseLoaded, attributeDragEnd} from '../../actions';
import './attribute-selector.css';
import Paper from '@material-ui/core/Paper';
import {commonStyles} from '../../styles/styles';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    backgroundColor: commonStyles.backgroundColor,
    padding: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontWeight: '700',
    marginBottom: '10px',
    display: 'inline-block'
  },
  listWrapper: {
    display: 'flex',
    width: '100%',
    flexGrow: '1'
  }
})

const AttributeSelector = (props) => {
  const {items, columns, columnOrder} = props;
  const classes = useStyles();

  const onDragEnd = (result) => {
    props.attributeDragEnd(result);
  }

  return (
    <Paper className={classes.paper}>
      <span className={classes.title}>Атрибуты выгрузки</span>
      <div className={classes.listWrapper}>
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
    </Paper>
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