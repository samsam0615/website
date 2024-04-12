<template>
    <div>
        <NuxtLink class="floating_button" to="/contact">
            <img class="button_img" :src="'/image/floating_contact_us.svg'">
        </NuxtLink>
    </div>
</template>


<style scoped>
.floating_button {
    display: flex;
    align-items: center;
    position: fixed;
    height: 55px;
    width: 55px;
    bottom: 20px;
    right: 20px;
    background-color: rgb(255, 165, 0, 0.9);
    border-radius: 50%;
    text-decoration: none;
    box-shadow: 2px 2px 10px #999;
    z-index: 98;

    transition: all .3s ease-in-out;
}

.floating_button:hover {
    transform: scale(1.1);
}

.button_img {
    display: flex;
    padding: 10px;
    width: 100%;
    height: 100%;
    color: white;
}

.button_text {
    display: none;
}
</style>