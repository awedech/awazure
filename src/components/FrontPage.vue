<template>
<div>

        <h2>WELCOME TO AWAZURE</h2>
        <span>WE NEED YOUR MONEY PLS BUY PRODUCT THANKS :)</span>
        <v-row class="justify-center">
            <v-col cols="5">
            <div style="position:relative; left:500px">
                <VideoPlayer></VideoPlayer>
            </div>

            </v-col>
        </v-row>
</div>  
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'

export default {

    name:'FrontPage',
    components:{
        VideoPlayer,
    },

    data(){
        return{
        
        }
    }
}
</script>


<style>

</style>
