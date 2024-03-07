<template>
    <Title>{{$t('event_1_vue.title')}}</Title>
    <EventTemplate 
        :title="$t('event_1_vue.title')"
        :subtitle="$t('event_1_vue.subtitle')"
        :date="$t('event_1_vue.date')"
        :location="$t('event_1_vue.location')"
        :images="['/event/event1/2.jpg', '/event/event1/5.jpg', '/event/event1/4.jpg', '/event/event1/1.jpg', '/event/event1/3.jpg', ]"
    >
    {{$t('event_1_vue.content')}}
    </EventTemplate>
</template>
