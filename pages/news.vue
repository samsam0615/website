<template>
    <Head>
        <Title>{{$t('navbar.news')}}</Title>
        <Meta name="description" content=""/>
    </Head>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; justify-content: center;">
        <div class="banner">
            <label class="title font-big">
                {{$t('navbar.news')}}
            </label>
        </div>
        <div class="text" > 
            <div class="border"> 
                <div class="font-middle" style="color: #6d0e77; font-weight: 600; padding: 0 0 0px 0;">
                    <a  style="text-decoration-color: blue ;color: blue"
                    target="_blank"
                    href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&lang=zh">
                    {{$t('news.title1')}}
                    </a>
                    {{$t('news.title2')}}
                </div>
                <div class="font-small" style="color: #6d0e77; font-weight: 600; padding: 0 0 15px 0;">{{$t('news.head')}}</div>
                <div class="font-mini" style="line-height: 30px;"> 
                {{$t('news.content[0]')}}
                <br><br>
                {{$t('news.content[1]')}}
                <br><br>
                {{$t('news.content[2]')}}
                <br><br>
                <a  style="text-decoration-color: blue ;color: blue"
                    target="_blank"
                    href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&lang=zh">{{$t('news.content[3]')}}</a>
                </div>
            </div>
        </div>

        <div style="width: 100%; padding: 10px 20px; max-width: 1024px;">
            <div class="font-big" style="align-self: flex-start; padding: 20px 0; font-weight: 600">{{$t('news.Area1.title')}} 🗓️</div>
            <div style="display: flex; max-width: 1024px; justify-content: flex-start; align-content: flex-start; align-items: flex-end; flex-wrap: wrap; gap: 20px;">
                <Gallery2 
                    :title="$t('news.Area1.head')"
                    :subtitle="''"
                    :url="'/event/5'"
                    :image="'/event/event5/1.jpg'"
                    :date="$t('news.Area1.date')">
                </Gallery2>
                
                <Gallery2 
                    :title="$t('news.Area2.title')"
                    :subtitle="$t('news.Area2.subtitle')"
                    :url="'/event/4'"
                    :image="'/event/event4/1.jpg'"
                    :date="$t('news.Area2.date')">
                </Gallery2>
                <Gallery2 
                    :title="$t('news.Area3.title')"
                    :subtitle="$t('news.Area3.subtitle')"
                    :url="'/event/1'"
                    :image="'/event/event1/2.jpg'"
                    :date="$t('news.Area3.date')">
                </Gallery2>
                <Gallery2 
                    :title="$t('news.Area4.title')"
                    :subtitle="$t('news.Area4.subtitle')"
                    :url="'/event/2'"
                    :image="'/event/event2/3.jpg'"
                    :date="$t('news.Area4.date')">
                </Gallery2>
                <Gallery2 
                    :title="$t('news.Area5.title')"
                    :subtitle="$t('news.Area5.subtitle')"
                    :url="'/event/3'"
                    :image="'/event/event3/2.jpg'"
                    :date="$t('news.Area5.date')">
                </Gallery2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    top: 0;
    overflow: hidden; 
    position: relative;
    background-image: url('~/assets/banner2.jpg');
}

.banner img {
    width: 100%;
    top: 100px;
}
.banner .title{
    color: #6d0e77; 
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
        background: auto 300px;
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
