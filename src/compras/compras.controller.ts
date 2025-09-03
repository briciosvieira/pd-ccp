import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { PdComprasDto } from './dto/pdcompras.dto';


@Controller('compras')
export class ComprasController {

    constructor(private service: ComprasService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param("id") id: string) {
        return this.service.findByOne((id))
    }

    @Post()
    create(@Body() pdcomprasDto: PdComprasDto) {
        return this.service.create(pdcomprasDto)
    }

  @Post("quote")
  async findOneQuote(@Query('num_quote') numQuote: string) {
    return await this.service.findOneQuote(numQuote);
  }
}
