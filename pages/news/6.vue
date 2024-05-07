<template>
    <Title>{{ $t('event_6_vue.title') }}</Title>
    <!-- <EventTemplate :title="$t('event_6_vue.title')" :subtitle="$t('event_6_vue.subtitle')"
        :date="$t('event_6_vue.date')" :location="$t('event_6_vue.location')"
        :images="['/event/event6/1.jpg', '/event/event6/2.jpg', '/event/event6/3.jpg', '/event/event6/4.jpg', '/event/event6/5.gif',]">
        {{ $t('event_6_vue.content') }}
    </EventTemplate> -->


    <div class="pageContent-container" style="max-width: 100%; width: 1024px">
        <div style="width: 100%; padding: 10px 20px; max-width: 1200px;">
            <div class="font-big" style="align-self: flex-start; padding: 20px 0 0 0; font-weight: 600; color: #6d0e77">
                {{ $t('event_6_vue.title') }}</div>
            <div class="font-middle" style="padding: 8px 0">{{ $t('event_6_vue.subtitle') }}</div>
            <div class="font-small" style="display: flex; align-items: center; padding: 5px 0"><img
                    :src="'/image/calendargray.png'" style="width: 50px; padding: 0 9px">{{ $t('event_6_vue.date') }}
            </div>
            <div class="font-small" style="display: flex; align-items: center; padding: 5px 0"><img
                    :src="'/image/location4gray.png'" style="width: 50px; padding: 0 9px">{{ $t('event_6_vue.location')
                }}
            </div>
        </div>

        <div class="container" style="">
            <!-- <label class="font-big" style="font-weight: 600; padding: 0 0 20px 0">2023</label> -->
            <div style="display: flex; height: 300px;">
                <div
                    style="color: white; display: flex; justify-content: space-between; flex-direction: row; width: 100%; flex: 1">
                    <div class="imageDisplayer" style="">

                        <img v-show="isImg" ref="image" :src="url"
                            style="width: 100%; height: 100%; border: 1px solid white; object-fit: cover; ">

                        <video v-show="!isImg" ref="myVideo" id="myVideo"
                            style="width: 100%; height: 100%; border: 1px solid white; object-fit: cover;" autoplay
                            muted loop playsinline webkit-playsinline>
                            <source :src="'/event/event6/5.mp4'" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="pc" style="width: 100%; height: 450px; padding: 0 20px; ">
                    <div class="font-event-gallery" style="text-align: justify;">
                        <!-- <slot /> -->
                        <div style="line-height: 1.5">
                            {{ $t('event_6_vue.content') }}
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;">
                <div v-for="image in images" :key="image" class="image-container2"
                    style="aspect-ratio: 4/3; overflow: hidden;" @click="setImage(image)"
                    :class="{ active: url == image }">
                    <img :src="image" style="height: 100%; object-fit: cover;" />
                    <div></div>
                </div>
            </div>
            <div class="mobile" style="width: 100%; padding: 10px;">
                <!-- <div class="font-middle" style="color: #6d0e77; font-weight: 600; padding: 10px 0 0px 0;">{{ title }}
                </div> -->
                <div v-if="subtitle" class="font-small" style="color: #6d0e77; font-weight: 600; padding: 0 0 10px 0;">
                    {{ subtitle }}</div>
                <div class="font-mini" style="text-align: justify;">
                    <slot />
                    {{ $t('event_6_vue.content') }}
                </div>
            </div>
        </div>

    </div>


</template>

<script>
// import { truncate } from 'fs';

export default {
    props: {
        title: {
            type: String,
            default: "Title"
        },
        subtitle: {
            type: String,
            default: null
        },
        images: {
            type: Array,
            default: function () {
                return ['/event/event6/1.jpg', '/event/event6/2.jpg', '/event/event6/3.jpg', '/event/event6/4.jpg', '/event/event6/5.jpg']
            }
        }
    },
    data() {
        return {
            url: null,
            isImg: true,
        }
    },
    methods: {
        setImage(url) {
            if (url == this.images[4]) {
                this.isImg = false
            } else {
                this.isImg = true
            }

            this.url = url
        }
    },
    mounted() {
        this.setImage(this.images[0])
    }
}
</script>



<style scoped>
.container {
    display: flex;
    padding: 20px;
    width: 100%;
    flex-direction: column;
    max-width: 1200px;
}




.image-container2 {
    position: relative;
    height: max-content;
    flex-basis: 100%;
    cursor: pointer;
    border: 1px solid white;
    transition: all .1s ease-in-out;
}

.image-container2 img {
    width: 100%;
    height: auto;
}

.image-container2 div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    opacity: 0.5;
    z-index: 1;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
}

.image-container2:hover {
    transform: scale(1.2);
    z-index: 2;
}

.image-container2:hover div {
    opacity: 0;
}

.image-container2.active div {
    opacity: 0;
}

.imageDisplayer {
    width: 450px;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    max-width: 100%;
}

@media screen and (max-width: 1199.9px) {
    .imageDisplayer {
        width: 100%;
    }

    .pc {
        display: none;
    }
}

@media screen and (min-width: 1200px) {
    .mobile {
        display: none;
    }
}
</style>
