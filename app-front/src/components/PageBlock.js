export default {
    name: "PageBlock",
    data() {
      return {
        user: {
          name: "user"
        }
      };
    },
    methods: {
      getUserData() {
        this.$http
          .get("/api/user")
          .then(response => {
            console.log(response);
            this.$set(this, "user", response.data.user);
          })
          .catch(errors => {
            console.log(errors);
            this.$router.push("/");
          });
      }
    },
    mounted() {
      this.getUserData();
    }
  };