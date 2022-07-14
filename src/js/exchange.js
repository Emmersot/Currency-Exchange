export default class exchange {
  static async getCurrency(target_code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${target_code}`);
      if (!response.ok) 
      {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
// /${conversion}