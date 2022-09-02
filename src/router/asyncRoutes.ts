const asyncRoutes = import.meta.glob('./modules/*.ts', {
  import: 'default',
  eager: true
})

export default asyncRoutes
