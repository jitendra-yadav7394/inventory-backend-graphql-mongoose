
import { Order, OrderTC } from '../models/order';

const OrderQuery = {
    orderById: OrderTC.getResolver('findById'),
    orderByIds: OrderTC.getResolver('findByIds'),
    orderOne: OrderTC.getResolver('findOne'),
    orderMany: OrderTC.getResolver('findMany'),
    orderCount: OrderTC.getResolver('count'),
    orderConnection: OrderTC.getResolver('connection'),
    orderPagination: OrderTC.getResolver('pagination'),
};

const OrderMutation = {
    orderCreateOne: OrderTC.getResolver('createOne'),
    orderCreateMany: OrderTC.getResolver('createMany'),
    orderUpdateById: OrderTC.getResolver('updateById'),
    orderUpdateOne: OrderTC.getResolver('updateOne'),
    orderUpdateMany: OrderTC.getResolver('updateMany'),
    orderRemoveById: OrderTC.getResolver('removeById'),
    orderRemoveOne: OrderTC.getResolver('removeOne'),
    orderRemoveMany: OrderTC.getResolver('removeMany'),
};

export { OrderQuery, OrderMutation };