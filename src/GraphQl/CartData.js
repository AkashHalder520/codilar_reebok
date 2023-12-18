const CartData=async(cartId)=>{
  // console.log("guestcard", cartId);
  const customerToken = localStorage.getItem('customerToken')
    const requestBody = {
        query: `
        {
            cart(cart_id: "${cartId}") {
              email
              billing_address {
                city
                country {
                  code
                  label
                }
                firstname
                lastname
                postcode
                region {
                  code
                  label
                }
                street
                telephone
              }
              shipping_addresses {
                firstname
                lastname
                street
                city
                region {
                  code
                  label
                }
                country {
                  code
                  label
                }
                telephone
                available_shipping_methods {
                  amount {
                    currency
                    value
                  }
                  available
                  carrier_code
                  carrier_title
                  error_message
                  method_code
                  method_title
                  price_excl_tax {
                    value
                    currency
                  }
                  price_incl_tax {
                    value
                    currency
                  }
                }
                selected_shipping_method {
                  amount {
                    value
                    currency
                  }
                  carrier_code
                  carrier_title
                  method_code
                  method_title
                }
              }
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
              available_payment_methods {
                code
                title
              }
              selected_payment_method {
                code
                title
              }
              applied_coupons {
                code
              }
              prices {
                grand_total {
                  value
                  currency
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
        // console.log('response data:',responseData);
        return responseData?.data;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default CartData