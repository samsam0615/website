<template>

    <Head>
        <Title>iStore</Title>
        <Meta name="description" content="" />
    </Head>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; ">
        <div class="banner">
            <label class="title font-big">
                iStore
            </label>
        </div>
        <div class="store_container">
            <div
                style="display: flex; max-width: 1024px; justify-content: flex-start; align-content: flex-start; align-items: flex-end; flex-wrap: wrap; gap: 20px; padding-top: 20px">
                <Gallery5 style="cursor: pointer" :color="'#ffa500'" :urlColor="'#ffa500'" :height="330" :title="'iCar'"
                    :subtitle="'$999.0'" :url="''" @click.stop="" :image="'/image/store/icar.jpg'">
                </Gallery5>
                <Gallery5 style="cursor: pointer" :color="'#ffa500'" :urlColor="'#ffa500'" :height="330" :title="'iPort'"
                    :subtitle="'$999.0'" :url="''" @click.stop="" :image="'/image/store/iport.jpg'">
                </Gallery5>
                <Gallery5 style="cursor: pointer" :color="'#ffa500'" :urlColor="'#ffa500'" :height="330" :title="'iCar'"
                    :subtitle="'$999.0'" :url="''" @click.stop="" :image="'/course/1.jpg'">
                </Gallery5>
                <Gallery5 style="cursor: pointer" :color="'#ffa500'" :urlColor="'#ffa500'" :height="330" :title="'iCar'"
                    :subtitle="'$999.0'" :url="''" @click.stop="" :image="'/course/1.jpg'">
                </Gallery5>
            </div>
        </div>
    </div>
</template>

<style scoped>
.banner {
    width: 100%;
    height: 300px;
    background-size: cover;
    top: 0;
    overflow: hidden;
    position: relative;
    background-image: url('~/assets/banner5.jpg');
}

.banner img {
    width: 100%;
    top: 100px;
}

.banner .title {
    color: #6d0e77;
    font-weight: 800;
    font-size: 40px;

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: auto;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
}

.store_container {
    width: 100%;
    padding: 10px 20px;
    max-width: 1024px;
}


@media screen and (max-width: 1199.9px) {
    .banner {
        width: 100%;
        max-width: 100%;
        background: auto 300px;
        background-position-x: 50%;
        background-position-y: 50%;
    }
}
</style>
