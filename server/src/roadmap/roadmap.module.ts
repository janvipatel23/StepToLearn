import { Category } from './../category/entities/category.entity';
import { CategoryService } from './../category/category.service';
import { Roadmap } from './entities/roadmap.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RoadmapService } from './roadmap.service';
import { RoadmapController } from './roadmap.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Roadmap, Category])],
  controllers: [RoadmapController],
  providers: [RoadmapService, CategoryService],
})
export class RoadmapModule {}
