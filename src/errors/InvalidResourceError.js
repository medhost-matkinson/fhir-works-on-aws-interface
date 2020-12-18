"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.isInvalidResourceError = exports.InvalidResourceError = void 0;
// eslint-disable-next-line import/prefer-default-export
var InvalidResourceError = /** @class */ (function (_super) {
    __extends(InvalidResourceError, _super);
    function InvalidResourceError(message) {
        if (message === void 0) { message = 'Invalid Resource'; }
        var _this = 
        // Node Error class requires passing a string message to the parent class
        _super.call(this, message) || this;
        Object.setPrototypeOf(_this, InvalidResourceError.prototype);
        _this.isInvalidResourceError = true;
        _this.name = _this.constructor.name;
        return _this;
    }
    return InvalidResourceError;
}(Error));
exports.InvalidResourceError = InvalidResourceError;
function isInvalidResourceError(error) {
    return Boolean(error) && error.isInvalidResourceError === true;
}
exports.isInvalidResourceError = isInvalidResourceError;
