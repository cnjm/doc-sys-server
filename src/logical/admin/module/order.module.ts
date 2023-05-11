import { Module, SetMetadata } from "@nestjs/common";
import { MODULE_PATH } from "@nestjs/common/constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "../controller/order.controller";
import { OrderService } from "../service/order.service";
import { Order } from "/@/entities/Order.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [],
})
@SetMetadata(MODULE_PATH, "/admin")
export class OrderModule {
  //
}
