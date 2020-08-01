
import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const UnitSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    
}, 
{
    collection: 'units',
});

export const CategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, 
{
    collection: 'categories',
});

export const BrandSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, {
    collection: 'brands',
});

export const ProductSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        code: {
            type: String,
            trim: true,
            required: true,
        },
        variant: {
            type: String,
            trim: true,
            required: true,
        },
        unitValue: {
            type: String,
            trim: true,
            required: true,
        },
        unitId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        netPrice: {
            type: Number,
            required: true,
        },
        productionCost: {
            type: Number,
            required: true,
        },
        markupPercent: {
            type: Number,
            required: true,
        },
        markupPrice: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number
        },
        discountPrice: {
            type: Number
        },
        salesPrice: {
            type: Number,
            required: true,
        },
        reorderlevel: {
            type: String
        },
        stocksQty: {
            type: Number,
            required: true,
        },
        expiryDate: {
            type: Date,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        }
    },
    {
        collection: 'products',
    }
);

ProductSchema.plugin(timestamps);
UnitSchema.plugin(timestamps);
CategorySchema.plugin(timestamps);
BrandSchema.plugin(timestamps);

ProductSchema.index({ createdAt: 1, updatedAt: 1 });
UnitSchema.index({ createdAt: 1, updatedAt: 1 });
CategorySchema.index({ createdAt: 1, updatedAt: 1 });
BrandSchema.index({ createdAt: 1, updatedAt: 1 });

export const Product = mongoose.model('Product', ProductSchema);
export const Unit = mongoose.model('Unit', UnitSchema);
export const Category = mongoose.model('Category', CategorySchema);
export const Brand = mongoose.model('Brand', BrandSchema);

export const ProductTC = composeWithMongoose(Product);
export const CategoryTC = composeWithMongoose(Category);
export const UnitTC = composeWithMongoose(Unit);
export const BrandTC = composeWithMongoose(Brand);
