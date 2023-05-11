import { Module, SetMetadata } from "@nestjs/common";
import { MODULE_PATH } from "@nestjs/common/constants";
import { ExcelController } from "./excel.controller";
import { ExcelService } from "./excel.service";

@Module({
  imports: [],
  controllers: [ExcelController],
  providers: [ExcelService],
  exports: [ExcelService],
})
@SetMetadata(MODULE_PATH, "/common")
export class ExcelModule {
  //
}
