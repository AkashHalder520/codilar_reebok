const MergeCartsMutation=async()=>{
    const customerToken=localStorage.getItem('customerToken')
    const guestCartToken=localStorage.getItem('cartId')
    const CustomerCartId=localStorage.getItem('CustomerCartId')
    const requestBody = {
        query: `
        mutation {
            mergeCarts(
              source_cart_id: "${guestCartToken}",
              destination_cart_id: "${CustomerCartId}"
            ) {
              items {
                id
                product {
                  name
                  sku
                }
                quantity
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
        console.log('response data:',responseData);
        return responseData;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default MergeCartsMutation