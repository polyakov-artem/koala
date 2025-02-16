import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import products from '../mock/data/products';
import details from '../mock/data/details';
import sizes from '../mock/data/sizes';
import appearances from '../mock/data/appearances';
import { delay } from '../../tests/msw/utils/delay';
import { TAppearance, TProduct, TSize, TDetails } from '../types/types';
import { getRandomElement } from '../utils/getRandom';

export type TCustomError = { message: string; status: number };

export const notFoundError: { error: TCustomError } = {
  error: { message: 'No items were found', status: 404 },
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery<TCustomError>(),
  endpoints: (builder) => ({
    productById: builder.query<TProduct, string>({
      queryFn: async (productId: string) => {
        await delay(100);

        const result = products.find((product) => {
          return product._id === productId;
        });

        if (!result) return notFoundError;

        return { data: result };
      },
    }),

    productsByCategory: builder.query<TProduct[], string>({
      queryFn: async (category: string) => {
        await delay(100);

        const result = products.filter((product) => {
          return product.category === category;
        });

        return { data: result };
      },
    }),

    productsByDetails: builder.query<TProduct[], string>({
      queryFn: async (detailsId: string) => {
        await delay(100);

        const result = products.filter((product) => {
          return product.detailsId === detailsId;
        });

        return { data: result };
      },
    }),

    bestsellersByCategory: builder.query<TProduct[], string>({
      queryFn: async (category: string) => {
        await delay(100);

        const productsByDetails = products
          .filter((product) => {
            return product.category === category;
          })
          .reduce(
            (result, product) => {
              if (!result[product.detailsId]) {
                result[product.detailsId] = [];
              }

              result[product.detailsId].push(product);
              return result;
            },
            {} as Record<string, TProduct[]>
          );

        const result = Object.values(productsByDetails).map((products) =>
          getRandomElement(products)
        );

        return { data: result };
      },
    }),

    detailsById: builder.query<TDetails, string>({
      queryFn: async (detailsId: string) => {
        await delay(100);

        const result = details.find((details) => details._id === detailsId);

        if (!result) return notFoundError;

        return { data: result };
      },
    }),

    detailsByCategory: builder.query<TDetails[], string>({
      queryFn: async (category: string) => {
        await delay(100);

        const result = details.filter((item) => item.category === category);

        return { data: result };
      },
    }),

    sizeById: builder.query<TSize, string>({
      queryFn: async (sizeId: string) => {
        await delay(100);

        const result = sizes.find((size) => size._id === sizeId);

        if (!result) return notFoundError;

        return { data: result };
      },
    }),

    sizesByDetails: builder.query<TSize[], string>({
      queryFn: async (detailsId: string) => {
        await delay(100);

        const result = sizes.filter((size) => size.detailsId === detailsId);

        return { data: result };
      },
    }),

    sizesByCategory: builder.query<TSize[], string>({
      queryFn: async (category: string) => {
        await delay(100);

        const result = sizes.filter((size) => size.category === category);

        return { data: result };
      },
    }),

    appearanceById: builder.query<TAppearance, string>({
      queryFn: async (appearanceId: string) => {
        await delay(100);

        const result = appearances.find((appearance) => appearance._id === appearanceId);

        if (!result) return notFoundError;

        return { data: result };
      },
    }),

    appearancesByDetails: builder.query<TAppearance[], string>({
      queryFn: async (detailsId: string) => {
        await delay(100);

        const result = appearances.filter((appearance) => appearance.detailsId === detailsId);

        return { data: result };
      },
    }),

    appearancesByCategory: builder.query<TAppearance[], string>({
      queryFn: async (category: string) => {
        await delay(100);

        const result = appearances.filter((appearance) => appearance.category === category);

        return { data: result };
      },
    }),
  }),
});

export const {
  useProductByIdQuery,
  useProductsByCategoryQuery,
  useProductsByDetailsQuery,
  useBestsellersByCategoryQuery,
  useDetailsByIdQuery,
  useDetailsByCategoryQuery,
  useSizeByIdQuery,
  useSizesByDetailsQuery,
  useSizesByCategoryQuery,
  useAppearanceByIdQuery,
  useAppearancesByDetailsQuery,
  useAppearancesByCategoryQuery,
} = api;
