
describe("Ui module ", function(){
    var foo = null;
    beforeEach(function(){
        foo = myDirector.Ui.Button.createButton("type");
        spyOn(foo, 'constructor');
    });

    it("creates objects instances of CAATContainer", function(){
        expect(foo).not.toBe(null);
    });

});