const AddConfProductToCart=async(props)=>{
  
    const requestBody = {
        query: `
        mutation {
            addConfigurableProductsToCart(
              input: {
                cart_id: "${props.cartid}"
                cart_items: [
                  {
                    parent_sku:"${props.parentSku}"
                    data: {
                      quantity: 1
                      sku: "${props.childSku}"
                    }
                  }
                ]
              }
            ) {
              cart {
                items {
                  uid
                  quantity
                  product {
                    name
                    sku
                  }
                  ... on ConfigurableCartItem {
                    configurable_options {
                      option_label
                    }
                  }
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
            // Include any necessary headers like authorization tokens here
          },
          body: JSON.stringify(requestBody)
        });
    
        const responseData = await response.json();
        // Assuming your GraphQL response structure matches the expected format
        // Access the cartId from the response and update the state
        console.log('response data:',responseData);
        return responseData;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default AddConfProductToCart