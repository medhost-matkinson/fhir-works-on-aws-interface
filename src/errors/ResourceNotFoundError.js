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
exports.isResourceNotFoundError = exports.ResourceNotFoundError = void 0;
// eslint-disable-next-line import/prefer-default-export
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(resourceType, id, message) {
        var _this = this;
        var msg = message || "Resource " + resourceType + "/" + id + " is not known";
        // Node Error class requires passing a string message to the parent class
        _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, ResourceNotFoundError.prototype);
        _this.resourceType = resourceType;
        _this.id = id;
        _this.name = _this.constructor.name;
        _this.isResourceNotFoundError = true;
        return _this;
    }
    return ResourceNotFoundError;
}(Error));
exports.ResourceNotFoundError = ResourceNotFoundError;
function isResourceNotFoundError(error) {
    return Boolean(error) && error.isResourceNotFoundError === true;
}
exports.isResourceNotFoundError = isResourceNotFoundError;
