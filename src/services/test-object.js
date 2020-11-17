const initObject = {
  items: {
    // 'task-1': {id: 'task-1', content: 'task-1 content'},
    // 'task-2': {id: 'task-2', content: 'task-2 content'},
    // 'task-3': {id: 'task-3', content: 'task-3 content'},
    // 'task-4': {id: 'task-4', content: 'task-4 content'}
  },
  columns: {
    'available': {
      id: 'available',
      title: 'Доступные',
      itemsId: []
    },
    'selected': {
      id: 'selected',
      title: 'Выбранные',
      itemsId: []
    },
  },
  columnOrder: ['available', 'selected']
}

export default initObject;