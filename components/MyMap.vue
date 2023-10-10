<template>
    <div>
        <GoogleMap api-key="AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY" style="width: 100%; width: 600px; height: 400px; margin-top: 120px" :center="center" :zoom="17">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
    name: 'GoogleMap',
    data () {
        return {
            center: {
                lat: 22.428077697753906,
                lng: 114.20909881591797
            }
        }
    },
    components: { GoogleMap, Marker }
}
</script>