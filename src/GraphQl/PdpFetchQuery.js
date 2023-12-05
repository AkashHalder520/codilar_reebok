const PdpFetchQuery = async (url_key) => {
    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                {
                  products(filter: { url_key: { eq: "${url_key}" } }) {
                    items {
                      id
                      attribute_set_id
                      name
                      sku
                      __typename
                      price_range{
                        minimum_price{
                          regular_price{
                            value
                            currency
                          }
                        }
                      }
                      ... on ConfigurableProduct {
                        configurable_options {
                          id
                          attribute_uid
                          label
                          position
                          use_default
                          attribute_code
                          product_id
                          values {
                            uid
                            label
                            
                            }
                         }
                        
                        variants {
                          product {
                            id
                            name
                            sku
                            attribute_set_id
                            price_range{
                              minimum_price{
                                regular_price{
                                  value
                                  currency
                                }
                              }
                            }
                          }
                          attributes {
                            uid
                            label
                            code
                            value_index
                          }
                        }
                      }
                    }
                  }
                }
            `,
            }),
        });
        // console.log(response, 'response pdp');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);

        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default PdpFetchQuery