
describe('sample test 101', () => {
  it('works as expected', () => {
    const age = 31;
    expect(1).toEqual(1);
    expect(age).toEqual(31);
  });

  it('checks the list of cat names', () => {
    const dogs = ['oncom', 'abu'];
    expect(dogs).toContain('oncom');
  });
})
