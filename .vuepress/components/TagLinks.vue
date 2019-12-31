<template>
  <div class="tagBox">
    Tags:
    <router-link
      class="tagLinks"
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/blog/tags.html#${tag}` }"
    >{{ tag }}</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tagBox {
  background-color: #f3f5f7;
  padding: 10px 0px;
}
.tagLinks {
  padding: 2px;
}
</style>
