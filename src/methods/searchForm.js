<script>
export default {
  name: "searchForm",
  data: () => ({
    search: "",
    isActive: false,
  }),
  methods: {
      active() {
          this.isActive = !this.isActive
      }
  }
}
</script>