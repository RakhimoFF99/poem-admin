<template>
    <div>
        <div class="loading-center" v-if="isLoading">
            <div class="loading-inner">
         
               <OrbitSpinner    
                    :animation-duration="700"
                    :size="120"
                    :color="'#7b7ba3'"
                />
             
            </div>
        </div>
    </div>
</template>

<script>
import {OrbitSpinner    } from 'epic-spinners'


export default {
    name:"Loading",
    components: {
        OrbitSpinner      
    },
     computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    }

  
};
</script>

<style >
.loading-center {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
   
    z-index: 10001;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>