<template>

  <Head>
    <Title>{{ $t('ishare.title') }}</Title>
    <Meta name="description" content="$t('ishare.content')" />
  </Head>
  <div class="pageContent-container" style="width: 100%;">
    <div class="text-container" style="width: 100%; padding: 20px">
      <!-- <label class="pageTitle font-big" ref="resource">iShare</label> -->
      <label class="pageTitle font-big" ref="resource">聯同教育局開發創科課程
      </label>
      <EdbBookletTable />
      <br>
      <br>
      <br>
      <br>

      <label class="pageTitle font-big" ref="resource">AI 學習資源</label>
      <div class="font-small" style="padding-bottom: 20px;">{{ $t('ishare.subtitle') }}</div>
      <div class="resourceContainer">
        <div class="resourceType">
          <label :class="{ active: $tm('ishareJson') != null && $tm('ishareJson')['vision'] == focusClass }"
            @click="setFocusClass('vision')">{{ $t('ishare.abilities[0]') }}</label>
          <label :class="{ active: $tm('ishareJson') != null && $tm('ishareJson')['hear'] == focusClass }"
            @click="setFocusClass('hear')">{{ $t('ishare.abilities[1]') }}</label>
          <label :class="{ active: $tm('ishareJson') != null && $tm('ishareJson')['speak'] == focusClass }"
            @click="setFocusClass('speak')">{{ $t('ishare.abilities[2]') }}</label>
          <label :class="{ active: $tm('ishareJson') != null && $tm('ishareJson')['read'] == focusClass }"
            @click="setFocusClass('read')">{{ $t('ishare.abilities[3]') }}</label>
          <label :class="{ active: $tm('ishareJson') != null && $tm('ishareJson')['create'] == focusClass }"
            @click="setFocusClass('create')">{{ $t('ishare.abilities[4]') }}</label>
          <label :class="{ active: $tm('ishareJson') != null && $tm('ishareJson')['advance'] == focusClass }"
            @click="setFocusClass('advance')">{{ $t('ishare.abilities[5]') }}</label>
        </div>
        <div class="resourceSelector unselectable">
          <template v-if="$tm('ishareJson') != null">
            <ResourceItem v-for="(item, index) in $tm('ishareJson')[focusClass]" :key="item.name" :text='item.name'
              :url='item.url' @click="setFocus(index)" @touchleave="setFocus(index)"
              :class="{ active: focus == index }" />
          </template>
        </div>
        <div class="resourceDescriptor">
          <template v-if="focus != null">
            <div
              style="position: relative; display: flex; flex-direction: column; flex-grow: 1; max-height: calc(100% - 50px)">
              <div class="title font-middle" style="position: relative; padding: 0 0 10px; ">
                {{ $tm('ishareJson')[focusClass][focus].name }}</div>
              <div class="description font-mini"
                style="position: relative; line-height: 35px; padding: 0 10px; overflow-y: auto; height: max-content;">
                {{ $tm('ishareJson')[focusClass][focus].description }}</div>
            </div>
            <div class="media" style="height: 50px">
              <a style="font-mini" :href="$tm('ishareJson')[focusClass][focus].url" target="_blank">{{
      $t('ishare.website') }}</a>
            </div>
          </template>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Resource',
  data() {
    return {
      focus: null,
      focusClass: null,
    }
  },
  mounted() {
    this.setFocusClass(Object.keys(this.$tm('ishareJson'))[0])
  },
  methods: {
    setFocus(index) {
      this.focus = index
    },
    setFocusClass(className) {
      const obj = this.$tm('ishareJson')
      this.focusClass = className
      this.setFocus(0)
    }
  }
}
</script>

<style scoped>
.resourceContainer {
  width: 100%;
  height: 360px;
  display: flex;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.16);
}

.resourceType {
  width: 17%;
  display: flex;
  flex-direction: column;
}

.resourceType label {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.16);
}

.resourceType label:hover {
  background: gainsboro;
  cursor: pointer;
}

.resourceType label.active {
  background: gainsboro;
  cursor: pointer;
}

.resourceSelector {
  display: flex;
  width: 500px;
  height: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 20px;
  overflow-y: auto;
}

.resourceDescriptor {
  width: 400px;
  height: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
}

.resourceDescriptor .title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  padding-bottom: 10px;
  white-space: break-spaces;
}

.resourceDescriptor .media a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  background: rgb(112, 48, 160);
  color: white;
  text-decoration: none;
}

.resourceDescriptor .media a:hover {
  background: rgba(112, 48, 160, 0.8);
}

.resourceDescriptor .media {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
}

.resourceDescriptor .description {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 45%;
  line-height: 30px;
}

@media screen and (max-width: 800px) {
  .resourceContainer {
    flex-direction: column;
    height: min-content;
    align-items: center;
    width: 100%;
  }

  .resourceType {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: min-content;
  }

  .resourceType label {
    width: calc(100% / 6);
    height: 50px;
    line-height: 50px;
  }

  .resourceSelector {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .resourceDescriptor {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .resourceDescriptor div {
    margin-bottom: 20px;
  }

  .resourceDescriptor .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 20%;
  }

  .resourceDescriptor .media {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35%;
  }

  .resourceDescriptor .description {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 45%;
    line-height: 30px;
  }
}

.resourceDescriptor .material-design-icon {
  display: inline-flex;
}
</style>
