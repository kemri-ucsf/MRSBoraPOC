"use strict";
var base_model_model_1 = require("./base-model.model");
require("./date.extensions");
exports.METADATA_KEY_SERIALIZABLE = 'SERIALIZABLE';
function serializable(addToNewPayload, addToUpdatePayload, name) {
    if (addToNewPayload === void 0) { addToNewPayload = true; }
    if (addToUpdatePayload === void 0) { addToUpdatePayload = true; }
    return function (target, key) {
        Reflect.defineMetadata(exports.METADATA_KEY_SERIALIZABLE, {
            key: key,
            name: name || key,
            addToNewPayload: addToNewPayload,
            addToUpdatePayload: addToUpdatePayload
        }, target, key);
    };
}
exports.serializable = serializable;
function getSerializables(target) {
    var serializables = [];
    for (var key in target) {
        var metadata = Reflect.getMetadata(exports.METADATA_KEY_SERIALIZABLE, target, key);
        if (metadata) {
            serializables.push(metadata);
        }
    }
    return serializables;
}
exports.getSerializables = getSerializables;
function serialize(target, newPayload, prototype) {
    return getSerializables(prototype || target).reduce(function (prev, prop) {
        var isBaseModel = target[prop.key] instanceof base_model_model_1.BaseModel;
        var baseModelVersion = target[prop.key];
        var isOpenmrsDate = target[prop.key] instanceof Date;
        var openmrsDate = target[prop.key];
        if (newPayload) {
            if (prop.addToNewPayload) {
                prev[prop.name] = isBaseModel || isOpenmrsDate ? (isOpenmrsDate ? openmrsDate.toServerTimezoneString()
                    : baseModelVersion.uuid) : target[prop.key];
            }
        }
        else {
            if (prop.addToUpdatePayload) {
                prev[prop.name] = isBaseModel || isOpenmrsDate ? (isOpenmrsDate ? openmrsDate.toServerTimezoneString()
                    : baseModelVersion.uuid) : target[prop.key];
            }
        }
        return prev;
    }, {});
}
exports.serialize = serialize;
//# sourceMappingURL=serializable.decorator.js.map