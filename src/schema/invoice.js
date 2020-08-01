
import { Invoice, InvoiceTC } from '../models/invoice';

const InvoiceQuery = {
    InvoiceById: InvoiceTC.getResolver('findById'),
    InvoiceByIds: InvoiceTC.getResolver('findByIds'),
    InvoiceOne: InvoiceTC.getResolver('findOne'),
    InvoiceMany: InvoiceTC.getResolver('findMany'),
    InvoiceCount: InvoiceTC.getResolver('count'),
    InvoiceConnection: InvoiceTC.getResolver('connection'),
    InvoicePagination: InvoiceTC.getResolver('pagination'),
};

const InvoiceMutation = {
    InvoiceCreateOne: InvoiceTC.getResolver('createOne'),
    InvoiceCreateMany: InvoiceTC.getResolver('createMany'),
    InvoiceUpdateById: InvoiceTC.getResolver('updateById'),
    InvoiceUpdateOne: InvoiceTC.getResolver('updateOne'),
    InvoiceUpdateMany: InvoiceTC.getResolver('updateMany'),
    InvoiceRemoveById: InvoiceTC.getResolver('removeById'),
    InvoiceRemoveOne: InvoiceTC.getResolver('removeOne'),
    InvoiceRemoveMany: InvoiceTC.getResolver('removeMany'),
};

export { InvoiceQuery, InvoiceMutation };