import { Module, SetMetadata } from "@nestjs/common";
import { MODULE_PATH } from "@nestjs/common/constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdController } from "../controller/ad.controller";
import { AdService } from "../service/ad.service";
import { Ad } from "/@/entities/Ad.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Ad])],
  controllers: [AdController],
  providers: [AdService],
  exports: [],
})
@SetMetadata(MODULE_PATH, "/admin")
export class AdModule {
  //
}
