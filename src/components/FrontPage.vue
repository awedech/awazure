<template>
<v-app>
    
<v-row  justify="center">
    <v-col cols="8">
        <h2 align="center">AWAZURE</h2>
        <v-data-table
            :headers="headers"
            :items="posts">
        </v-data-table>
    </v-col>
</v-row>
</v-app>
  
</template>

<script>

import axios from 'axios';

export default {
    data(){
        return{
            posts : [],
            error: [],
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
    async created(){
        try {
            const response = await axios.get("https://awazure-apim.azure-api.net/pfetch/pfetch")
            this.posts = response.data
        } catch (e) {
            this.error.push(e)
        }
    }
}
</script>

<style>

</style>
