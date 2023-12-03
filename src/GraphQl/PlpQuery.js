const PlpQuery= async(priceRange)=>{
    try {
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query {
              products(
                filter: {
                  price: {
                    from: "${priceRange[0]}"
                    to: "${priceRange[1]}"
                  }
                }
                pageSize: 200
              ) {
                items {
                  id
                  name
                  sku
                  url_key
                  price {
                    regularPrice {
                      amount {
                        value
                        currency
                      }
                    }
                  }
                  image {
                    url
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
export default PlpQuery