<template>
  <Head>
    <Title>iCar</Title>
    <Meta name="description" content="$t('icar.description')"/>
  </Head>
  <div class="cuhkicar-wrapper">
    <PageCatalog2 @click="scroll" :title='"iCar"' :list="[$t('icar.navbar[0]' ), $t('icar.navbar[1]'), $t('icar.navbar[2]' ), $t('icar.navbar[3]' ), $t('icar.navbar[4]' ), $t('icar.navbar[5]' ), $t('icar.navbar[6]' )]"/>
    <PageCatalog3 @click="scroll" :title='"iCar"' 
      :list='["/image/materials/logo_icar3.png", 
              "/image/materials/logo_question2.png", 
              "/image/materials/logo_moraldilemma.png", 
              "/image/materials/logo_facereg.png", 
              "/image/materials/logo_handdraw.png", 
              "/image/materials/logo_food3.png",
              "/image/materials/logo_download.png"]'/>
    <div class="cuhkicar-container" >
      <div class="page-content" ref="content">
        <TextTitle :image="'/image/materials/logo_icar3.png'">{{$t('icar.navbar[0]')}}</TextTitle>
        <div class="text-content font-small text-content-responsive">
          <div class="text">
            {{$t('icar.content')}} 
          </div>
          <div class="appDownloader"  style="">
            <img :src="'/image/iCarF2.png'" style="width: 200px">
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.eduairhk.cuhkicarapp&hl=en_US" target="_blank">
                <img :src="'/image/app/googleplay.png'" style="height: 50px; margin: 10px 5px" />
              </a>
              <a href="https://apps.apple.com/us/app/cuhk-icar-app/id6462405334" target="_blank">
                <img :src="'/image/app/apple.png'" style="height: 50px; margin: 10px 5px" />
              </a>
            </div>
          </div>

        </div>
        <TextTitle :image="'/image/materials/logo_question2.png'">{{$t('icar.navbar[1]')}}</TextTitle>
        <div class="text-content font-small">
          <div style="display: flex; flex-direction: row; padding: 0; justify-content: center; padding-top: 0; flex-wrap: wrap">
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-left: 15px; margin-right: 15px; margin-top: 25px;">
              {{$t('icar.Area2.title[0]')}}
              <div class="imageContainer">
                <img :src="'/image/materials/logo_blockly.png'" style="height: 90%">
              </div>
            </div>
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-left: 15px; margin-right: 15px; margin-top: 25px">
              {{$t('icar.Area2.title[1]')}}
              <div class="imageContainer">
                <img :src="'/image/materials/logo_app.png'" style="height: 90%">
              </div>
            </div>
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-left: 15px; margin-right: 15px; margin-top: 25px">
              {{$t('icar.Area2.title[2]')}}
              <div class="imageContainer">
                <img :src="'/image/materials/logo_remote.png'" style="height: 70%">
              </div>
            </div>
          </div>
        </div>
        <TextTitle :image="'/image/materials/logo_moraldilemma.png'" :isShowDownload="true" 
          :chiUrl="'https://download.eduairhk.com/道德困境_中文版教材.zip'" 
          :engUrl="'https://download.eduairhk.com/Moral_Dilemma_English_Materials.zip'">{{$t('icar.navbar[2]')}}</TextTitle>
        <div class="text-content font-small">
          <img :src="'/image/gif/gif_moral2.gif'" style="width: 50%; min-width: 250px"><br>
          {{$t('icar.Area3.content')}}<br><br>
          <TextBox :title="$t('icar.Area3.question_title')" :image="'/image/materials/logo_think2.png'">
            {{$t('icar.Area3.question[0]')}}<br>
            {{$t('icar.Area3.question[1]')}}<br>
            {{$t('icar.Area3.question[2]')}}<br>
          </TextBox>
        </div>
        <TextTitle :image="'/image/materials/logo_facereg.png'" :isShowDownload="true" 
          :chiUrl="'https://download.eduairhk.com/人面識別追蹤_中文版教材.zip'" 
          :engUrl="'https://download.eduairhk.com/Face_Following_English_Materials.zip'">{{$t('icar.navbar[3]')}}</TextTitle>
        <div class="text-content font-small">
          <img :src="'/image/gif/gif_face2.gif'" style="width: 50%; min-width: 250px"><br>
          {{$t('icar.Area4.content[0]')}}<br>
          {{$t('icar.Area4.content[1]')}}<br><br>
          <TextBox :title="$t('icar.Area3.question_title')" :image="'/image/materials/logo_think2.png'">
            {{$t('icar.Area4.question[0]')}}<br>
            {{$t('icar.Area4.question[1]')}}<br>
            {{$t('icar.Area4.question[2]')}}<br>
          </TextBox>
        </div>
        <TextTitle :image="'/image/materials/logo_handdraw.png'" :isShowDownload="true" 
          :chiUrl="'https://download.eduairhk.com/手畫線循跡_中文版教材.zip'" 
          :engUrl="'https://download.eduairhk.com/Line_Tracking_English_Materials.zip'">{{$t('icar.navbar[4]')}}</TextTitle>
        <div class="text-content font-small">
          <img :src="'/image/gif/gif_line2.gif'" style="width: 50%; min-width: 250px"><br>
          {{$t('icar.Area5.content[0]')}}<br>
          {{$t('icar.Area5.content[1]')}}<br><br>
          <TextBox :title="$t('icar.Area3.question_title')"  :image="'/image/materials/logo_think2.png'">
            {{$t('icar.Area5.question[0]')}}<br>
            {{$t('icar.Area5.question[1]')}}<br>
            {{$t('icar.Area5.question[2]')}}<br>
          </TextBox>
        </div>
        <TextTitle :image="'/image/materials/logo_food3.png'" :isShowDownload="true"
          :chiUrl="'https://download.eduairhk.com/送餐實驗_中文版教材.zip'" 
          :engUrl="'https://download.eduairhk.com/Food_Delivery_English_Materials.zip'">{{$t('icar.navbar[5]')}}</TextTitle>
        <div class="text-content font-small" style="display: flex; gap: 50px; flex-direction: column">
          <div style="display: flex; width: 100%; justify-content: space-around; flex-wrap: wrap"> 
            <div style="display: flex; flex-direction: column; width: 28%; align-items: center; min-width: 200px"> 
              {{$t('icar.Area6.title[0]')}}
              <video autoplay muted loop playsinline webkit-playsinline style="width: 100%">
                <source :src="'https://video.eduairhk.com/food_skill.mp4'">
              </video>
              {{$t('icar.Area6.subtitle[0]')}}
            </div>
            <div style="display: flex; flex-direction: column; width: 28%; align-items: center; min-width: 200px"> 
              {{$t('icar.Area6.title[1]')}}
              <video autoplay muted loop playsinline webkit-playsinline style="width: 100%">
                <source :src="'https://video.eduairhk.com/food_rule.mp4'">
              </video>
              {{$t('icar.Area6.subtitle[1]')}}
            </div>
            <div style="display: flex; flex-direction: column; width: 28%; align-items: center; min-width: 200px"> 
              {{$t('icar.Area6.title[2]')}}
              <video autoplay muted loop playsinline webkit-playsinline style="width: 100%">
                <source :src="'https://video.eduairhk.com/food_knowledge.mp4'">
              </video>
              {{$t('icar.Area6.subtitle[2]')}}
            </div>
          </div>
          <div >
            {{$t('icar.Area6.content')}}
          </div>
        </div>
        <TextTitle :image="'/image/materials/logo_download.png'">{{$t('icar.navbar[6]')}}</TextTitle>
        <div class="text-content font-small" style="display: flex; gap: 50px">
          <DownloadTable :source='download' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CUHK-iCar',
  data(){
    return {
        download: [
          {
            action: 'download',
            name: this.$t('icar.Area7.name[1]'),
            size: '3 MB',
            type: 'zip',
            url: 'https://download.eduairhk.com/iCar_hex.zip'
          },
          {
            action: 'clipboard',
            name: this.$t('icar.Area7.name[2]'),
            size: '-',
            type: '-',
            url: 'https://github.com/hitkuangye/CUHK_JC_iCar_V2'
          }
        ]
      }
  },
  methods: {
    scroll (index) {
      this.$nextTick(function () {
        window.setTimeout(() => {
          if (index === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          } else {
            const target = this.$refs.content.getElementsByClassName('text-title')[index]
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 1)
      })
    }
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler (newParams, oldParams) {
        if (newParams) {
          this.scroll(newParams.replace('#', ''))
        }
      }
    }
  }
}
</script>

<style scoped>
  .cuhkicar-wrapper{
    width: 100%; 
    max-width: 1200px;
    height: min-content; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 60px;
    animation: fadeIn 1s ease-in-out; 

  }

  .cuhkicar-container{
    overflow: hidden;
    width: 100%;
    padding: 0 0;
  }



  .page-content{
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    width: 100%;
  }

  .page-content .text-content{
    position: relative;
    line-height: 40px;
    max-width: 100%;
    padding: 10px 0 50px 0;
    width: calc(100% );

  }

  .text-content-responsive{
        display: flex; 
    flex-direction: row
  }

  .text-content .text{
    width: 70%;
    padding-bottom: 30px;
  }

  .imageContainer{
    margin-top: 0; width: 300px; height: 300px; padding: 5px 0; background: orange; display: flex; justify-content: center; border-radius: 10px;  align-items: center
  }

  .appDownloader{
    display: flex; flex-direction: column; 
    align-items: center; 
    justify-content: center;
  }
  .appDownloader div{
    display: flex; 
    justify-content: center;
    height: max-content;
  }


  .imageContainer img{
    transition: all .3s ease-in-out;
  }

  .imageContainer:hover img{
    transform: scale(1.2);
  }

  
  @media screen and (max-width: 1199.9px) {
    .text-content-responsive{
      flex-direction: column;
    }

    .page-content .text-content .text{
      width: 100%;
    }
    .imageContainer{
      width: 250px; height: 250px;
    }
    .appDownloader div{
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1199.9px){
    .cuhkicar-wrapper{
      flex-direction: row;
      padding: 0;
    }

    .cuhkicar-container{
      padding: 60px 30px;
    }
  }
</style>
