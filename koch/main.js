let snowflake;


Number.prototype.rounded = function(i) {
   i = Math.pow(10, i || 15);
   return Math.round(this*i)/i;
};

function background() {
    ctx.fillStyle = 'white';
    ctx.rect(0, 0, cnv.width, cnv.height);
    ctx.fill();
}

function createCanvas(width, height) {
    window.cnv = document.getElementById('canvas');
    cnv.width = width;
    cnv.height = height;
    window.ctx = cnv.getContext('2d');
}

function grow() {
    snowflake.grow();
    background();
    snowflake.show();

}

function wither() {
    snowflake.wither();
    background();
    snowflake.show();
}

window.onload = function() {
    createCanvas(800, 600);
    snowflake = new KochSnowflake({x: 400, y: 300}, 200, -Math.PI/2);
    snowflake.show();
};
