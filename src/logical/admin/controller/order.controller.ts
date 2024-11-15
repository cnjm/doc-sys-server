import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { RolesGuard } from "../auth/roles.guard";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { OrderService } from "../service/order.service";
import { GetOrderListDto } from "../dto/order.dto";
import { Roles } from "../auth/roles.decorator";
import { RoleEnum } from "/@/enum/role.enum";

@ApiTags("order")
@Controller("order")
@UseGuards(RolesGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post("importOrder")
  @ApiOperation({ summary: "批量添加订单" })
  async ImportOrder(@Body() params) {
    return this.orderService.ImportOrder(params);
  }

  @Get("getOrderList")
  @Roles(RoleEnum.SUPER)
  @ApiOperation({ summary: "获取订单列表" })
  async getOrderList(@Query() query: GetOrderListDto) {
    return this.orderService.getOrderList(query);
  }

  @Get("getOrderListAll")
  @Roles(RoleEnum.SUPER)
  @ApiOperation({ summary: "获取全部订单列表" })
  async getOrderListAll() {
    return this.orderService.getOrderListAll();
  }

  @Post("delOrderListAll")
  @ApiOperation({ summary: "删除所有订单列表" })
  async delOrderListAll() {
    return this.orderService.delOrderListAll();
  }

  @Post("importStatisticsOrder")
  @ApiOperation({ summary: "批量添加统计订单" })
  async ImportStatisticsOrder(@Body() params) {
    return this.orderService.ImportStatisticsOrder(params);
  }

  @Get("getStatisticsOrderList")
  @ApiOperation({ summary: "获取统计订单列表" })
  async getStatisticsOrderList(@Query() query: GetOrderListDto) {
    return this.orderService.getStatisticsOrderList(query);
  }

  @Get("getStatisticsOrderListAll")
  @ApiOperation({ summary: "获取全部统计订单列表" })
  async getStatisticsOrderListAll() {
    return this.orderService.getStatisticsOrderListAll();
  }

  @Post("delStatisticsOrderListAll")
  @ApiOperation({ summary: "删除所有统计订单列表" })
  async delStatisticsOrderListAll() {
    return this.orderService.delStatisticsOrderListAll();
  }
}
