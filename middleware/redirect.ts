export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useState('auth', () => true)

  if (!auth.value) {
    return navigateTo('/login')
  }
})

//  In your page file, you can reference this route middleware
// <script setup>
// definePageMeta({
//   middleware: ["redirect"]
//   // or middleware: 'auth'
// })
// </script>
