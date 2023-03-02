import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { BookingEntity } from '../entitites/bookingEntity';

export default function EditScreen(props: any) {
    const booking: BookingEntity = props.route.params.booking;

    return (
        <View>
            <Text>{booking.name}</Text>
            <Text>{booking.numberOfPeople}</Text>
            <Text>{booking.phone}</Text>
            <Text>{booking.email}</Text>
            <Text>{booking.comment}</Text>
        </View>
    )
}