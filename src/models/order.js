
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const OrderSchema = new Schema(
    {
        productId: {
            type: String,
            trim: true,
            required: true,
        },
        quantity: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
    },
    {
        collection: 'orders',
    }
);

OrderSchema.plugin(timestamps);

OrderSchema.index({ createdAt: 1, updatedAt: 1 });

export const Order = mongoose.model('Order', OrderSchema);
export const OrderTC = composeWithMongoose(Order);
