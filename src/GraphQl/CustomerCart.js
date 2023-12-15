const CustomerCart = async () => {
  const customerToken = localStorage.getItem('customerToken')
  const requestBody = {
    query: `
        {
            customerCart {
              id
              items {
                uid
                quantity
                prices{
                  row_total{
                    currency
                    value
                  }
                }
                product {
                  name
                  sku
                  price_range{
                    maximum_price{
                      final_price{
                        value
                      }
                    }
                    minimum_price{
                      final_price{
                        value
                      }
                    }
                  }
                  
                  
                  image{
                    url
                  }
                  }
                
                errors {
                  code
                  message
                }
              }
            }
          }
          
        `
  };

  try {
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${customerToken}`,
        // Include any necessary headers like authorization tokens here
      },
      body: JSON.stringify(requestBody)
    });

    const responseData = await response.json();
    // Assuming your GraphQL response structure matches the expected format
    // Access the cartId from the response and update the state
    console.log('response data:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
}
export default CustomerCart