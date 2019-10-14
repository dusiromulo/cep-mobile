export const findCep = cep => {
    const url = `http://viacep.com.br/ws/${cep}/json/ `;
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(() => {
            return {networkError: 1};
        });
};
