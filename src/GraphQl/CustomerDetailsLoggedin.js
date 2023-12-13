const CustomerDetailsLoggedin = async () => {
    // console.log("asdfasf",logindata);
    const customerToken=localStorage.getItem('customerToken')
    const requestBody = {
        query: `
        {
            customer {
              firstname
              lastname
              suffix
              email
              addresses {
                firstname
                lastname
                street
                city
                region {
                  region_code
                  region
                }
                postcode
                country_code
                telephone
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
        
        console.log('response data:',responseData);
        return responseData;
      } catch (error) {
        console.error('Error creating cart:', error);
        throw error;
      }
}
export default CustomerDetailsLoggedin

