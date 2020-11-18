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
      icon: 'HomeIcon'
    },
    {
      title: 'Export',
      path: '/export/',
      icon: 'DvrIcon'
    },
    {
      title: 'Blank page',
      path: '/blank/',
      icon: 'BookmarkIcon'
    }
  ],
  baseUpdated: false
}

export { initObject };