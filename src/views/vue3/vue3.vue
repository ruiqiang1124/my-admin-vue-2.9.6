<template>
  <div>{{count}} {{object.foo}}</div>
</template>

<script>
  import { reactive, computed, ref } from '@vue/composition-api'

  export default {
    setup() {
      const count = ref(0);
      const object = reactive({
        foo: 'bar'
      })

      
      return {
        count, object
      }
    },
  }
</script>