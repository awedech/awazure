<template>
<v-app>
    <v-row class="justify-center">
        <span>BITTE KAUFEN SIE UNSERE PRODUKTE!!</span>
        <h1>BITTE</h1>
        <h2>SCHNELL</h2>
        
    </v-row>
    <v-row>
    <v-col v-for="p in posts" :key="p.id" cols="2">    
    <v-card max-height="450">
        <v-card-title class="justify-center">{{p.name}}</v-card-title>
        <v-card-text class="text-center">
            <p>{{p.desc}}</p>
            <v-img
            :src="link"
            height="200"
            width="200"
            style="position:relative;left:30px"
            ></v-img>
        </v-card-text>
        <v-card-actions class="justify-center">
            <v-spacer></v-spacer>
            <v-btn icon x-large color="red">
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

</v-app>
  
</template>

<script>
//import axios from 'axios';

export default {
    name:'ProductCard',
    data(){
        return{
             posts : [{"id": "1", "name": "ruby", "desc": "A red and beautiful ruby"},
                {"id": "5", "name": "ruby", "desc": "A red and beautiful ruby"},
                {"id": "5", "name": "ruby", "desc": "A red and beautiful ruby"},
                {"id": "5", "name": "ruby", "desc": "A red and beautiful ruby"},
                {"id": "5", "name": "ruby", "desc": "A red and beautiful ruby"}, 
                {"id ": "2", "name": "sapphire", "desc": "A blue and beautiful sapphire"}, {"id": "3", "name": "emerald", "desc": "A green and beautiful emerald"}],
            error: [],
            link: "https://cdbstorage01.blob.core.windows.net/images/01_ohrring_tn.jpg",
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
        }
    }

    // async created(){
    //     try {
    //         const response = await axios.get("https://awazure-apim.azure-api.net/pfetch/pfetch")
    //         this.posts = response.data
    //     } catch (e) {
    //         this.error.push(e)
    //     }
    // },

}
</script>


<style>

</style>
