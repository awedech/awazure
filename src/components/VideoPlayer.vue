<template>
  <video id="vid1" class="azuremediaplayer amp-default-skin" autoplay controls width="640" height="400" data-setup='{"nativeControlsForTouch": false}'>
        <source src="https://basicendpoint-videoservice-euwe.streaming.media.azure.net/346add08-947a-4949-945b-78fa0b5e55c9/Awazure Jewelry-1.ism/manifest" type="application/vnd.ms-sstr+xml" />
        <p class="amp-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
        </p>
    </video>
</template>

<script>
export default {

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