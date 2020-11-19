const initObject = {
  items: {},
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
  columnOrder: ['available', 'selected'],
  datePeriod: {
    startDate:(new Date(Date.now())).toJSON().substring(0, 16),
    endDate: (new Date(Date.now())).toJSON().substring(0, 16)
  },
  sidePanel: [
    {
      title: 'Home',
      path: '/',
      icon: 'home'
    },
    {
      title: 'Export',
      path: '/export/',
      icon: 'export'
    },
    {
      title: 'Blank page',
      path: '/blank/',
      icon: 'bookmark'
    }
  ],
  requestSend: false,
  baseUpdated: false,
  currentPath: '/',
  filterByName: '',
  options: {
    'group-1': {
      id: 'group-1',
      title: 'Учёт по дате',
      options: [
        {
          id: 'option-1',
          title: '',
          type: 'single',
          variants: [
            {id: 'create', label: 'Создания'},
            {id: 'public', label: 'Публикации'}
          ]
        }
      ]
    },
    'group-2': {
      id: 'group-2',
      title: 'Статус',
      options: [
        {
          id: 'option-2',
          title: 'Все',
          type: 'multi',
          variants: [
            {id: 'new', label: 'Новый'},
            {id: 'inWork', label: 'В работе'},
            {id: 'status', label: 'Статус 3'}
          ]
        }
      ]
    }
  },
  selectedOptions: {
    'option-1':'create',
    'option-2':['new']
  }
}

export {initObject};