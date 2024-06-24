const combinacoes = require('../exercises/combinacoes');  // Importando a função combinacoes
 
test('gerar todas as combinações possíveis de [1, 2] e ["a", "b"]', () => {
    expect(combinacoes([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);
});
 
test('gerar todas as combinações possíveis de [1] e ["a", "b", "c"]', () => {
    expect(combinacoes([1], ['a', 'b', 'c'])).toEqual([[1, 'a'], [1, 'b'], [1, 'c']]);
});
 
test('retornar um array vazio se o primeiro array estiver vazio', () => {
    expect(combinacoes([], [1, 2])).toEqual([]);
});
