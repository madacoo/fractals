let snowflake;


Number.prototype.rounded = function(i) {
   i = Math.pow(10, i || 15);
   return Math.round(this*i)/i;
};

function createCanvas(width, height) {
    window.cnv = document.getElementById('canvas');
    cnv.width = width;
    cnv.height = height;
    window.ctx = cnv.getContext('2d');
}


window.onload = function() {
    createCanvas(800, 600);
    snowflake = new KochSnowflake({x: 400, y: 300}, 200, -Math.PI/2);
    let n = 4;
    for (let i = 0; i < n; i++) {
        snowflake.iterate();
    }
    snowflake.show();
    
};
