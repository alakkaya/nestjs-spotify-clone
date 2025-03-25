import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This action adds a new song';
  }
  @Get()
  findAll() {
    return 'This action returns all songs';
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
