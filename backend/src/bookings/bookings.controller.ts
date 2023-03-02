import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingDto } from './entities/booking.dto';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingService : BookingsService) {}

    //Get all bookings
    @Get()
    getBookings() {
        return this.bookingService.findAll();
    }

    //Get by id
    @Get(':id')
    getBookingsByID(@Param('id') id : number) {
        return this.bookingService.findById(Number(id));
    }

    //create booking
    @Post()
    async createBooking(@Body() booking : BookingDto) {
        return this.bookingService.create(booking);
    }

    // update todo
    @Put(':id')
    async updateBooking(@Param('id') id: number, @Body() booking: BookingDto) {
        return this.bookingService.update(id, booking);
    }

    //delete todo
    @Delete(':id')
    async deleteBooking(@Param('id') id: number) {
        this.bookingService.delete(id);
    }
}