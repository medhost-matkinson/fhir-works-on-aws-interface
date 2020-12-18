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
exports.isResourceVersionNotFoundError = exports.ResourceVersionNotFoundError = void 0;
// eslint-disable-next-line import/prefer-default-export
var ResourceVersionNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceVersionNotFoundError, _super);
    function ResourceVersionNotFoundError(resourceType, id, version, message) {
        var _this = this;
        var msg = message || "Version \"" + version + "\" is not valid for resource " + resourceType + "/" + id;
        // Node Error class requires passing a string message to the parent class
        _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, ResourceVersionNotFoundError.prototype);
        _this.resourceType = resourceType;
        _this.id = id;
        _this.version = version;
        _this.name = _this.constructor.name;
        _this.isResourceVersionNotFoundError = true;
        return _this;
    }
    return ResourceVersionNotFoundError;
}(Error));
exports.ResourceVersionNotFoundError = ResourceVersionNotFoundError;
function isResourceVersionNotFoundError(error) {
    return Boolean(error) && error.isResourceVersionNotFoundError === true;
}
exports.isResourceVersionNotFoundError = isResourceVersionNotFoundError;
