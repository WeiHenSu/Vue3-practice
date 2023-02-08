<template>
    <navbar></navbar>
    <div class="container-fluid">
        <router-view/>
    </div>
</template>

<script>
import navbar from '../components/NavbarComponent.vue'

export default {
  components: {
    navbar
  },
  created () {
    const token = document.cookie.split('; ').find((row) => row.startsWith('loginToken='))?.split('=')[1]
    console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api).then((res) => {
      console.log('dash', res.data.success)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
