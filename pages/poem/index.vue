<template>
  <div class="wrapper px-4 py-4">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h4 class="card-title">Sherlar</h4>
              <nuxt-link class="text-white" to="/poem/add">
                <el-button type="primary mb-3 mx-4">
                  Qo'shish
                </el-button></nuxt-link
              >
            </div>

            <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0">
                <thead class="table-light">
                  <tr style="font-size:12px">
                    <th>№</th>
                    <th>Sarlavha</th>
                    <th>Sher</th>
                    <th>Kategoriya</th>
                    <th>Sana</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,i) in poem" :key="item._id">
                    <td>{{i + 1}}</td>
                 
                    <td>{{ item.name }}</td>
                    <td>
                      {{ item.poem }}
                    </td>
                        <td>
                        {{item.categoryId.name}}
                        </td>
                    <td>
                      {{ dateFormat(item.orderTime) }}
                    </td>
                    <td >{{item.serviceType}}</td>
                    <td>
                      <div class="d-flex align-content-center">
                        <el-button class="py-0 px-2 " style="margin-right:3px"> <nuxt-link to=""><fa icon="pen" class="text-dark" /></nuxt-link>  </el-button>
                        <el-popconfirm
                          
                          confirm-button-text="Xa"
                          cancel-button-text="Yo'q"
                          @confirm="removePoem(item._id)"
                          title=" O'chirish uchun ishonchingiz komilmi?"
                        >
                          <el-button class="btn-sm" slot="reference">
                            <fa icon="times" />
                          </el-button>
                        </el-popconfirm>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- end table-responsive -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateformat from "dateformat";
export default {
  data: () => ({
    poem: null,
  
  }),
  methods: {
    dateFormat(date) {
      let date1 = dateformat(date, "dd.mm.yyyy HH:MM:ss");
      return date1;
    },
  async  removePoem (id) {
      try {
       const response = await this.$axios.delete(`poem/delete/${id}`)
     if(response.data.success) {
         this.$toast.success("Sher mufaqqiyatli o'chirildi")
         this.getAllPoem()
     }
      }
      catch(e) {
          this.$toast.error("Xatolik yuz berdi")
      }

    },
   async getAllPoem () {
        let poem = await this.$axios.get('/poem/all')
        console.log(poem.data)
        this.poem = poem.data.data
    }
  },
  mounted(){
      this.getAllPoem()
  }
  
}
</script>

<style  scoped>
td {
  font-size: 12px;
  padding: 10px;
}

</style>