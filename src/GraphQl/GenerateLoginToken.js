const GenerateLoginToken = async (logindata) => {
    console.log("asdfasf",logindata);
    const requestBody = {
        query: `
        mutation {
            generateCustomerToken(
              email: "${logindata.email}"
              password: "${logindata.password}"
            ) {
              token
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
        
        console.log('response data:',responseData);
        return responseData;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default GenerateLoginToken

