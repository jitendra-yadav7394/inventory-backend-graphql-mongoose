
import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user';
import { ProductQuery, ProductMutation, UnitMutation, UnitQuery, BrandMutation, BrandQuery, CategoryQuery, CategoryMutation } from './product';
import { InvoiceQuery, InventoryMutation } from './invoice';
import { OrderQuery, OrderMutation } from './order';
import { SaleQuery, SaleMutation } from './sale';
schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProductQuery,
    ...InvoiceQuery,
    ...OrderQuery,
    ...UnitQuery,
    ...BrandQuery,
    ...CategoryQuery,
    ...SaleQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProductMutation,
    ...InventoryMutation,
    ...OrderMutation,
    ...UnitMutation,
    ...BrandMutation,
    ...CategoryMutation,
    ...SaleMutation,
});

export default schemaComposer.buildSchema();
