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
    startDate: Date.now(),
    endDate: Date.now()
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
            {create:'Создания'},
            {public: 'Публикации'}]
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
            {new:'Новый'},
            {inWork: 'В работе'},
            {status: 'Статус 3'}]
        }
      ]
    }
  }
}

export {initObject};