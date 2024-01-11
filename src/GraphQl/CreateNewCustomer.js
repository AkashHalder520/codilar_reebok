const CreateNewCustomer=async(props)=>{
  console.log("asdfasdf",props);
    const requestBody={
        query: `
        mutation {
            createCustomer(
              input: {
                firstname: "${props.first_name}"
                lastname: "${props.last_name}"
                email: "${props.email}"
                password: "${props.password}"
                is_subscribed: true
          
              }
            ) {
              customer {
                firstname
                lastname
                email
                is_subscribed
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
export default CreateNewCustomer