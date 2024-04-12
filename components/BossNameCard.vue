<template>
    <div class="staff-container">
        <div class="staff-image-container">
            <img :src="image">
        </div>
        <div class="staff-description-container">
            <label class="subTitle staffSubTitle font-middle" :style="{ 'border-bottom': '3px solid ' + color }">
                <div style="display: flex; flex-direction: column; padding-top: 15px;">
                    <div style="text-align: center; padding-bottom: 8px;" class="font-big">
                        {{ name }}
                    </div>
                    <div style="text-align: center; font-size: small;">
                        {{ title }}
                    </div>
                </div>
            </label>
            <div class="description">
                <div v-for="t in subtitle" :key="t" style="display: list-item">
                    {{ t }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextBox',
    props: ['name', 'title', 'image', 'color', 'subtitle'],
    methods: {
    }
}
</script>

<style scoped>
.staff-container {
    position: relative;
    display: flex;
    /* flex-basis: 450px; */
    margin: 20px;
    padding: 20px 10px;
    border-radius: 10px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: #f3f3f3;
}

.staff-container.reverse {
    flex-direction: row-reverse;
}

.staff-description-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    align-items: center;
    width: 90%;
    /* background-color: aquamarine; */
}

.staff-image-container {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    display: relative;
    z-index: 1;
    height: 250px;
    width: 250px;
}

.staff-image-container img {
    margin: auto;
    border-radius: 50%;
    width: 100%;
    height: auto;
}


.subDescription {
    font-size: 22px;
}

.description {
    width: 100%;
    overflow-wrap: break-word;
    font-size: 15px;
    padding: 20px 0 0 20px;
    line-height: 30px;
    /* background-color: aqua; */
}

.popup-box-description-container2 .description {
    width: 50%;
    overflow-wrap: break-word;
    font-size: 1.3vw;
}

.staffSubTitle {
    display: flex;
    justify-content: center;
    /* width: 70%; */
    white-space: nowrap;
}

@media screen and (max-width: 1199.9px) {
    .staff-container {
        /* flex-direction: column; */
        /* justify-content: flex-start; */
        align-items: center;
        padding: 25px;
        margin: 10px 0 10px 0;
        width: 100%;
        /* background: aqua; */
        border-radius: 10px;
    }

    .staff-container.reverse {
        flex-direction: column;
    }

    .staff-image-container {
        justify-content: center;
    }

    .staff-image-container img {
        width: 80%;
    }

    .staff-description-container {
        width: 100%;
    }

    /* .subDescription {
        font-size: 21px;
    } */

    /* .description {
        font-size: 18px;
    } */
}
</style>