
import { Sale, SaleTC } from '../models/sale';

const SaleQuery = {
    saleById: SaleTC.getResolver('findById'),
    saleByIds: SaleTC.getResolver('findByIds'),
    saleOne: SaleTC.getResolver('findOne'),
    saleMany: SaleTC.getResolver('findMany'),
    saleCount: SaleTC.getResolver('count'),
    saleConnection: SaleTC.getResolver('connection'),
    salePagination: SaleTC.getResolver('pagination'),
};

const SaleMutation = {
    saleCreateOne: SaleTC.getResolver('createOne'),
    saleCreateMany: SaleTC.getResolver('createMany'),
    saleUpdateById: SaleTC.getResolver('updateById'),
    saleUpdateOne: SaleTC.getResolver('updateOne'),
    saleUpdateMany: SaleTC.getResolver('updateMany'),
    saleRemoveById: SaleTC.getResolver('removeById'),
    saleRemoveOne: SaleTC.getResolver('removeOne'),
    saleRemoveMany: SaleTC.getResolver('removeMany'),
};

export { SaleQuery, SaleMutation };