"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineState = _interopRequireDefault(require("./PipelineState"));

var _PipelineStateCompletedAllOf = _interopRequireDefault(require("./PipelineStateCompletedAllOf"));

var _PipelineStateCompletedResult = _interopRequireDefault(require("./PipelineStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompleted model module.
 * @module model/PipelineStateCompleted
 * @version 1.1.2
 */
var PipelineStateCompleted =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompleted</code>.
   * @alias module:model/PipelineStateCompleted
   * @implements module:model/PipelineState
   * @implements module:model/PipelineStateCompletedAllOf
   * @param type {String} 
   */
  function PipelineStateCompleted(type) {
    _classCallCheck(this, PipelineStateCompleted);

    _PipelineState["default"].initialize(this, type);

    _PipelineStateCompletedAllOf["default"].initialize(this);

    PipelineStateCompleted.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompleted, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateCompleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompleted} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompleted} The populated <code>PipelineStateCompleted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompleted();

        _PipelineState["default"].constructFromObject(data, obj);

        _PipelineStateCompletedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _PipelineStateCompletedResult["default"].constructFromObject(data['result']);
        }
      }

      return obj;
    }
  }]);

  return PipelineStateCompleted;
}();
/**
 * @member {String} type
 */


PipelineStateCompleted.prototype['type'] = undefined;
/**
 * The name of pipeline state (COMPLETED).
 * @member {module:model/PipelineStateCompleted.NameEnum} name
 */

PipelineStateCompleted.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStateCompletedResult} result
 */

PipelineStateCompleted.prototype['result'] = undefined; // Implement PipelineState interface:

/**
 * @member {String} type
 */

_PipelineState["default"].prototype['type'] = undefined; // Implement PipelineStateCompletedAllOf interface:

/**
 * The name of pipeline state (COMPLETED).
 * @member {module:model/PipelineStateCompletedAllOf.NameEnum} name
 */

_PipelineStateCompletedAllOf["default"].prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStateCompletedResult} result
 */

_PipelineStateCompletedAllOf["default"].prototype['result'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompleted['NameEnum'] = {
  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED"
};
var _default = PipelineStateCompleted;
exports["default"] = _default;