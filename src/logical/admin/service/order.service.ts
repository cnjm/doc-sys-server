import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../../../entities/Order.entity";
import { getConnection, Repository } from "typeorm";
import { GetOrderListDto } from "../dto/order.dto";
import { format } from "/@/utils/moment";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {
    //
  }

  /**
   * 查询是否某一条件  user
   * @param params 字段
   */
  // async findOne(params: any): Promise<any | undefined> {
  //   const data = await this.adminRepository.findOne(params);
  //   return data;
  // }

  /**
   * 查询该Account用户，并增加密码盐,密码的返回
   * @param params 字段
   */
  // async findOneByAccount(account: string): Promise<any | undefined> {
  //   let qb = this.adminRepository.createQueryBuilder("admin");
  //   qb = qb
  //     .where("admin.account = :account", { account })
  //     .addSelect(["admin.salt", "admin.password"]);
  //   const data = await qb.getOne();
  //   return data;
  // }

  /**
   * 获取账号列表
   */
  async getOrderList(query: GetOrderListDto): Promise<any> {
    try {
      const { pageSize = 20, page = 1 } = query;
      let qb = this.orderRepository.createQueryBuilder("admin");
      qb = qb.skip(pageSize * (page - 1)).take(pageSize);

      const data = await qb.getManyAndCount();
      const items = data[0].map((item) => {
        item.create_at = format(item.create_at, "YYYY-MM-DD HH:mm:ss");
        return item;
      });
      const result = { items, total: data[1] };
      return result;
    } catch (error) {
      throw new InternalServerErrorException("查询失败");
    }
  }

  /**
   * 导入订单
   * @param params 订单数据
   */
  async ImportOrder(params): Promise<string> {
    try {
      // await this.orderRepository.insert(params.orders);
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Order)
        .values(params.orders)
        .execute();
      return "导入成功";
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("导入失败");
    }
  }
}
