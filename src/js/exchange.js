export default class exchange {
  static async getCurrency(conversion, target_code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/7d02dda92110bf24556c9ec1/pair/USD/RUB`);
    //   if (!response.ok) 
    //   {
    //     throw Error(response.statusText);
    //   }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
// /${conversion}