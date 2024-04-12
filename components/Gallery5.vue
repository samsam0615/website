<template>
    <div :style="{ height: height + 'px' }" class="gallery_box">
        <div>
            <img :src="image"
                style="width: 100%; height: auto; aspect-ratio: 3 / 2; background:#FFEBCD;   border-radius: 5px;">
            <div style="padding: 5px 10px 10px 10px ">
                <div class="font-small" :style="{ color: color }" style="font-weight: 600;">{{ title }}</div>
                <div class="font-mini">{{ subtitle }}</div>
            </div>
        </div>

        <div style="padding: 10px">
            <NuxtLink :to="url" :style="{ color: urlColor }"
                style="line-height: 30px; cursor: pointer;   text-decoration: none;">
                <!-- {{ $t('news.more') }} -->
            </NuxtLink>
            <div>{{ date }}</div>
        </div>
    </div>
</template>

<script>
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
        image: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: 400
        },
        color: {
            type: String,
            default: '#6d0e77'
        },
        urlColor: {
            type: String,
            default: '#ffa500'
        }
    }
}
</script>

<style scoped>
.gallery_box {
    width: 300px;
    background: #f6f6f8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;

    transition: all .3s ease-in-out;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);

    border-radius: 5px;
}

.gallery_box:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>