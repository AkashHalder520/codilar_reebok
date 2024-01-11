const DeleteConfProductCart=async(props)=>{
  const customerToken = localStorage.getItem('customerToken')
    const requestBody = {
        query: `
        mutation {
          removeItemFromCart(
            input: {
              cart_id: "${props.cartId || props.customerCartId}",
              cart_item_uid:"${props.uid}"
              
            }
          )
         {
          cart {
            items {
              id
              product {
                name
              }
              quantity
            }
            prices {
              grand_total{
                value
                currency
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
            'Authorization': `Bearer ${customerToken}`,
            // Include any necessary headers like authorization tokens here
          },
          body: JSON.stringify(requestBody)
        });
    
        const responseData = await response.json();
        // Assuming your GraphQL response structure matches the expected format
        // Access the cartId from the response and update the state
        console.log('response Del data:',responseData);
        return responseData;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default DeleteConfProductCart