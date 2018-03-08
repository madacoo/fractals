
class KochSnowflake {
    constructor(centroid, circumradius, theta) {
        this.curves = [];
        let [a, b, c] = equilateral(centroid, circumradius, theta);
        this.curves.push(new KochCurve(a, b));
        this.curves.push(new KochCurve(b, c));
        this.curves.push(new KochCurve(c, a));
    }

    iterate() {
        for (let i = 0; i < this.curves.length; i++) {
            this.curves[i].iterate();
        }
    }

    show() {
        for (let i = 0; i < this.curves.length; i++) {
            this.curves[i].show();
        }
    }
}


class KochCurve {
    constructor(a, b) {
        this.points = [a, b];
    }

    iterate() {
        let new_points = [];

        for (let i = 0; i < this.points.length-1; i++) {
            let a = this.points[i];
            let b = this.points[i+1];

            let v = sub(b, a);
            let theta = angle(v);
            let mag = magnitude(v) / 3;
            let f = (v.x < 0) ? sub : add;
            let tri = kochTriangle(a, mag, theta, f);

            new_points.push(a);
            new_points.push(tri[0]);
            new_points.push(tri[1]);
            new_points.push(tri[2]);
        }

        new_points.push(this.points[this.points.length-1]);
        
        this.points = new_points;
    }

    show() {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();
    }
}

let kochTriangle = (p, mag, theta, f) => {
    let unit = rotate(theta);
    let vect = scale(unit, mag);
    let r = rotate(theta - Math.PI/3);

    let a, b, c;
    a = f(p, vect);
    b = f(a, scale(r, mag));
    c = f(p, scale(vect, 2));

    return [a, b, c];
};


let equilateral = (centroid, circumradius, theta) => {
    let ua = rotate(theta);
    let a = add(centroid, scale(ua, circumradius));
    let ub = rotate(theta + 2*Math.PI/3);
    let b = add(centroid, scale(ub, circumradius));
    let uc = rotate(theta + (2/3)*2*Math.PI);
    let c = add(centroid, scale(uc, circumradius));

    return [a, b, c];
};
