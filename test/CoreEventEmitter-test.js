// LICENSE : MIT
"use strict";
const assert = require("assert");
import CoreEventEmitter from "../src/CoreEventEmitter";
describe("CoreEventEmitter", function () {
    describe("#onDispatch", function () {
        it("should return un-listen function", function () {
            const emitter = new CoreEventEmitter();
            const unListen = emitter.onDispatch(() => {
                // should not called
                throw new Error("don't called");
            });
            // when
            unListen();
            // then
            emitter.dispatch({type: "???"});
        });
    });
    describe("#dispatch", function () {
        it("should dispatch with payload object, otherwise throw error", function () {
            const emitter = new CoreEventEmitter();
            try {
                emitter.dispatch("it is not payload");
                throw new Error("UNREACHED");
            } catch (error) {
                assert(error.name === assert.AssertionError.name);
            }
        });
        it("should pass payload object to listening handler", function (done) {
            const emitter = new CoreEventEmitter();
            const expectedPayload = {
                type: "pay",
                value: 100
            };
            emitter.onDispatch(payload => {
                assert.deepEqual(payload, expectedPayload)
                done();
            });
            emitter.dispatch(expectedPayload);
        });
    });
});