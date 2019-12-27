"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineState = _interopRequireDefault(require("./PipelineState"));

var _PipelineStatePendingAllOf = _interopRequireDefault(require("./PipelineStatePendingAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStatePending model module.
 * @module model/PipelineStatePending
 * @version 1.1.2
 */
var PipelineStatePending =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStatePending</code>.
   * @alias module:model/PipelineStatePending
   * @implements module:model/PipelineState
   * @implements module:model/PipelineStatePendingAllOf
   * @param type {String} 
   */
  function PipelineStatePending(type) {
    _classCallCheck(this, PipelineStatePending);

    _PipelineState["default"].initialize(this, type);

    _PipelineStatePendingAllOf["default"].initialize(this);

    PipelineStatePending.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStatePending, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStatePending</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStatePending} obj Optional instance to populate.
     * @return {module:model/PipelineStatePending} The populated <code>PipelineStatePending</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStatePending();

        _PipelineState["default"].constructFromObject(data, obj);

        _PipelineStatePendingAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStatePending;
}();
/**
 * @member {String} type
 */


PipelineStatePending.prototype['type'] = undefined;
/**
 * The name of pipeline state (PENDING).
 * @member {module:model/PipelineStatePending.NameEnum} name
 */

PipelineStatePending.prototype['name'] = undefined; // Implement PipelineState interface:

/**
 * @member {String} type
 */

_PipelineState["default"].prototype['type'] = undefined; // Implement PipelineStatePendingAllOf interface:

/**
 * The name of pipeline state (PENDING).
 * @member {module:model/PipelineStatePendingAllOf.NameEnum} name
 */

_PipelineStatePendingAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStatePending['NameEnum'] = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING"
};
var _default = PipelineStatePending;
exports["default"] = _default;