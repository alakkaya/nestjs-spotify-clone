import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

const mockSongsService = {
  findAll() {
    return [
      {
        id: 1,
        title: 'Lasting lover',
        artists: ['Sigala', 'James Arthur'],
      },
    ];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // other way to standard provide service
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // Value provider below
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
    // class provider
  ],
})
export class SongsModule {}
