import { Entity, Column } from "typeorm";
import { BaseEntity } from "./Base.entity";
// 订单信息
@Entity()
export class Ad extends BaseEntity {
  @Column({ comment: "商品Id", default: "" })
  productId: string;

  @Column({ comment: "运营人员", default: "" })
  operateName: string;

  @Column({ comment: "广告主名", default: "" })
  adName: string;

  @Column({ comment: "广告主ID", default: "" })
  adId: string;

  @Column({
    comment: "花费",
    default: 0,
    type: "decimal",
    precision: 10,
    scale: 3,
  })
  spend: number;
}
