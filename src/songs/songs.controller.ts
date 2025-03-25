import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error while fetching songs from db',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
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
