class HobbyApi {
  static getAllHobbies() {
    return fetch('http://localhost:4000/api/v1/hobbies').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default HobbyApi;
