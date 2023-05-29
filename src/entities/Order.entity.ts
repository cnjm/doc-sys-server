import { Entity, Column, CreateDateColumn } from "typeorm";
import { BaseEntity } from "./Base.entity";
// 订单信息
@Entity()
export class Order extends BaseEntity {
  @Column({ comment: "店铺名称", default: "" })
  shopName: string;

  @Column({ comment: "商户号", default: "" })
  merchantId: string;

  @Column({ comment: "店铺编码", default: "" })
  shopCode: string;

  @Column({ comment: "订单号", unique: true, default: "" })
  orderNo: string;

  @Column({ comment: "订单来源", default: "" })
  orderSource: string;

  @Column({ comment: "广告渠道", default: "" })
  adChannel: string;

  @Column({ comment: "广告账户ID", default: "" })
  adAccountId: string;

  @Column({ comment: "广告ID", default: "" })
  adId: string;

  @Column({ comment: "订单状态", default: "" })
  orderStatus: string;

  @Column({
    comment: "订单创建时间",
    default: "",
  })
  orderAt: string;

  @Column({
    comment: "买家付款时间",
    default: "",
  })
  paymentAt: string;

  @Column({
    comment: "发货时间",
    default: "",
  })
  deliveryAt: string;

  @Column({
    comment: "交易成功/关闭时间",
    default: "",
  })
  completionAt: string;

  @Column({ comment: "付款方式", default: "" })
  paymentMethod: string;

  @Column({ comment: "支付流水号", default: "" })
  paymentNo: string;

  @Column({ comment: "商品总价", default: 0 })
  totalPrice: number;

  @Column({ comment: "运费", default: 0 })
  freight: number;

  @Column({ comment: "优惠总额", default: 0 })
  totalDiscount: number;

  @Column({ type: "double", comment: "实付金额", default: 0 })
  amount: number;

  @Column({ comment: "商品ID", default: "" })
  productId: string;

  @Column({ comment: "商品全名", default: "" })
  productName: string;

  @Column({ comment: "商品备注", default: "" })
  productDes: string;

  @Column({ comment: "规格编码/套餐编码", default: "" })
  specsCode: string;

  @Column({ comment: "商品规格", default: "" })
  productSpecs: string;

  @Column({ comment: "下单件数", default: 0 })
  orderNum: number;

  @Column({ comment: "快递公司", default: "" })
  expressName: string;

  @Column({ comment: "快递单号", default: "" })
  expressNo: string;

  @Column({ comment: "售后状态", default: "" })
  salesStatus: string;

  @Column({ comment: "售后类型", default: "" })
  salesType: string;

  @Column({ comment: "收件人地址", default: "" })
  address: string;

  @Column({ comment: "收件人", default: "" })
  recipientName: string;

  @Column({ comment: "收件人手机号", default: "" })
  recipientPhone: string;

  @Column({ comment: "买家留言", default: "" })
  message: string;

  @Column({ comment: "商家备注", default: "" })
  notes: string;
}
