<template>
<v-app>
    <v-row class="justify-center">
        <span>BITTE KAUFEN SIE UNSERE PRODUKTE!!</span>
        <h1>BITTE</h1>
        <h2>SCHNELL</h2>
        
    </v-row>
                        <v-img
            :src="link_aws"
            height="150"
            width="150"
            contain
            style="position:absolute;top:205px;left:20px"
            >POWERED BY</v-img> 
    <v-row class="justify-center">


    <v-col v-for="p in posts" :key="p.id" cols="3">    
    <v-card min-height="490" style="position:relative;bottom:100px">
        <v-card-title class="justify-center">{{p.name}}</v-card-title>
        <v-card-text class="text-center">
            <p>{{p.desc}}</p>
            <inner-image-zoom :src="p['tn-image-link']" :zoomSrc="p['image-link']" />

           
        </v-card-text>
        <v-card-actions class="justify-center">
            <v-spacer></v-spacer>
            <v-btn icon x-large color="red" @click="buyProduct(p)">
                <v-icon>
                    mdi-basket
                </v-icon>
            </v-btn>
            <v-btn icon x-large color="green" @click="goToVideoplayer()">
                <v-icon>
                    mdi-video
                </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</v-col>



  </v-row>
  
            <v-img
            :src="link_azure"
            height="150"
            width="150"
            contain
            style="position:absolute;top:190px; left:1300px"
            >
            POWERED BY</v-img> 

</v-app>
  
</template>

<script>
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';
import axios from 'axios';
export default {
    name:'ProductCard',
    components:{
            'inner-image-zoom': InnerImageZoom
    },
    data(){
        return{
            posts:[],
            error: [],
            link_aws: "https://cdbstorage01.blob.core.windows.net/images/Amazon_Web_Services_Logo.svg",
            link_azure:"https://cdbstorage01.blob.core.windows.net/images/Microsoft_Azure_Logo.svg",
            showDialog:false,
            headers:[
                {
                    text:'ID',
                    align:'start',
                    value:'id'
                },
                {
                    text:'Name', value:'name'
                },
                {
                    text:'Beschreibung', value:'desc'
                }
            ]
        }
    },
    methods:{
        goToVideoplayer(){
            this.$router.push({path:'videoplayer'})
        },
        async buyProduct(p){
         try {
             const response = await axios.post("https://queueorder.azurewebsites.net/api/queueorder",{pid:p.id})
             if(response.status === "200"){
                 alert("Bestellung aufgegeben; SMS kommt")
             }
         } catch (e) {
             this.error.push(e)
             alert("Fehler beim Aufgeben der Bestellung")
         }

        }

        
    },
     async created(){
         try {
             const response = await axios.get("https://fetchproducts.azurewebsites.net/api/pfetch")
             this.posts = response.data
         } catch (e) {
             this.error.push(e)
         }
     },

}
</script>


<style>

</style>
