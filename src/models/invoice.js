
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const InvoiceSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true
        },
        discountPrice: {
            type: Number
        },
        saleId: {
            type: Schema.Types.ObjectId,
            required: true
        },
    },
    {
        collection: 'invoices',
    }
);

InvoiceSchema.plugin(timestamps);

InvoiceSchema.index({ createdAt: 1, updatedAt: 1 });

export const Invoice = mongoose.model('Invoice', InvoiceSchema);
export const InvoiceTC = composeWithMongoose(Invoice);
