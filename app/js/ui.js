var myDirector = myDirector || {};
myDirector.Ui = myDirector.UI || {};

myDirector.Ui.Button = (function (myDir, undefined){

    var createButton = function(name, behaviour){
        var button = new CAAT.ActorContainer().
                    setBounds(100+10, 20, 30, 30).
                    setRotation( Math.PI*2*Math.random() ).
                    setFillStyle('#ff3fff');
                    // enableDrag();
        button.name = name || "defaultButton";
        return button;
    };

    return{
        createButton: createButton
    };

})();
