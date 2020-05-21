"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _PipelineSelector = _interopRequireDefault(require("./PipelineSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineRefTargetAllOf model module.
 * @module model/PipelineRefTargetAllOf
 * @version 1.2.0
 */
var PipelineRefTargetAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineRefTargetAllOf</code>.
   * A Bitbucket Pipelines reference target.
   * @alias module:model/PipelineRefTargetAllOf
   */
  function PipelineRefTargetAllOf() {
    _classCallCheck(this, PipelineRefTargetAllOf);

    PipelineRefTargetAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineRefTargetAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineRefTargetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineRefTargetAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineRefTargetAllOf} The populated <code>PipelineRefTargetAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineRefTargetAllOf();

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

  return PipelineRefTargetAllOf;
}();
/**
 * The type of reference (branch/tag).
 * @member {module:model/PipelineRefTargetAllOf.RefTypeEnum} ref_type
 */


PipelineRefTargetAllOf.prototype['ref_type'] = undefined;
/**
 * The name of the reference.
 * @member {String} ref_name
 */

PipelineRefTargetAllOf.prototype['ref_name'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

PipelineRefTargetAllOf.prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

PipelineRefTargetAllOf.prototype['selector'] = undefined;
/**
 * Allowed values for the <code>ref_type</code> property.
 * @enum {String}
 * @readonly
 */

PipelineRefTargetAllOf['RefTypeEnum'] = {
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
var _default = PipelineRefTargetAllOf;
exports["default"] = _default;