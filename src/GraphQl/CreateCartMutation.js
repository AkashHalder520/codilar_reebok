const CreateCartMutation=async()=>{
    const requestBody = {
        query: `
          mutation {
            createEmptyCart 
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
        console.log('response empty cart data:',responseData);
        return responseData?.data?.createEmptyCart;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default CreateCartMutation