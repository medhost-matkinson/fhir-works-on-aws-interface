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
exports.isUnauthorizedError = exports.UnauthorizedError = void 0;
// eslint-disable-next-line import/prefer-default-export
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        if (message === void 0) { message = 'Forbidden'; }
        var _this = 
        // Node Error class requires passing a string message to the parent class
        _super.call(this, message) || this;
        Object.setPrototypeOf(_this, UnauthorizedError.prototype);
        _this.name = _this.constructor.name;
        _this.isUnauthorizedError = true;
        return _this;
    }
    return UnauthorizedError;
}(Error));
exports.UnauthorizedError = UnauthorizedError;
function isUnauthorizedError(error) {
    return Boolean(error) && error.isUnauthorizedError === true;
}
exports.isUnauthorizedError = isUnauthorizedError;
