import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'This action returns a #${id} song';
  }
  @Put(':id')
  update() {
    return 'This action updates a #${id} song';
  }
  @Delete(':id')
  delete() {
    return 'This action deletes a #${id} song';
  }
}
