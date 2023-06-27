import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { RolesGuard } from "../auth/roles.guard";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AdService } from "../service/ad.service";
import { GetADListDto } from "../dto/order.dto";

@ApiTags("ad")
@Controller("ad")
@UseGuards(RolesGuard)
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Post("ImportAds")
  @ApiOperation({ summary: "批量导入广告流水" })
  async ImportAds(@Body() params) {
    return this.adService.ImportAds(params);
  }

  @Get("getAdList")
  @ApiOperation({ summary: "获取广告列表" })
  async getAdList(@Query() query: GetADListDto) {
    return this.adService.getAdList(query);
  }

  @Get("getAdListAll")
  @ApiOperation({ summary: "获取全部广告列表" })
  async getAdListAll() {
    return this.adService.getAdListAll();
  }

  @Post("delAdListAll")
  @ApiOperation({ summary: "删除所有广告列表" })
  async delAdListAll() {
    return this.adService.delAdListAll();
  }
}
