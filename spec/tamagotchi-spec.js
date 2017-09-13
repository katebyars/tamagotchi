import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let fuzzy = new Tamagotchi('Fuzzy');

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.foodLevel).toEqual(10);
  });

  // it('should have a name and an energy level of 10 when it is created', function() {
  //   expect(fuzzy.name).toEqual("Fuzzy");
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });
  //
  //
  // it('should have a name and a happiness level of 10 when it is created', function() {
  //   expect(fuzzy.name).toEqual("Fuzzy");
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });

  // it('should have a food level of 7 after 3001 milliseconds', function() {
  //   jasmine.clock().tick(3001);
  //   expect(fuzzy.foodLevel).toEqual(7);
  // });

  it('should have a food level of 9 after one second', function() {
  fuzzy.setHunger();
  jasmine.clock().tick(1001);
  expect(fuzzy.foodLevel).toEqual(9);
  });

  it('should have a food level of 10 more if fed', function() {
  fuzzy.feed();
  expect(fuzzy.foodLevel).toEqual(19);
  });
});
