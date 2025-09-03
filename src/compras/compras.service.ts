import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Random } from 'src/utils/random';
import { PdComprasDto } from './dto/pdcompras.dto';

@Injectable()
export class ComprasService {

    constructor(private prismaService: PrismaService,
        private random: Random
    ) { }

    findAll() {
        return this.prismaService.pdcompras.findMany()
    }

    async create(pdcomprasDto: PdComprasDto) {

        const compras = await this.prismaService.pdcompras.create({
            data: {
                num_quote: pdcomprasDto.num_quote,
                num_pd_venda: this.random.gerarNumAleatorios().toString(),
            },
            select: {
                num_quote: true,
                num_pd_venda: true
            }
        })
        return compras;
    }

    async findByOne(id: string) {
        const compraId = await this.prismaService.pdcompras.findFirst({
            where: {
                id: {
                    equals: parseInt(id),
                },
            }
        })
        return compraId;
    }

    async findOneQuote(quote: string) {
        const findQuote = await this.prismaService.pdcompras.findFirst({
            where: {
                num_quote: {
                    equals: quote,
                },
            },
        })

        console.log(findQuote)
        return findQuote
    }

}
