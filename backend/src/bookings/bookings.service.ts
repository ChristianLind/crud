import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { BookingDto } from './entities/booking.dto';

@Injectable()
export class BookingsService {
    constructor(@InjectRepository(Booking) 
        private bookingRepository: Repository<Booking>) {}

    async findAll(): Promise<Booking[]> {
        return await this.bookingRepository.find();
    }

    async findById(id: number): Promise<Booking> {
        return await this.bookingRepository.findOneBy({id: id});
    }

    async create(bookingDto: BookingDto) : Promise<Booking> {
        return await this.bookingRepository.save(bookingDto);
    }

    async update(id: number, booking: BookingDto) : Promise<UpdateResult> {
        return await this.bookingRepository.update(id, booking);
    }

    async delete(id: number) : Promise<DeleteResult> {
        return await this.bookingRepository.delete(id);
    }
}