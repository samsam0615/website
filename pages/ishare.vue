<template>
  <Head>
    <Title>其他資源</Title>
    <Meta name="description" content="多個網上免費的AI 學習資源，好玩之餘又不用註冊登記，助你輕鬆愉快體驗AI的奇妙。"/>
  </Head>
  <div class = "pageContent-container" style="width: 100%">
    <div class="text-container">
      <label class="subTitle font-big" ref="resource">iShare</label>
      <div class="pageDescription font-small">苦苦搜尋網上免費的AI 學習資源，好玩之餘又不想註冊登記？iShare幫你輕鬆愉快體驗AI的奇妙。</div>
      <br><br>
      <div class="resourceContainer">
        <div class="resourceType">
          <label :class="{active: externalJson != null && externalJson['vision'] == focusClass}" @click="setFocusClass('vision')">視覺</label>
          <label :class="{active: externalJson != null && externalJson['hear'] == focusClass}" @click="setFocusClass('hear')">聽覺</label>
          <label :class="{active: externalJson != null && externalJson['speak'] == focusClass}" @click="setFocusClass('speak')">語音</label>
          <label :class="{active: externalJson != null && externalJson['read'] == focusClass}" @click="setFocusClass('read')">理解</label>
          <label :class="{active: externalJson != null && externalJson['create'] == focusClass}" @click="setFocusClass('create')">創作</label>
          <label :class="{active: externalJson != null && externalJson['advance'] == focusClass}" @click="setFocusClass('advance')">進階</label>
        </div>
        <div class="resourceSelector unselectable">
          <template v-if="externalJson != null">
            <ResourceItem v-for="item in focusClass"
              :key="item.name"
              :text='item.name'
              :url='item.url'
              @click="setFocus(item)"
              @touchleave="setFocus(item)"
              :class="{active: focus == item}"/>
          </template>
        </div>
        <div class="resourceDescriptor" >
          <template v-if="focus != null">
            <div style="position: relative; display: flex; flex-direction: column; flex-grow: 1; max-height: calc(100% - 50px)"> 
              <div class="title font-middle" style="position: relative; padding: 0 0 10px; ">{{focus.name}}</div>
              <div class="description font-mini" style="position: relative; line-height: 35px; padding: 0 10px; overflow-y: auto; height: max-content;">{{focus.description}}</div>
            </div>
            <div class="media" style="height: 50px">
              <a style="font-mini" :href="focus.url" target="_blank">前往網站</a>
              </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultExternalJson from '@/assets/external.js'

export default {
  name: 'Resource',
  data () {
    return {
      focus: null,
      focusClass: null,
      externalJson: null
    }
  },
  mounted () {
    const self = this
    self.externalJson = defaultExternalJson
    self.focusClass = self.externalJson.vision
    self.focus = self.focusClass[0]

    /* axios.get('http://localhost:3000/web/external').then(result => {
        self.externalJson = result.data;
        self.focusClass = self.externalJson.vision;
        self.focus = self.focusClass[0]
    }).catch(error => {
        console.log(error)
    }) */
  },
  methods: {
    setFocus (item) {
      this.focus = item
    },
    setFocusClass (className) {
      this.focusClass = this.externalJson[className]
      this.focus = this.focusClass[0]
    }
  }
}
</script>

<style scoped>
.resourceContainer{
    width: 100%;
    height: 360px;
    display: flex;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.16);
}

.resourceType{
    width: 17%;
    display: flex;
    flex-direction: column;
}

.resourceType label{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.16);
}

.resourceType label:hover{
    background: gainsboro;
    cursor: pointer;
}

.resourceType label.active{
    background: gainsboro;
    cursor: pointer;
}

.resourceSelector{
    display: flex;
    width: 500px;
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 20px;
    overflow-y: auto;
}

.resourceDescriptor{
    width: 400px;
    height: 100%;
    display: flex;
    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
}

.resourceDescriptor .title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    padding-bottom: 10px;
    white-space: break-spaces;
}

.resourceDescriptor .media a{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    background: rgb(112,48,160);
    color: white;
    text-decoration: none;
}

.resourceDescriptor .media a:hover{
    background: rgba(112,48,160, 0.8);
}

.resourceDescriptor .media{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
}

.resourceDescriptor .description{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 45%;
    line-height: 30px;
}

@media screen and (max-width: 800px) {
    .resourceContainer{
        flex-direction: column;
        height: min-content;
        align-items: center;
        width: 100%;
    }

    .resourceType{
        width: 100%;
        display: flex;
        flex-direction: row;
        height: min-content;
    }

    .resourceType label{
        width: calc(100% / 6);
        height: 50px;
        line-height: 50px;
    }

    .resourceSelector{
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    .resourceDescriptor{
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
    }

    .resourceDescriptor div{
        margin-bottom: 20px;
    }

    .resourceDescriptor .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        height: 20%;
    }

    .resourceDescriptor .media{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35%;
    }

    .resourceDescriptor .description{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 45%;
        line-height: 30px;
    }
}

.resourceDescriptor .material-design-icon{
    display: inline-flex;
}

</style>
