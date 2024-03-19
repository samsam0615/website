<template>
    <Title>{{$t('event_3_vue.title')}}</Title>
    <EventTemplate 
        :title="$t('event_3_vue.title')"
        :subtitle="$t('event_3_vue.subtitle')"
        :date="$t('event_3_vue.date')"
        :location="$t('event_3_vue.location')"
        :images="['/event/event3/2.jpg', '/event/event3/1.jpg', '/event/event3/3.jpg', '/event/event3/5.jpg', '/event/event3/4.jpg', ]"
    >
    {{$t('event_3_vue.content')}}
    </EventTemplate>
</template>
