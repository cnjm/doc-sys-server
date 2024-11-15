import { Entity, Column } from "typeorm";
import { BaseEntity } from "./Base.entity";
// 订单信息
@Entity()
export class Statistics extends BaseEntity {
  @Column({ comment: "店铺", default: "" })
  shopName: string;

  @Column({ comment: "发货内容", default: "" })
  goodName: string;

  @Column({ comment: "发货时间", default: "" })
  time: string;
}
