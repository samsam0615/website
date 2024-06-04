<template>
  <Head>
    <Title>{{$t('homepage.title')}}</Title>
    <Meta name="description" content="$t('homepage.content')"/>
  </Head>
  <div style="width: 100%" >
    <div class="promote-container video-container" style="overflow: hidden; width: 100%;">
      <VideoBackground />
      <div class="video-description">
        <label class="title font-video-title">{{$t('homepage.slogan')}}</label> <br>
        <label class="content font-video-description">{{$t('homepage.slogan2')}}</label>
      </div>
    </div>
    <div class="promote-container promote-container-2 " v-show="true" >
      <div class="promote-container-content text-container" onclick="" >
        <div class="description-box-title font-big" style="padding: 30px; font-weight: 500">
          <label>{{$t('homepage.area1.title')}}</label>
        </div>
        <div class="responsive-div" style="">
          <div style="width: 300px; height: 300px;"> 
            <img :src="'/event/event6/1.jpg'" style="width: 100%; aspect-ratio: 3 / 2" />
            <div style="text-align: justify;">
              {{$t('homepage.area1.content1')}}
            </div>
          </div>
          <div style="width: 300px; height: 300px"> 
            <img :src="'/event/event5/1.jpg'" style="width: 100%; aspect-ratio: 3 / 2" />
            <div style="text-align: justify;">
              {{$t('homepage.area1.content2')}}
            </div>
          </div>
          <div style="width: 300px; height: 300px"> 
            <img :src="'/event/event4/1.jpg'" style="width: 100%; aspect-ratio: 3 / 2" />
            <div style="text-align: justify;">
              {{$t('homepage.area1.content3')}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="promote-container promote-container-1 " v-show="true" >
      <div class="promote-container-content text-container" onclick="" >
        <div class="description-box-title font-big" style="padding: 30px; font-weight: 500">
          <label>{{$t('homepage.services[0].title')}}</label>
        </div>
        <div class="responsive-div" style="">

          <PictureFrame :title="$t('homepage.services[1].head')" :image="'/image/img0.jpg'">
            {{$t('homepage.services[1].content')}}
          </PictureFrame>
          <PictureFrame :title="$t('homepage.services[2].head')" :image="'/image/img1.jpg'">
            {{$t('homepage.services[2].content')}}
          </PictureFrame>
          <PictureFrame :title="$t('homepage.services[3].head')"  :image="'/image/img2.jpg'">
            {{$t('homepage.services[3].content')}}
          </PictureFrame>
        </div>
      </div>
    </div>
    <div class="promote-container promote-container-2">
      <div class="promote-container-content text-container" onclick="">
        <div class="description-box-title font-big" style="padding: 30px; font-weight: 500">
          <label>{{$t('homepage.progress[0].title')}}</label>
        </div>
        <div style="display: flex; justify-content: center; width: 100%; gap: 50px; padding-top: 20px; flex-wrap: wrap">
          <UpCounter :text1="$t('homepage.progress[1].head')" :text2="$t('homepage.progress[1].tail')" :image='"/image/materials/work_history.png"' :number='5' />
          <UpCounter :text1="$t('homepage.progress[2].head')" :text2="$t('homepage.progress[2].tail')" :image='"/image/materials/teacher2.png"' :number='6' />
          <UpCounter :text1="$t('homepage.progress[3].head')" :text2="$t('homepage.progress[3].tail')" :image='"/image/materials/school2.png"' :number='238' />
          <UpCounter :text1="$t('homepage.progress[4].head')" :text2="$t('homepage.progress[4].tail')" :image='"/image/materials/people.png"' :number='2560' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: this.$t('homepage.title'),
      meta: [
        {hid: 'og:title', name:'og:title' , content: this.$t('homepage.title')},
      ],
    }
  }
}
</script>

<style scoped>
.responsive-div{
  display: flex; justify-content: center; width: 100%; gap: 50px; padding-top: 20px
}

@media screen and (max-width: 1199.9px) {
  .responsive-div{
    flex-direction: column;
    align-items: center;
  }
}
</style>

<style >
    .promote-container{
        position: relative;
        width: 100%;
        display: flex;
        justify-content:center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .promote-container-content{
        position: relative;
        width: 100%;
        display: flex;
        justify-content:center;
        height: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 50px;
    }

    @media screen and (max-width: 767px) {
        .promote-container {
            padding: 20px 0;
        }
        .promote-container-content{
            padding: 0;
        }

        .video-container{
            padding: 0;
        }
    }

    .promote-container-1{
        background-color: #ececec ;
    }

    .promote-container-2{
        background-color: #ffffff ;
    }

    .promote-element{
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid white;
    }

    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
    }

    .video-description{
      position: absolute;
      width: 40%;
      right: 20px;
      /* border-radius: 10px; */
      text-shadow: black 3px 3px 10px;
      color: white;
    }
</style>
