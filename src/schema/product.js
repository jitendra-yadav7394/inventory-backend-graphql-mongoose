
import { BrandTC,CategoryTC,UnitTC, ProductTC } from '../models/product';

const BrandQuery = {
    brandById: BrandTC.getResolver('findById'),
    brandByIds: BrandTC.getResolver('findByIds'),
    brandOne: BrandTC.getResolver('findOne'),
    brandMany: BrandTC.getResolver('findMany'),
    brandCount: BrandTC.getResolver('count'),
    brandConnection: BrandTC.getResolver('connection'),
    brandPagination: BrandTC.getResolver('pagination'),
};

const UnitQuery = {
    unitById: UnitTC.getResolver('findById'),
    unitByIds: UnitTC.getResolver('findByIds'),
    unitOne: UnitTC.getResolver('findOne'),
    unitMany: UnitTC.getResolver('findMany'),
    unitCount: UnitTC.getResolver('count'),
    unitConnection: UnitTC.getResolver('connection'),
    unitPagination: UnitTC.getResolver('pagination'),
};

const CategoryQuery = {
    categoryById: CategoryTC.getResolver('findById'),
    categoryByIds: CategoryTC.getResolver('findByIds'),
    categoryOne: CategoryTC.getResolver('findOne'),
    categoryMany: CategoryTC.getResolver('findMany'),
    categoryCount: CategoryTC.getResolver('count'),
    categoryConnection: CategoryTC.getResolver('connection'),
    categoryPagination: CategoryTC.getResolver('pagination'),
};

const ProductQuery = {
    productById: ProductTC.getResolver('findById'),
    productByIds: ProductTC.getResolver('findByIds'),
    productOne: ProductTC.getResolver('findOne'),
    productMany: ProductTC.getResolver('findMany'),
    productCount: ProductTC.getResolver('count'),
    productConnection: ProductTC.getResolver('connection'),
    productPagination: ProductTC.getResolver('pagination'),
};

const ProductMutation = {
    productCreateOne: ProductTC.getResolver('createOne'),
    productCreateMany: ProductTC.getResolver('createMany'),
    productUpdateById: ProductTC.getResolver('updateById'),
    productUpdateOne: ProductTC.getResolver('updateOne'),
    productUpdateMany: ProductTC.getResolver('updateMany'),
    productRemoveById: ProductTC.getResolver('removeById'),
    productRemoveOne: ProductTC.getResolver('removeOne'),
    productRemoveMany: ProductTC.getResolver('removeMany'),
};

const UnitMutation = {
    unitCreateOne: UnitTC.getResolver('createOne'),
    unitCreateMany: UnitTC.getResolver('createMany'),
    unitUpdateById: UnitTC.getResolver('updateById'),
    unitUpdateOne: UnitTC.getResolver('updateOne'),
    unitUpdateMany: UnitTC.getResolver('updateMany'),
    unitRemoveById: UnitTC.getResolver('removeById'),
    unitRemoveOne: UnitTC.getResolver('removeOne'),
    unitRemoveMany: UnitTC.getResolver('removeMany'),
};

const BrandMutation = {
    brandCreateOne: BrandTC.getResolver('createOne'),
    brandCreateMany: BrandTC.getResolver('createMany'),
    brandUpdateById: BrandTC.getResolver('updateById'),
    brandUpdateOne: BrandTC.getResolver('updateOne'),
    brandUpdateMany: BrandTC.getResolver('updateMany'),
    brandRemoveById: BrandTC.getResolver('removeById'),
    brandRemoveOne: BrandTC.getResolver('removeOne'),
    brandRemoveMany: BrandTC.getResolver('removeMany'),
};

const CategoryMutation = {
    categoryCreateOne: CategoryTC.getResolver('createOne'),
    categoryCreateMany: CategoryTC.getResolver('createMany'),
    categoryUpdateById: CategoryTC.getResolver('updateById'),
    categoryUpdateOne: CategoryTC.getResolver('updateOne'),
    categoryUpdateMany: CategoryTC.getResolver('updateMany'),
    categoryRemoveById: CategoryTC.getResolver('removeById'),
    categoryRemoveOne: CategoryTC.getResolver('removeOne'),
    categoryRemoveMany: CategoryTC.getResolver('removeMany'),
};
export { ProductQuery,BrandQuery, ProductMutation, BrandMutation, CategoryMutation, CategoryQuery, UnitQuery, UnitMutation };