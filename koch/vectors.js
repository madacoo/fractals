let add = (a, b) => {
    /* Given vectors a and b, return their sum. */
    return { x: a.x + b.x,
       y: a.y + b.y };
};  

let angle = (v) => {
    /* Given vector v return its angle from x axis. */
    return Math.atan(v.y/v.x);
};

let magnitude = (v) => {
    /* Given vector v return its magnitude. */
    return Math.hypot(v.x, v.y);
};

let normalize = (v, mag) => {
    /* Given vector v and (optionally) its magnitude,
       return a unit vector with same direction. */
    mag = mag || magnitude(v);
    return { x: v.x / mag,
             y: v.y / mag };
}

let scale = (v, scalar) => {
    /* Given a vector v, return a scaled vector. */
    return { x: v.x * scalar,
             y: v.y * scalar };
};

let sub = (a, b) => {
    /* Given vectors a and b, return their difference. */
    return { x: a.x - b.x,
             y: a.y - b.y };
};

let rotate = (theta) => {
    /* Given angle theta return the unit vector at that angle. */
    return { x: Math.cos(theta).rounded(3),
             y: Math.sin(theta).rounded(3) };
};
