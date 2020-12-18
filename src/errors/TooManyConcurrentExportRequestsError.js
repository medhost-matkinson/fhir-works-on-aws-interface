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
exports.isTooManyConcurrentExportRequestsError = exports.TooManyConcurrentExportRequestsError = void 0;
var TooManyConcurrentExportRequestsError = /** @class */ (function (_super) {
    __extends(TooManyConcurrentExportRequestsError, _super);
    function TooManyConcurrentExportRequestsError(message) {
        if (message === void 0) { message = 'Too Many Concurrent Export Requests'; }
        var _this = 
        // Node Error class requires passing a string message to the parent class
        _super.call(this, message) || this;
        Object.setPrototypeOf(_this, TooManyConcurrentExportRequestsError.prototype);
        _this.isTooManyConcurrentExportRequestsError = true;
        _this.name = _this.constructor.name;
        return _this;
    }
    return TooManyConcurrentExportRequestsError;
}(Error));
exports.TooManyConcurrentExportRequestsError = TooManyConcurrentExportRequestsError;
function isTooManyConcurrentExportRequestsError(error) {
    return (Boolean(error) &&
        error.isTooManyConcurrentExportRequestsError === true);
}
exports.isTooManyConcurrentExportRequestsError = isTooManyConcurrentExportRequestsError;
