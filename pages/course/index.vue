<template>
    <Head>
        <Title>{{$t('navbar.course')}}</Title>
        <Meta name="description" content="$t('course.description')"/>
    </Head>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; justify-content: center;">
        <div class="banner">
            <label class="title font-big">
                {{$t('course.title')}}
            </label>
        </div>
        <div style="width: 100%; padding: 10px 20px; max-width: 1024px;">
                <div style="display: flex; max-width: 1024px; justify-content: flex-start; align-content: flex-start; align-items: flex-end; flex-wrap: wrap; gap: 20px; padding-top: 20px">
                    <Gallery2
                        style="cursor: pointer" :color="'#6F8FB8'" :urlColor="'#6F8FB8'"
                        :height="330"
                        :title="'3D 畫圖及打印'"
                        :url="'/course/1'" @click.stop="navigateTo('/course/1')"
                        :image="'/course/1.jpg'">
                    </Gallery2>
                    <Gallery2 
                        style="cursor: pointer" :color="'#896A4B'" :urlColor="'#896A4B'"
                        :height="330"
                        :title="'人工智能簡介及體驗'"
                        :url="'/course/2'" @click.stop="navigateTo('/course/2')"
                        :image="'/course/2.jpg'">
                    </Gallery2>
                    <Gallery2 :height="330"
                        style="cursor: pointer" :color="'#6F8E30'" :urlColor="'#6F8E30'"
                        :title="'無人機I (基本概念與單飛)'"
                        :url="'/course/3'" @click.stop="navigateTo('/course/3')"
                        :image="'/course/3.jpg'">
                    </Gallery2>
                    <Gallery2 :height="330"
                        style=" cursor: pointer" :color="'#228099'" :urlColor="'#228099'"
                        :title="'無人機II (人工智能 X 無人機)'"
                        :url="'/course/4'" @click.stop="navigateTo('/course/4')"
                        :image="'/course/4.jpg'">
                    </Gallery2>
                    <Gallery2 :height="330"
                        style=" cursor: pointer" :color="'#225991'" :urlColor="'#225991'"
                        :title="'人工智能小車'"
                        :url="'/course/5'" @click.stop="navigateTo('/course/5')"
                        :image="'/course/5.jpg'">
                    </Gallery2>
                    <Gallery2 :height="330"
                        style="cursor: pointer" :color="'#CE915B'" :urlColor="'#CE915B'"
                        :title="'入門編程班 (Microbit X 積木編程)'"
                        :url="'/course/6'" @click.stop="navigateTo('/course/6')"
                        :image="'/course/6.jpg'">
                    </Gallery2>
                    <Gallery2 :height="330"
                        style=" cursor: pointer" :color="'#73608E'" :urlColor="'#73608E'"
                        :title="'Microbit 2 (智能小車)'"
                        :url="'/course/7'" @click.stop="navigateTo('/course/7')"
                        :image="'/course/7.jpg'">
                    </Gallery2>
                    <Gallery2 :height="330"
                        style="cursor: pointer" :color="'#992724'" :urlColor="'#992724'"
                        :title="'iPort (模型訓練與AI實踐體驗)'"
                        :url="'/course/8'" @click.stop="navigateTo('/course/8')"
                        :image="'/course/8.jpg'">
                    </Gallery2>
                </div>
            </div>
    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    overflow: hidden; 
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url('~/assets/banner4.jpg');

}

.banner img {
    width: 100%;
    top: 100px;
}
.banner .title{
    color: #6d0e77; 
    font-size: 40px; 
    font-weight: 800; 
    position: absolute; 
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
}

.text{
    display: flex;
    flex-direction: column;
    width: 1024px; 
    padding: 20px; 
    height: max-content; 
    max-width: 90%; position: relative;
    justify-content: center;
    align-items: center;
}

.text .border{
    padding: 20px; border: 5px solid #6d0e77; border-radius: 20px; width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

@media screen and (max-width: 1199.9px) {
    .banner{
        width: 100%;
        max-width: 100%;
        background: auto 330px;
        background-position-x: 50%;
        background-position-y: 50%;
    }

    .text{
        padding: 0;
    }

    .text .border{
        padding: 20px; 
        border: none; border-radius: 20px; 
    }

    
}

</style>
