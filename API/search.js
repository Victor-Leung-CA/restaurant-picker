const getRestaurants = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=UBC&term=restaurant`,
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer juZOTf_OCiblmttKnFodhHm7aGyf80egT-OQMj2Tv7nIPzSWsZXXQfnq4RogX6l2TlpfYGWpFWK9miJdHZvVNHZJPhuI4jTUiZap74e8CKT23-UZpze8W28xMBD6X3Yx',
        },
      }
    )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  
  export default getRestaurants;
  