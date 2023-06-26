export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.beforeEach((event) => { console.log(`${event.name} hook is being called with ${event.args}`) })
  nitroApp.hooks.afterEach((event) => { console.log(`${event.name} hook has finished ${event.args}`) })
  // console.log('Hooks: ', nitroApp)
  // nitroApp.hooks.hook('render:response', (response, { event }) => {
  //   console.log('render:response', response, event)
  // })
  // console.log('Nitro Hook', nitroApp.hooks)
})
