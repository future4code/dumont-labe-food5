// Função de ir para LoginPage

export const goToLoginPage = (history) => {
  history.push("/login");
};

// Função de voltar para página anterior

export const goBack = (history) => {
  history.goBack();
};

// Função de ir para página de Cadastro

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToRestaurant = (history, id) => {
  history.push(`/restaurantdetails/${id}`);
};

export const goToAddAdressPage = (history) => {
  history.push("/addaddress");
};
