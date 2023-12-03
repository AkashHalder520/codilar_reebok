const PdpFetchQuery = async (url_key) => {
    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
              {
                products(search: "", pageSize: 100, filter: { url_key: { eq: "${url_key}" } }) {
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

export default PdpFetchQuery