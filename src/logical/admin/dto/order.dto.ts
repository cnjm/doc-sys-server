import { IsOptional, IsString, MaxLength } from "class-validator";
import { QueryDto } from "/@/common/dto/query.dto";

export class GetOrderListDto extends QueryDto {
  @IsOptional()
  @IsString({ message: "不是有效的orderNo" })
  readonly orderNo: string;
}
export class GetADListDto extends QueryDto {
  @IsOptional()
  @MaxLength(18, { message: "productId长度不超过18" })
  @IsString({ message: "不是有效的productId" })
  readonly productId: string;

  @IsOptional()
  @IsString({ message: "不是有效的operateName" })
  readonly operateName: string;
}
