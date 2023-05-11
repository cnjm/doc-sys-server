import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ExcelService } from "./excel.service";
import { RolesGuard } from "../../admin/auth/roles.guard";
import { ImportExcelDto } from "./dto/excel.dto";

@ApiTags("excel")
@Controller("excel")
@UseGuards(RolesGuard)
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {
    //
  }

  @Get("test")
  @ApiOperation({ summary: "测试" })
  async test(@Query() query: ImportExcelDto): Promise<any> {
    console.log(123);
    return this.excelService.getExcel(query);
  }
}
