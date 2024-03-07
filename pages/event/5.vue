<template>
    <Title>{{$t('event_5_vue.title')}}</Title>
    <EventTemplate 
        :title="$t('event_5_vue.title')"
        :subtitle="''"
        :date="$t('event_5_vue.date')"
        :location="$t('event_5_vue.location')"
        :images="['/event/event5/1.jpg', '/event/event5/2.jpg', '/event/event5/3.jpg', '/event/event5/4.jpg', '/event/event5/5.jpg', ]"
    >
    {{$t('event_5_vue.content')}}
    </EventTemplate>
</template>