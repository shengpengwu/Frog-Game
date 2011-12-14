function vect (x, y) {
    this.x = x;
    this.y = y;
    this.add = function (v) {
	this.x += v.x;
	this.y += v.y;
    };
    this.sub = function (v) {
	this.x -= v.x;
	this.y -= v.y;
    };
    this.scale = function (s) {
	this.x *= s;
	this.y *= s;
    };
    this.length = function () {
	return Math.sqrt (this.x * this.x + this.y * this.y);
    };
    this.normalize = function () {
	var scale = Math.sqrt (this.x * this.x + this.y * this.y);
	if (scale == 0)
	    return;
	this.x /= scale;
	this.y /= scale;
    };
    this.zero = function () {
	return ((this.x + this.y) == 0);
    };
    this.dot = function (v) {
	return (this.x * v.x) + (this.y * v.y);
    };
    this.cross = function (v) {
	return (this.x * v.y) - (this.y * v.x);
    };
    this.rotateTo = function (v, omega) {
	//var cos = this.dot (v);
	var mag = this.cross (v);
	var dir = mag / Math.abs (mag);
	//xp = cos * this.x - sin * this.y;
	//yp = sin * this.x + cos * this.y;
	if (Math.abs (mag) < Math.sin (omega)) {
	    this.x = v.x;
	    this.y = v.y;
	    return;
	}
	var cos = Math.cos (dir * omega);
	var sin = Math.sin (dir * omega);
	xp = cos * this.x - sin * this.y;
	yp = sin * this.x + cos * this.y;
	this.x = xp;
	this.y = yp;
    };
    this.clone = function () {
	return new vect (this.x, this.y);
    }
};

vect.scale = function (v, s) {
    return new vect (v.x * s, v.y * s);
};

vect.add = function (v1, v2) {
    return new vect (v1.x + v2.x, v1.y + v2.y);
};

vect.sub = function (v1, v2) {
    return new vect (v1.x - v2.x, v1.y - v2.y);
};

vect.dist = function (v1, v2) {
    var x = v2.x - v1.x;
    var y = v2.y - v1.y;
    return Math.sqrt (x * x + y * y);
};