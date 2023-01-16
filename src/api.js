import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID EWCXyEZcibhEUZhWTohzYWMuqQS1Q0jFXjg4P_j3P-k ',
    },

    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
