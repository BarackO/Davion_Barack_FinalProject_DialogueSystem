/*
 * File: bounding_box.js
 *
 * defines an Axis Aligned Bounding Box (AABB)
 * 
 */
"use strict";

import LineRenderable from "../renderables/line_renderable.js";

const eBoundCollideStatus = Object.freeze({
    eCollideLeft: 1,
    eCollideRight: 2,
    eCollideTop: 4,
    eCollideBottom: 8,
    eInside: 16,
    eOutside: 0
});

class BoundingBox {
    constructor(centerPos, w, h) {
        this.mLL = vec2.fromValues(0, 0);
        this.setBounds(centerPos, w, h);
    }

    // rotation is ignored.
    // centerPos is a vec2
    setBounds(centerPos, w, h) {
        this.mWidth = w;
        this.mHeight = h;
        this.mLL[0] = centerPos[0] - (w / 2);
        this.mLL[1] = centerPos[1] - (h / 2);
    }

    containsPoint(x, y) {
        return ((x > this.minX()) && (x < this.maxX()) &&
            (y > this.minY()) && (y < this.maxY()));
    }

    intersectsBound(otherBound) {
        return ((this.minX() < otherBound.maxX()) &&
            (this.maxX() > otherBound.minX()) &&
            (this.minY() < otherBound.maxY()) &&
            (this.maxY() > otherBound.minY()));
    }

    // returns the status of otherBound wrt to this.
    boundCollideStatus(otherBound) {
        let status = eBoundCollideStatus.eOutside;

        if (this.intersectsBound(otherBound)) {
            if (otherBound.minX() < this.minX()) {
                status |= eBoundCollideStatus.eCollideLeft;
            }
            if (otherBound.maxX() > this.maxX()) {
                status |= eBoundCollideStatus.eCollideRight;
            }
            if (otherBound.minY() < this.minY()) {
                status |= eBoundCollideStatus.eCollideBottom;
            }
            if (otherBound.maxY() > this.maxY()) {
                status |= eBoundCollideStatus.eCollideTop;
            }

            // if the bounds intersects and yet none of the sides overlaps
            // otherBound is completely inside thisBound
            if (status === eBoundCollideStatus.eOutside) {
                status = eBoundCollideStatus.eInside;
            }
        }
        return status;
    }

    mergeBbox(other) {
        var minX = Math.min(this.mLL[0], other.mLL[0]);
        var minY = Math.min(this.mLL[1], other.mLL[1]);
        var maxX = Math.max(this.maxX(), other.maxX());
        var maxY = Math.max(this.maxY(), other.maxY());
        this.mLL[0] = minX;
        this.mLL[1] = minY;
        this.mWidth = maxX - minX;
        this.mHeight = maxY - minY;
    }
    
    draw (camera) {
        var l = new LineRenderable(this.mLL[0], this.mLL[1], 
                                   this.mLL[0]+this.mWidth, this.mLL[1]);
        l.setColor([1, 1, 1, 1]);
        l.setDrawVertices(false);
        l.setPointSize(10);
        l.draw(camera);
        l.setSecondVertex(this.mLL[0], this.mLL[1]+this.mHeight);
        l.draw(camera);
        l.setFirstVertex(this.mLL[0]+this.mWidth, this.mLL[1]+this.mHeight);
        l.draw(camera);
        l.setSecondVertex(this.mLL[0]+this.mWidth, this.mLL[1]);
        l.draw(camera);
    }

    minX() { return this.mLL[0]; }
    maxX() { return this.mLL[0] + this.mWidth; }
    minY() { return this.mLL[1]; }
    maxY() { return this.mLL[1] + this.mHeight; }
}

export {eBoundCollideStatus}
export default BoundingBox;