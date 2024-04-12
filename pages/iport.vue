<template>

  <Head>
    <Title>iPort</Title>
    <Meta name="description" content="$t('iport.content[0]')" />
  </Head>
  <!-- <PageCatalog4 :list="$tm('iport.navbar')" style="z-index: 1" /> -->
  <!-- <LoginLayer @login="isShowContent = true"/> -->
  <div class="pageContent-container" v-show="isShowContent"
    style="z-index: 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 30px; overflow: visible; max-width: 1200px; width: 100%">
    <div class="page-content" style="width: 100%" ref="content">

      <span class="title font-big">
        {{ $t('iport.navbar[0]') }}
      </span>
      <div class="text-content" style="display: flex; justify-content: center; width: 100%; padding-bottom: 50px;">
        <iPortImage />
      </div>
      <div class="text-content">
        {{ $t('iport.content[1]') }}
      </div>
      <div style="display: flex; align-items: center; justify-content: center;">
        <img :src="'/image/iportDesc6.png'" style="width: 100%; max-width: 900px;" />
      </div>

      <div style="padding: 50px 0 25px 0;">
        <span class="title font-big">{{ $t('iport.navbar[1]') }}</span>
        <div style="padding-top: 15px; display: flex; justify-content: center;">
          <iPortVideoPlayer />
        </div>
      </div>
      <!-- <div class="text-content font-small" style="padding-top: 20px">
        <div
          style="position: relative; min-height: 100px; width: 100%; max-width: 900px; background: red; padding: 0; height: min-content; display: flex; background: red">
          <img :src="'/image/iportui.png'" style="width: 100%; height: auto; padding: 0">
          <div style="width: 100%; height: 100%; background: white; opacity: 0.5; position: absolute; top: 0"></div>
          <a href="https://iport.eduairhk.com" target="_blank" class="btn"
            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 5px 15px">{{ $t('iport.Area2.content') }}</a>
        </div>
      </div> -->


      <!-- <span class="title font-big">{{ $t('iport.navbar[2]') }}</span> -->
      <iPortCententContainer :title="$t('iport.navbar[2]')" :video_url="'https://video.eduairhk.com/iport5.mp4'"
        :question="[$t('iport.Area3.question[0]'), $t('iport.Area3.question[1]'), $t('iport.Area3.question[2]')]"
        :content="$t('iport.Area3.content')" />



      <!-- <span class="title font-big">{{ $t('iport.navbar[2]') }}</span>
      <div class="text-content font-small">
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport5.mp4'" type="video/mp4">
        </video>
        <br>
        {{ $t('iport.Area3.content') }}
        <br><br>
        <TextBox :title="$t('icar.Area3.question_title')" :image="'/image/materials/logo_think2.png'">
          {{ $t('iport.Area3.question[0]') }}<br>
          {{ $t('iport.Area3.question[1]') }}<br>
          {{ $t('iport.Area3.question[2]') }}<br>
        </TextBox>
      </div> -->


      <!-- <span class="title font-big">{{ $t('iport.navbar[3]') }}</span>
      <div class="text-content font-small">
        <div class="font-middle" style="padding: 10px 0">{{ $t('iport.Area4.title[0]') }}</div>
        <div style="display: flex; flex-wrap: wrap">
          <video ref="myVideo2" autoplay muted loop playsinline webkit-playsinline
            style="width: 100%; max-width: 750px">
            <source :src="'https://video.eduairhk.com/iport8.mp4'" type="video/mp4">
          </video>
          <div style="padding: 20px 20px 0 20px">
            {{ $t('iport.Area4.material_needed') }} <br>
            {{ $t('iport.Area4.item[0]') }} <br>
            {{ $t('iport.Area4.item[1]') }} <br>
            {{ $t('iport.Area4.item[2]') }} <br>
            4. iPort <br>
            {{ $t('iport.Area4.item[3]') }} <br>
          </div>
        </div>
        <br>
        <div class="font-middle" style="padding: 10px 0">{{ $t('iport.Area4.title[1]') }}</div>
        <video ref="myVideo3" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport1.mp4'" type="video/mp4">
        </video><br>
        {{ $t('iport.Area4.content') }}
        <br><br>
        <TextBox :title="$t('icar.Area3.question_title')" :image="'/image/materials/logo_think2.png'">
          {{ $t('iport.Area4.question[0]') }}<br>
          {{ $t('iport.Area4.question[1]') }}<br>
        </TextBox>
      </div> -->




      <div style="padding: 50px 0; background-color: transparent;">
        <span class="title font-big">
          {{ $t('iport.navbar[3]') }}
        </span>
        <div class="video_container">
          <div class="video">
            <div>{{ $t('iport.Area4.title[0]') }}</div>
            <video ref="myVideo2" style="border-radius: 10px; width: 100%; height: 100%; object-fit: cover; padding:"
              autoplay muted loop playsinline webkit-playsinline>
              <source :src="'https://video.eduairhk.com/iport8.mp4'" type="video/mp4">
            </video>
          </div>
          <div class="video">
            <div>{{ $t('iport.Area4.title[1]') }}</div>
            <video ref="myVideo2" style="border-radius: 10px; width: 100%; height: 100%; object-fit: cover; padding:"
              autoplay muted loop playsinline webkit-playsinline>
              <source :src="'https://video.eduairhk.com/iport1.mp4'" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="text-content" style="padding-top: 20px;">
          {{ $t('iport.Area4.content') }}
        </div>
        <div class="question_container">
          <div style="display: flex; flex-direction: row; padding: 10px 10px 0 10px ;">
            <div class="font-middle" style="align-content: center;">{{ $t('icar.Area3.question_title') }}</div>
            <img style="height: 40px; padding: 5px 5px 5px 15px;" src="/image/materials/logo_think2.png">
          </div>
          <div style="padding: 10px;">
            <div style="margin-left: 40px;">
              <div style="display: list-item; "> {{ $t('iport.Area4.question[0]') }}<br></div>
              <div style="display: list-item; "> {{ $t('iport.Area4.question[1]') }}</div>
            </div>
          </div>
        </div>
      </div>


      <!-- <span class="title font-big">{{ $t('iport.navbar[4]') }}</span>
      <div class="text-content font-small">
        <video ref="myVideo4" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport2.mp4'" type="video/mp4">
        </video>
        <br>
        {{ $t('iport.Area5.content') }}
        <br><br>
        <TextBox :title="$t('icar.Area3.question_title')" :image="'/image/materials/logo_think2.png'">
          {{ $t('iport.Area5.question[0]') }}<br>
          {{ $t('iport.Area5.question[1]') }}<br>
        </TextBox>
      </div> -->

      <iPortCententContainer :title="$t('iport.navbar[4]')" :video_url="'https://video.eduairhk.com/iport2.mp4'"
        :question="[$t('iport.Area5.question[0]'), $t('iport.Area5.question[1]')]"
        :content="$t('iport.Area5.content')" />

      <!-- <span class="title font-big">{{ $t('iport.navbar[5]') }}</span>
      <div class="text-content font-small">

        <div class="font-middle" style="padding: 10px 0">智能廁紙器</div>
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport_tissue.mp4'" type="video/mp4">
        </video>
        <div class="font-middle" style="padding: 10px 0">猜拳大師</div>
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport6.mp4'" type="video/mp4">
        </video>
        <div class="font-middle" style="padding: 10px 0">拍掌聲控開關</div>
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport7.mp4'" type="video/mp4">
        </video>
        <div class="font-middle" style="padding: 10px 0">智能彈珠台</div>
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport9.mp4'" type="video/mp4">
        </video>
        <div class="font-middle" style="padding: 10px 0">寵物餵飼器</div>
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'https://video.eduairhk.com/iport_dog_2.mp4'" type="video/mp4">
        </video>
      </div> -->


      <div style="padding: 50px 0;">
        <span class="title font-big">{{ $t('iport.navbar[5]') }}</span>
        <div class="experiment_container">
          <div class="experiment_video">
            <div class="font-middle" style="padding: 10px 0 5px 0">智能廁紙器</div>
            <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline
              style="width: 100%; border-radius: 10px; overflow: hidden;">
              <source :src="'https://video.eduairhk.com/iport_tissue_2.mp4'" type="video/mp4">
            </video>
          </div>
          <div class="experiment_video">
            <div class="font-middle" style="padding:10px 0 5px 0">猜拳大師</div>
            <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline
              style="width: 100%;  border-radius: 10px;">
              <source :src="'https://video.eduairhk.com/iport6.mp4'" type="video/mp4">
            </video>
          </div>
          <div class="experiment_video">
            <div class="font-middle" style="padding: 10px 0 5px 0">拍掌聲控開關</div>
            <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline
              style="width: 100%;  border-radius: 10px;">
              <source :src="'https://video.eduairhk.com/iport7.mp4'" type="video/mp4">
            </video>
          </div>
          <div class="experiment_video">
            <div class="font-middle" style="padding:10px 0 5px 0">智能彈珠台</div>
            <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline
              style="width: 100%;  border-radius: 10px;">
              <source :src="'https://video.eduairhk.com/iport9.mp4'" type="video/mp4">
            </video>
          </div>
          <div class="experiment_video">
            <div class="font-middle" style="padding: 10px 0 5px 0">寵物餵飼器</div>
            <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline
              style="width: 100%;  border-radius: 10px;">
              <source :src="'https://video.eduairhk.com/iport_dog_2.mp4'" type="video/mp4">
            </video>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.page-content span {
  font-weight: 700;
  padding: 30px 0 30px 0;
  scroll-margin-top: 40px;
  color: #888888
}

.page-content div {
  line-height: 40px;
}

.btn {
  display: flex;
  width: max-content;
  /*  height: 50px;  */
  align-items: center;
  /* width: 200px;  */
  justify-content: center;
  border-radius: 10px;
  border: 3px solid orange;
  color: orange;
  text-decoration: none;
  background: orange;
  color: white;
}

.btn:hover {
  background: orange;
  color: white;
}

.orangeBtn {
  background: orange;
  padding: 0 20px;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  height: 60px;
}

.orangeBtn:hover {
  background: rgb(235, 153, 0);
}

.page-content .text-content {
  position: relative;
  line-height: 40px;
  max-width: 100%;
  padding: 0 100px 20px 100px;
  width: calc(100%);
  text-align: justify;
}


.video_container {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  padding: 0 0px 50px 0px;
}

.video {
  width: 47.5%;
  /* padding: 10px 10px 10px 0; */
}

.video_text_container {
  width: 50%;
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

.experiment_container {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
}

.experiment_video {
  width: 47.5%;
}

@media screen and (max-width: 1199.9px) {

  .page-content .text-content {
    position: relative;
    line-height: 40px;
    max-width: 100%;
    padding: 0px;
    width: calc(100%);
    text-align: justify;
  }

  .video_container {
    display: flex;
    flex-direction: column;
    padding: 0px;
    height: fit-content;
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
    line-height: 30px;
    border-radius: 10px;
  }

  .experiment_container {
    display: flex;
    flex-direction: column;
  }

  .experiment_video {
    min-width: 100%;
  }

}
</style>

<script>
export default {
  name: 'iPort',
  data() {
    return {
      viewWidth: 1024,
      isShowContent: true
    }
  },
  methods: {
    scroll(index) {
      this.$nextTick(function () {
        window.setTimeout(() => {
          if (index === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          } else {
            const target = this.$refs.content.getElementsByTagName('span')[index]
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 1)
      })
    },
    vw(percent) {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      return (percent * w) / 100;
    }
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler(newParams, oldParams) {
        if (newParams) {
          this.scroll(newParams.replace('#', ''))
        }
      }
    }
  },
  mounted() {
    this.$refs.myVideo1.play()
    this.$refs.myVideo2.play()
    // this.$refs.myVideo3.play()
    // this.$refs.myVideo4.play()


    const self = this;
    this.viewWidth = this.vw(50);

    const resizeObserver = new ResizeObserver(entries => {
      self.viewWidth = Math.min(self.vw(50), 1024);
      self.viewWidth = Math.max(self.viewWidth, 300);
    }
    )

    // start observing a DOM node
    resizeObserver.observe(document.body)

  }
}
</script>
