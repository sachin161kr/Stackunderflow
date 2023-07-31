import axios from 'axios';

const getData = ({category, setData, setLoading}) => {
  axios
    .get(
      `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=${category}&site=stackoverflow&filter=!*J)Ivn5-fVfvaTcIUU9TUtT5KsXGiOCjxjhvczFymbB-MhIV0-WhjwbRLDRBu0`,
    )
    .then(e => {
      setData(e.data.items);
      setLoading(false);
    });
};

export default getData;
