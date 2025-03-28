import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs: any[] = [];

  create(song: any) {
    // save the song to db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // get all songs from db
    // Errrors comes while fetching from db
    // throw new Error('Error while fetching songs from db');
    return this.songs;
  }
}
