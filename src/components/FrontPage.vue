<template>
<v-app>
    <v-col v-for="p in posts" :key="p.id" cols="4">    
    <v-card>
        <v-card-text>
            <h2>{{p.id}}</h2><br>
            {{p.desc}}
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon
                color="red"
                @click="productClicked(p)">
                <v-icon>
                    mdi-basket
                </v-icon>
                KAUFEN
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</v-col>

<video id="vid1" class="azuremediaplayer amp-default-skin" autoplay controls width="640" height="400" poster="poster.jpg" data-setup='{"nativeControlsForTouch": false}'>
        <source src="https://basicendpoint-videoservice-euwe.streaming.media.azure.net/2c9d856d-4816-42a6-8cf2-3415c044afb8/Watch.ism/manifest
" type="application/vnd.ms-sstr+xml" />
        <p class="amp-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
        </p>
    </video>

</v-app>
  
</template>

<script>

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
    },

    mounted() {
      let azureScript = document.createElement('script')
      azureScript.setAttribute('src', 'https://amp.azure.net/libs/amp/latest/azuremediaplayer.min.js')
      document.head.appendChild(azureScript)
    },
}
</script>


<style>
@import 'https://amp.azure.net/libs/amp/latest/skins/amp-default/azuremediaplayer.min.css';
</style>
