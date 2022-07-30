module.exports = (app) => {
  app.get("/me", ()  => {
    return {
      name: "Joãozinho da Silva",
      age: 20,
      country: "Brazil",
      state: "Rio Grande do Sul",
      city: "São Leopoldo"
    };
  });
}