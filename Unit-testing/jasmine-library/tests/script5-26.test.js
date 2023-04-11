describe('Accumulator', () => {
  let accumulator;

  beforeEach(() => {
    accumulator = new Accumulator(10);
  });

  it('should create an object with number property', () => {
    expect(accumulator.hasOwnProperty('number')).toBeTruthy();
  });

  it('should create an object with increment method', () => {
    expect(typeof accumulator.increment).toBe('function');
  });

  it('should create an object with decrement method', () => {
    expect(typeof accumulator.decrement).toBe('function');
  });

  it('should initialize the number property correctly', () => {
    const acc = new Accumulator(5);
    expect(acc.number).toBe(5);
  });

  it('should increment the number property correctly', () => {
    const acc = new Accumulator(0);
    acc.increment();
    expect(acc.number).toBe(1);
  });

  it('should decrement the number property correctly', () => {
    const acc = new Accumulator(5);
    acc.decrement();
    expect(acc.number).toBe(4);
  });
});
