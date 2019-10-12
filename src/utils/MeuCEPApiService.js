export const findCep = cep => {
    const url = `http://viacep.com.br/ws/${cep}/json/ `;
    return fetch(url)
        .then(response => response.json())
        .then(data => {console.log('findCep then!!', data);})
        .catch(err => {console.log('findCep catch!!', err);});
};
