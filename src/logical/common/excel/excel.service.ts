import { Injectable } from "@nestjs/common";
import { ImportExcelDto } from "./dto/excel.dto";
@Injectable()
export class ExcelService {
  /**
   * 返回上传token
   * @param params 字段
   */
  async getExcel(query: ImportExcelDto) {
    return {};
  }
}
