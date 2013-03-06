(function (){
    var director_1 = new CAAT.Director().initialize(
            600,400,
            document.getElementById('_c1'));

    var scene_1=     director_1.createScene().setFillStyle('#fff');

    // make the scene clear background and draw a black rectangle
    scene_1.paint= function(director, time) {
        var ctx= director.ctx;
        ctx.fillStyle= this.fillStyle;
        ctx.fillRect(0,0,this.width,this.height);
        ctx.strokeStyle= '#000';
        ctx.strokeRect(0,0,this.width-1,this.height-1);
    };


    // create six actors for this scene.
    for(var i=0; i<6; i++ ) {

        // rectangle shaped actors of 80x80 pixels.
        var s = 80;

        // containers can contain other actors or containers.
        var _c1_container = new CAAT.ActorContainer().
                setBounds(i*100+10, 20, s, s).
                setRotation( Math.PI*2*Math.random() ).
                setFillStyle('#ff3fff').
                enableDrag();

        _c1_container.name = 'rectangle'+i;
        // set container paint routine to draw an arrow
        _c1_container.paint= function(director, time) {

            var crx= director.ctx;

            // fill actor
            crx.fillStyle= this.fillStyle;
            crx.fillRect(0,0,this.width,this.height );

            // outline it.
            crx.strokeStyle= 'black';
            crx.strokeRect(0,0,this.width,this.height );

            // draw a white arrow. just to point where position 0,0 is.
            crx.strokeStyle='white';
            crx.beginPath();
            crx.moveTo(5,10);
            crx.lineTo(20,10);
            crx.lineTo(15,5);

            crx.moveTo(20,10);
            crx.lineTo(15,15);

            crx.lineWidth=2;
            crx.lineJoin='round';
            crx.lineCap='round';

            crx.stroke();
        };

        // add actor to scene.
        scene_1.addChild(_c1_container);

        // create a container.
        var _c1_container_child= new CAAT.ActorContainer().
                setBounds(s/2,s/2,s/4,s/4).
                setRotation( Math.PI*2*Math.random() ).
                setFillStyle('#00ff00').
                enableDrag();

        // set a custom paint function for children inside containers.
        _c1_container_child.paint= function(director,time) {
            // call default container paint method.
            CAAT.ActorContainer.superclass.paint.call(this,director,time);
            var ctx= director.ctx;

            // fill a white circle of 10x10 pixels at position 2,2
            // just to show where 0,0 is positioned on screen.
            ctx.fillStyle='white';
            ctx.beginPath();
            ctx.arc(7,7,5,0,2*Math.PI,false);
            ctx.fill();
        };


        // add this container as a child of the previous created container.
        _c1_container.addChild(_c1_container_child);
    }

    // set animation to 10fps.
    CAAT.loop(10);
})();