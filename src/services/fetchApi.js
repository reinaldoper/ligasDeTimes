export const fetchBookSearch = async (token) => {
  console.log(token);
  const url = `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=874c53e0-69f4-11ed-bc87-a323395b1f7c&country_id=${token}`;
  const request = await fetch(url);
  const response = await request.json();
  return response.data;
};

export const fetchBook = async () => {
  const url = 'https://app.sportdataapi.com/api/v1/soccer/teams?apikey=874c53e0-69f4-11ed-bc87-a323395b1f7c&country_id=25';
  const request = await fetch(url);
  const response = await request.json();
  return response.data;
};

