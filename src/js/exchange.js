export default class exchange {
  static async getCurrency(target_code, base_code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/7d02dda92110bf24556c9ec1/pair/${base_code}/${target_code}`);
      if (!response.ok) 
      {
        throw Error(response.status);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}