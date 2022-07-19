import { gql } from "@apollo/client";

// This schema fetches all the categories
export const GET_ALL_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

// This schema fetches all the details of a product
export const GET_PRODUCT = gql`
  query GetProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

// This schema fetches all the products
export const GET_ALL_PRODUCTS = gql`
  {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        category
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        brand
      }
    }
  }
`;

// This schema fetches all the currencies
export const GET_ALL_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
