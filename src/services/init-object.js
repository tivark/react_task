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
  requestOptions: {
    'group-1': {
      id: 'group-1',
      title: 'Учёт по дате',
      optionsID:['option-1'],
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
      title: 'Алкоголь',
      optionsID: ['option-2'],
      options: [
        {
          id: 'option-2',
          title: 'Все',
          type: 'multi',
          variants: [
            {id: 'w_abv', label: 'Алкогольное'},
            {id: 'wo_abv', label: 'Безалкогольное'}
          ]
        }
      ]
    }
  },
  selectedOptions: {
    'option-1':'create',
    'option-2':['w_abv', 'wo_abv']
  }
}

export {initObject};