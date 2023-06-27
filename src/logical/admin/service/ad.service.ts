import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ad } from "../../../entities/Ad.entity";
import { getConnection, Repository } from "typeorm";
import { GetADListDto } from "../dto/order.dto";
import { format } from "/@/utils/moment";

@Injectable()
export class AdService {
  constructor(
    @InjectRepository(Ad)
    private adrRepository: Repository<Ad>,
  ) {
    //
  }

  /**
   * 获取广告列表
   */
  async getAdList(query: GetADListDto): Promise<any> {
    try {
      const { pageSize = 20, page = 1, productId, operateName } = query;
      let qb = this.adrRepository.createQueryBuilder("ad");
      qb = qb.skip(pageSize * (page - 1)).take(pageSize);
      if (productId) {
        qb = qb.where("ad.productId = :productId", { productId });
      }
      if (operateName) {
        qb = qb.where("ad.operateName = :operateName", { operateName });
      }
      const data = await qb.getManyAndCount();
      const items = data[0].map((item) => {
        item.create_at = format(item.create_at, "YYYY-MM-DD HH:mm:ss");
        item.update_at = format(item.update_at, "YYYY-MM-DD HH:mm:ss");
        return item;
      });
      const result = { items, total: data[1] };
      return result;
    } catch (error) {
      throw new InternalServerErrorException("查询失败");
    }
  }
  /**
   * 获取全部广告列表
   */
  async getAdListAll(): Promise<any> {
    try {
      const qb = this.adrRepository
        .createQueryBuilder("ad")
        .orderBy("ad.spend", "DESC");
      const data = await qb.getManyAndCount();
      const [items] = data;
      const result = {};
      items.forEach(
        ({ productId, spend: spendS, adName, operateName, adId }) => {
          const spend = Number(spendS);
          if (result.hasOwnProperty(productId)) {
            result[productId].spend += spend;
          } else {
            result[productId] = {
              adName,
              adId,
              spend,
              operateName,
            };
          }
        },
      );
      // const result = { items, total };
      return result;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("查询失败");
    }
  }

  /**
   * 删除所有广告列表
   */
  async delAdListAll(): Promise<any> {
    try {
      await getConnection().createQueryBuilder().delete().from(Ad).execute();
      return "ok";
    } catch (error) {
      throw new InternalServerErrorException("查询失败");
    }
  }

  /**
   * 导入广告流水
   * @param params 广告流水数据
   */
  async ImportAds(params): Promise<string> {
    try {
      // await this.orderRepository.insert(params.orders);
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Ad)
        .values(params.ads)
        .execute();
      return "导入成功";
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("导入失败");
    }
  }
}
