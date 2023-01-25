<template>
    <nuxt-link :to="'/posts/'+ id">
      <div>
        <p> {{ id }} {{ title }}</p>
        <p>{{ body }}</p>
      </div>
      </nuxt-link>
</template>

<script>

export default {
  name: 'Post',
  props: ['id', 'title', 'body']
}
</script>

