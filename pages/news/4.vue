<template>
    <Title>{{ $t('event_4_vue.title') }}</Title>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px">
        <div style="width: 100%; padding: 10px 20px;">
            <div class="font-big" style="align-self: flex-start; padding: 20px 0 0 0; font-weight: 600; color: #6d0e77">
                {{ $t('event_4_vue.title') }}
            </div>
            <div class="font-middle" style="padding: 8px 0">{{ $t('event_4_vue.subtitle') }}</div>
            <a class="font-small"
                style="display: flex; align-items: center; padding: 5px 0; color: red; font-weight: 600"
                href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&lang=zh"
                target="_blank">
                <img :src="'/image/calendarred.png'" style="width: 50px; padding: 0 9px;">
                {{ $t('event_4_vue.date') }}
            </a>
            <div class="font-small" style="display: flex; align-items: center; padding: 5px 0"><img
                    :src="'/image/location4gray.png'" style="width: 50px; padding: 0 9px">{{ $t('event_4_vue.location') }}
            </div>
        </div>
        <div style="width: 100%; padding: 20px 20px; max-width: 1200px; text-align: justify;" class="font-small">
            {{ $t('event_4_vue.content[0]') }}
            <br><br>
            {{ $t('event_4_vue.content[1]') }}
            <br><br>
            {{ $t('event_4_vue.content[2]') }}
            <br><br>
            <a style="text-decoration-color: blue ;color: blue" target="_blank"
                href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&lang=zh">{{ $t('event_4_vue.content[3]') }}</a>
        </div>
        <div style="width: 100%; padding: 20px; max-width: 1200px">
            <div class="font-middle" style="color: #ffa500; font-weight: 600">{{ $t('event_4_vue.photo') }}</div>
            <div class="event-photo" style="padding: 20px 0">

                <ExpandField2 v-for="(row, index) in rows" :key="index" :isExpand="index == rows.length - 1"
                    :title="row.title" :number="index + 1" :displayArrow="true">
                    <img :src="row.img" style="width: 100%">
                </ExpandField2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: [
                { title: this.$t('event_4_vue.photo_date[0]'), img: '/event/event4/1.jpg' },
                { title: this.$t('event_4_vue.photo_date[1]'), img: '/event/20231020.jpg' },
                { title: this.$t('event_4_vue.photo_date[2]'), img: '/event/20231027.jpg' },
                { title: this.$t('event_4_vue.photo_date[3]'), img: '/event/20231110.jpg' },
                { title: this.$t('event_4_vue.photo_date[4]'), img: '/event/20231124.jpg' },
                { title: this.$t('event_4_vue.photo_date[5]'), img: '/event/20231201.jpg' },
                { title: this.$t('event_4_vue.photo_date[6]'), img: '/event/20231206.jpg' },
                { title: this.$t('event_4_vue.photo_date[7]'), img: '/event/20231219.jpg' },
                { title: this.$t('event_4_vue.photo_date[8]'), img: '/event/20240119.jpg' },
                { title: this.$t('event_4_vue.photo_date[9]'), img: '/event/20240202.jpg' },
                { title: this.$t('event_4_vue.photo_date[10]'), img: '/event/20240301.jpg' },
                { title: this.$t('event_4_vue.photo_date[11]'), img: '/event/20240308.jpg' },
                { title: this.$t('event_4_vue.photo_date[12]'), img: '/event/20240315.jpg' },
                { title: this.$t('event_4_vue.photo_date[13]'), img: '/event/20240412.jpg' },
                { title: this.$t('event_4_vue.photo_date[14]'), img: '/event/20240502.jpg' },
            ]
        }
    }
}
</script>

<style scoped>
.event-photo>*:not(:first-child) {
    margin-top: 20px;
    max-width: 100%;
}
</style>
