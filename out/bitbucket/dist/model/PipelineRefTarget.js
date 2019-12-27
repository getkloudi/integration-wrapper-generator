"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _PipelineRefTargetAllOf = _interopRequireDefault(require("./PipelineRefTargetAllOf"));

var _PipelineSelector = _interopRequireDefault(require("./PipelineSelector"));

var _PipelineTarget = _interopRequireDefault(require("./PipelineTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineRefTarget model module.
 * @module model/PipelineRefTarget
 * @version 1.1.2
 */
var PipelineRefTarget =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineRefTarget</code>.
   * @alias module:model/PipelineRefTarget
   * @implements module:model/PipelineTarget
   * @implements module:model/PipelineRefTargetAllOf
   * @param type {String} 
   */
  function PipelineRefTarget(type) {
    _classCallCheck(this, PipelineRefTarget);

    _PipelineTarget["default"].initialize(this, type);

    _PipelineRefTargetAllOf["default"].initialize(this);

    PipelineRefTarget.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineRefTarget, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineRefTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineRefTarget} obj Optional instance to populate.
     * @return {module:model/PipelineRefTarget} The populated <code>PipelineRefTarget</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineRefTarget();

        _PipelineTarget["default"].constructFromObject(data, obj);

        _PipelineRefTargetAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('ref_type')) {
          obj['ref_type'] = _ApiClient["default"].convertToType(data['ref_type'], 'String');
        }

        if (data.hasOwnProperty('ref_name')) {
          obj['ref_name'] = _ApiClient["default"].convertToType(data['ref_name'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _Commit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('selector')) {
          obj['selector'] = _PipelineSelector["default"].constructFromObject(data['selector']);
        }
      }

      return obj;
    }
  }]);

  return PipelineRefTarget;
}();
/**
 * @member {String} type
 */


PipelineRefTarget.prototype['type'] = undefined;
/**
 * The type of reference (branch/tag).
 * @member {module:model/PipelineRefTarget.RefTypeEnum} ref_type
 */

PipelineRefTarget.prototype['ref_type'] = undefined;
/**
 * The name of the reference.
 * @member {String} ref_name
 */

PipelineRefTarget.prototype['ref_name'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

PipelineRefTarget.prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

PipelineRefTarget.prototype['selector'] = undefined; // Implement PipelineTarget interface:

/**
 * @member {String} type
 */

_PipelineTarget["default"].prototype['type'] = undefined; // Implement PipelineRefTargetAllOf interface:

/**
 * The type of reference (branch/tag).
 * @member {module:model/PipelineRefTargetAllOf.RefTypeEnum} ref_type
 */

_PipelineRefTargetAllOf["default"].prototype['ref_type'] = undefined;
/**
 * The name of the reference.
 * @member {String} ref_name
 */

_PipelineRefTargetAllOf["default"].prototype['ref_name'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

_PipelineRefTargetAllOf["default"].prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

_PipelineRefTargetAllOf["default"].prototype['selector'] = undefined;
/**
 * Allowed values for the <code>ref_type</code> property.
 * @enum {String}
 * @readonly
 */

PipelineRefTarget['RefTypeEnum'] = {
  /**
   * value: "branch"
   * @const
   */
  "branch": "branch",

  /**
   * value: "tag"
   * @const
   */
  "tag": "tag",

  /**
   * value: "named_branch"
   * @const
   */
  "named_branch": "named_branch",

  /**
   * value: "bookmark"
   * @const
   */
  "bookmark": "bookmark"
};
var _default = PipelineRefTarget;
exports["default"] = _default;