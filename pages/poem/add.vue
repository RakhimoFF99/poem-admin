<template>
  <div class="wrapper px-4 py-4">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex px-2">
              <h3 class="card-title my-0">Buyurtma qo'shish</h3>
            </div>
            <div class="container mt-3">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="username">Sher sarlavhasi</label>
                    <el-input
                      v-model="poem.name"
                      id="username"
                      clearable
                    ></el-input>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="username">Sher kategoriyasi</label>

                    <el-select
                      v-model="poem.categoryId"
                      placeholder="Kategoriyani tanlang"
                    >
                      <el-option
                        v-for="item in categories"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>

              <div class="row mt-3">
                <div>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="Sherni kiriting"
                    v-model="poem.poem"
                  >
                  </el-input>
                </div>
              </div>
              <div class="d-flex mt-3 justify-content-end px-5">
                <el-button type="primary" @click="createPoem"
                  >Saqlash</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories:null,
    poem: {
      name: "",
      categoryId: "",
      poem:""
    },
  }),
  methods: {
    async  getAllCategories () {
        let category = await this.$axios.get('category/getCategories')
        this.categories = category.data
      },
     async createPoem () {
       try {
  const response = await this.$axios.post('poem/add',this.poem)
      if(response.data.success) {
          this.$toast.success("Sher mufaqqiyatli qo'shildi")
          this.$router.push('/poem')
      }
       }
       catch(e) {
         this.$toast.error("Xatolik yuz berdi")
       }
     
      }
  },
  mounted() {
    this.getAllCategories()
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>