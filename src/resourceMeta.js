"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
exports.__esModule = true;
exports.generateMeta = void 0;
function generateMeta(vid, lastUpdatedDate) {
    if (lastUpdatedDate === void 0) { lastUpdatedDate = new Date(); }
    var meta = {
        versionId: vid,
        lastUpdated: lastUpdatedDate.toISOString()
    };
    return meta;
}
exports.generateMeta = generateMeta;
