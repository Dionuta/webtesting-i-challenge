const { succeed, fail, repair } = require('./enhancer');


// test away!

const longSword = {
    name: "Long Sword",
    durability: 50,
    enhancement: 20
}

const elfShield = {
    name: "Long Sword",
    durability: 20,
    enhancement: 10
}

const longSwordRepaired = repair(longSword);
const elfShieldRepaired = repair(elfShield);

const elfShieldSuccess = succeed(elfShield);
const longSwordSuccess = succeed(longSword);

const elfShieldFail = fail(elfShield);
const longSwordFail = fail(longSword);

describe("the enhancer", () => {

    describe("the repair function", () => {
        
      it("should restor the durability", () =>{
          //arrange
          //act
          expect(longSwordRepaired.durability).toBe(100);
          expect(elfShieldRepaired.durability).toBe(100);
          //assert
      });
    });

    describe("the enhancement success function", () => {

        it("should increment enhancement by 1", () => {
            expect(elfShieldSuccess.enhancement).toBe(11);
        });
        it("should do nothing to items with enhancement of 20", () => {
            expect(longSwordSuccess.enhancement).toBe(20);
        });
    });

    describe("the enhancement fail function", () => {

       it("should decrease durability by 5 if enhancement is less than 15 ", () => {
          expect(elfShieldFail.durability).toBe(15)
       });
       it("should decrease durability by 10 if enhancement is more than 15", () => {
           expect(longSwordFail.durability).toBe(40)
       })
       it("should decrease enhancement by 1 if enhancement is more than 16", () => {
        expect(longSwordFail.enhancement).toBe(19)
        expect(longSwordFail.durability).toBe(40)
    })
    });

})

