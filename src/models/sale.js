
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const SaleSchema = new Schema(
    {
        orderId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Order'
        },
        productId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        qty: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },

    },
    {
        collection: 'sales',
    }
);

SaleSchema.plugin(timestamps);

SaleSchema.index({ createdAt: 1, updatedAt: 1 });

export const Sale = mongoose.model('Sale', SaleSchema);
export const SaleTC = composeWithMongoose(Sale);
