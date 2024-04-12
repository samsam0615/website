<template>
    <div style="padding: 50px 0; background-color: transparent;">
        <span class="title font-big">
            {{ title }}
        </span>
        <div class="video_container">
            <div class="video">
                <video ref="myVideo" style="border-radius: 10px; width: 100%; height: 100%; object-fit: cover; padding:"
                    autoplay muted loop playsinline webkit-playsinline>
                    <source :src="video_url" type="video/mp4">
                </video>
            </div>
            <div class="video_text_container">
                <div class="video_text">
                    {{ content }}
                </div>
            </div>
        </div>
        <div class="question_container">
            <div style="display: flex; flex-direction: row; padding: 10px 10px 0 10px ;">
                <div class="font-middle" style="align-content: center;">{{ $t('icar.Area3.question_title') }}</div>
                <img style="height: 40px; padding: 5px 5px 5px 15px;" src="/image/materials/logo_think2.png">
            </div>
            <div style="padding: 10px;">
                <div style="margin-left: 40px;" v-for="q in question" :key="q">
                    <div style="display: list-item;">
                        {{ q }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['title', 'video_url', 'content', 'question'],
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        this.$refs.myVideo.play()
    }
}
</script>

<style scoped>
.title {
    font-weight: 700;
    color: #888888;
}

.video_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0px 20px 0px;
}

.video {
    width: 70%;
    padding: 10px 10px 10px 0;
}

.video_text_container {
    width: 30%;
    margin: 0 30px 0 30px;
    display: flex;
    text-align: justify;
    align-items: center;
}

.video_text {
    height: fit-content;
    /* background-color: #F2F3F5; */
    padding: 10px 20px 10px 20px;
    /* line-height: 50px; */
    /* border-radius: 10px; */
    line-height: 40px;
    /* letter-spacing: 1.5px; */
}

.question_container {
    border: 3px solid orange;
    border-radius: 10px;
    padding: 10px;
    line-height: 40px;
}


@media screen and (max-width: 1199.9px) {

    .video_container {
        display: flex;
        flex-direction: column;
        padding: 0px;
    }

    .video {
        width: 100%;
        padding: 0;
    }

    .video_text_container {
        width: 100%;
        margin-left: 0px;
        padding: 10px 0 10px 0;
    }

    .video_text {
        height: fit-content;
        padding: 10px 0 10px 0;
        /* line-height: 30px; */
        border-radius: 10px;
    }

}
</style>