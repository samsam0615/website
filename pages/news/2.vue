<template>
    <Title>{{$t('event_2_vue.title')}}</Title>
    <EventTemplate 
        :title="$t('event_2_vue.title')"
        :subtitle="$t('event_2_vue.subtitle')"
        :date="$t('event_2_vue.date')"
        :location="$t('event_2_vue.location')"
        :images="['/event/event2/3.jpg', '/event/event2/4.jpg', '/event/event2/2.jpg', '/event/event2/5.jpg', '/event/event2/1.jpg', ]"
    >
    {{$t('event_2_vue.content')}}
</EventTemplate>
</template>
