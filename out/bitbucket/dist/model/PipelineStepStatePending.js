"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepState = _interopRequireDefault(require("./PipelineStepState"));

var _PipelineStepStatePendingAllOf = _interopRequireDefault(require("./PipelineStepStatePendingAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStatePending model module.
 * @module model/PipelineStepStatePending
 * @version 1.0.0
 */
var PipelineStepStatePending =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStatePending</code>.
   * @alias module:model/PipelineStepStatePending
   * @implements module:model/PipelineStepState
   * @implements module:model/PipelineStepStatePendingAllOf
   * @param type {String} 
   */
  function PipelineStepStatePending(type) {
    _classCallCheck(this, PipelineStepStatePending);

    _PipelineStepState["default"].initialize(this, type);

    _PipelineStepStatePendingAllOf["default"].initialize(this);

    PipelineStepStatePending.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStatePending, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStatePending</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStatePending} obj Optional instance to populate.
     * @return {module:model/PipelineStepStatePending} The populated <code>PipelineStepStatePending</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStatePending();

        _PipelineStepState["default"].constructFromObject(data, obj);

        _PipelineStepStatePendingAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStepStatePending;
}();
/**
 * @member {String} type
 */


PipelineStepStatePending.prototype['type'] = undefined;
/**
 * The name of pipeline step state (PENDING).
 * @member {module:model/PipelineStepStatePending.NameEnum} name
 */

PipelineStepStatePending.prototype['name'] = undefined; // Implement PipelineStepState interface:

/**
 * @member {String} type
 */

_PipelineStepState["default"].prototype['type'] = undefined; // Implement PipelineStepStatePendingAllOf interface:

/**
 * The name of pipeline step state (PENDING).
 * @member {module:model/PipelineStepStatePendingAllOf.NameEnum} name
 */

_PipelineStepStatePendingAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStatePending['NameEnum'] = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING"
};
var _default = PipelineStepStatePending;
exports["default"] = _default;