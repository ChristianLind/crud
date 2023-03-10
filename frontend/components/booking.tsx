import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BookingEntity } from '../entitites/bookingEntity';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackMain } from './navigation';

type bookingScreenProp = StackNavigationProp<StackMain, 'Edit'>;

export default function Booking({booking}: {booking: BookingEntity}) {
    const navigation = useNavigation<bookingScreenProp>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { booking })}>
            <Text>{booking.name} {booking.phone}</Text>
        </TouchableOpacity>
    )
}