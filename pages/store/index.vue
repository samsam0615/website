<template>

    <Head>
        <Title> 購物車</Title>
        <Meta name="description" content="" />
    </Head>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; ">
        <div class="banner">
            <label class="title font-big">
                購物車
            </label>
        </div>
        <div class="store_container">
            <div
                style="display: flex; max-width: 1024px; justify-content: space-between; align-content: flex-start; align-items: flex-end; flex-wrap: wrap; gap: 20px; padding-top: 20px">
                <!-- <GalleryStore style="cursor: pointer" :color="'#6d0e77'" :urlColor="'#ffa500'" :height="400"
                    :title="'iCar套裝'" :subtitle="'一年自攜保用，學校訂購可獲額外8折優惠'" :url="''" @click.stop=""
                    :image="'/image/store/icar.jpg'" :price="'$1650'">
                </GalleryStore>
                <GalleryStore style="cursor: pointer" :color="'#6d0e77'" :urlColor="'#ffa500'" :height="400"
                    :title="'iPort套裝'" :subtitle="'一年自攜保用，學校訂購可獲額外8折優惠'" :url="''" @click.stop=""
                    :image="'/image/store/iport.jpg'" :price="'$1199'">
                </GalleryStore>
                <GalleryStore style="cursor: pointer" :color="'#6d0e77'" :urlColor="'#ffa500'" :height="400"
                    :title="'micro:bit V2裸板'" :subtitle="'一年自攜保用'" :url="''" @click.stop=""
                    :image="'/image/store/microbit.jpg'" :price="'$130'">
                </GalleryStore>
                <GalleryStore style="cursor: pointer" :color="'#6d0e77'" :urlColor="'#ffa500'" :height="400"
                    :title="'Huskylens Pro SEN0336裸板'" :subtitle="'一年自攜保用'" :url="''" @click.stop=""
                    :image="'/image/store/huskylens.jpg'" :price="'$430'">
                </GalleryStore> -->

                <div :style="'400px'" class="gallery_box">
                    <div>
                        <img :src="'/image/store/icar_set.jpg'"
                            style="width: 100%; height: auto; aspect-ratio: 3 / 2; background:#FFEBCD;   border-radius: 5px;">
                        <div style="padding: 10px 10px 10px 10px;">
                            <div class="font-small" style="font-weight: 600; color: #6d0e77;">
                                iCar套裝（獨家供應商）
                            </div>
                            <div class="font-mini">
                                一年自攜保用，學校訂購可獲額外8折優惠
                            </div>
                            <div style="padding-left: 20px; height: 200px;">
                                <div class="font-mini" v-for="t in icar_subtitle" :key="t" style="display: list-item;">
                                    {{ t }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 10px">
                        <div style="color:  #ffa500; line-height: 30px; cursor: pointer; text-decoration: none; text-align: end;
                            font-size: x-large; cursor: default !important;">
                            <span style="color: lightgray; text-decoration: line-through;">HKD$1650</span>
                            HKD$1320
                        </div>
                        <div style="color: #ffa500; text-align: end; font-size:xx-small;">
                            只限學校
                        </div>
                    </div>
                </div>

                <div :style="'400px'" class="gallery_box">
                    <div>
                        <img :src="'/image/store/iport_set.jpg'"
                            style="width: 100%; height: auto; aspect-ratio: 3 / 2; background:#FFEBCD;   border-radius: 5px;">
                        <div style="padding: 10px 10px 10px 10px;">
                            <div class="font-small" style="font-weight: 600; color: #6d0e77;">
                                iPort套裝（原型版）（獨家供應商）
                            </div>
                            <div class="font-mini">
                                一年自攜保用，學校訂購可獲額外8折優惠
                            </div>
                            <div style="padding-left: 20px; height: 200px;">
                                <div class="font-mini" v-for="t in iport_subtitle" :key="t"
                                    style="display: list-item;">
                                    {{ t }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 10px">
                        <div style="color:  #ffa500; line-height: 30px; cursor: pointer; text-decoration: none; text-align: end;
                            font-size: x-large; cursor: default !important;">
                            <span style="color: lightgray; text-decoration: line-through;">HKD$1199</span>
                            HKD$959
                        </div>
                        <div style="color: #ffa500; text-align: end; font-size:xx-small;">
                            只限學校
                        </div>
                    </div>
                </div>

                <div :style="'400px'" class="gallery_box">
                    <div>
                        <img :src="'/image/store/microbit.jpg'"
                            style="width: 100%; height: auto; aspect-ratio: 3 / 2; background:#FFEBCD;   border-radius: 5px;">
                        <div style="padding: 10px 10px 10px 10px;">
                            <div class="font-small" style="font-weight: 600; color: #6d0e77;">
                                micro:bit V2全新裸板
                            </div>
                            <div class="font-mini">
                                一年自攜保用，不含配件
                            </div>
                            <!-- <div style="padding-left: 20px; height: 200px;">
                                <div class="font-mini" v-for="t in iport_subtitle" :key="t" style="display: list-item;">
                                    {{ t }}
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div style="padding: 10px">
                        <div style="color:  #ffa500; line-height: 30px; cursor: pointer; text-decoration: none; text-align: end;
                            font-size: x-large; cursor: default !important;">
                            HKD$130
                        </div>
                        <!-- <div style="color: #ffa500; text-align: end; font-size:xx-small;">
                            只限學校
                        </div> -->
                    </div>
                </div>

                <div :style="'400px'" class="gallery_box">
                    <div>
                        <img :src="'/image/store/huskylens.jpg'"
                            style="width: 100%; height: auto; aspect-ratio: 3 / 2; background:#FFEBCD;   border-radius: 5px;">
                        <div style="padding: 10px 10px 10px 10px;">
                            <div class="font-small" style="font-weight: 600; color: #6d0e77;">
                                Huskylens Pro SEN0336全新裸板
                            </div>
                            <div class="font-mini">
                                一年自攜保用，不含配件
                            </div>
                            <!-- <div style="padding-left: 20px; height: 200px;">
                                <div class="font-mini" v-for="t in iport_subtitle" :key="t" style="display: list-item;">
                                    {{ t }}
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div style="padding: 10px">
                        <div style="color:  #ffa500; line-height: 30px; cursor: pointer; text-decoration: none; text-align: end;
                            font-size: x-large; cursor: default !important;">
                            HKD$430
                        </div>
                        <!-- <div style="color: #ffa500; text-align: end; font-size:xx-small;">
                            只限學校
                        </div> -->
                    </div>
                </div>


            </div>
        </div>
        <div class="text" style="padding: 60px">
            <div class="font-middle" style=" font-weight: 600;">
                歡迎聯絡我們索取正式報價和發票
            </div>
            <NuxtLink to="/contact" style="text-decoration: none">
                <div
                    style="margin-top: 30px; padding: 20px; font-size: 20px; background: orange; color: white; border-radius: 10px; cursor: pointer; display: flex; justify-content: center; min-width: max-content">
                    {{ $t('course.button') }}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },

    data() {
        return {
            icar_subtitle: [
                'Huskylens Pro x 1',
                'micro:bit V2 x 1',
                'USB 線 x 1',
                '細螺絲批（用於安裝 Huskylens Pro）x 1',
                '說明書 x 1'
            ],
            iport_subtitle: [
                'iPort x 1',
                '燈制開關 (Switch Box) x 1',
                '180馬達×1',
                '360馬達×1',
                '延長線 x 1',
                '行動電源 x 1',
                '使用者手冊 x 1',
            ],
        }
    },
    methods: {

    }
}
</script>

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

.gallery_box {
    width: 350px;
    background: #f6f6f8;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* justify-content: ; */
    padding: 0;

    transition: all .3s ease-in-out;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);

    border-radius: 5px;
    cursor: default !important;

}

.gallery_box:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
