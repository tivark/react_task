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
  datePeriod:{
    startDate: Date.now(),
    endDate: Date.now()
  },
  sidePanel:[
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
  baseUpdated: false,
  currentPath:'/'
}

export { initObject };