"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepState = _interopRequireDefault(require("./PipelineStepState"));

var _PipelineStepStateReadyAllOf = _interopRequireDefault(require("./PipelineStepStateReadyAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateReady model module.
 * @module model/PipelineStepStateReady
 * @version 1.1.2
 */
var PipelineStepStateReady =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateReady</code>.
   * @alias module:model/PipelineStepStateReady
   * @implements module:model/PipelineStepState
   * @implements module:model/PipelineStepStateReadyAllOf
   * @param type {String} 
   */
  function PipelineStepStateReady(type) {
    _classCallCheck(this, PipelineStepStateReady);

    _PipelineStepState["default"].initialize(this, type);

    _PipelineStepStateReadyAllOf["default"].initialize(this);

    PipelineStepStateReady.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateReady, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateReady</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateReady} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateReady} The populated <code>PipelineStepStateReady</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateReady();

        _PipelineStepState["default"].constructFromObject(data, obj);

        _PipelineStepStateReadyAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStepStateReady;
}();
/**
 * @member {String} type
 */


PipelineStepStateReady.prototype['type'] = undefined;
/**
 * The name of pipeline step state (READY).
 * @member {module:model/PipelineStepStateReady.NameEnum} name
 */

PipelineStepStateReady.prototype['name'] = undefined; // Implement PipelineStepState interface:

/**
 * @member {String} type
 */

_PipelineStepState["default"].prototype['type'] = undefined; // Implement PipelineStepStateReadyAllOf interface:

/**
 * The name of pipeline step state (READY).
 * @member {module:model/PipelineStepStateReadyAllOf.NameEnum} name
 */

_PipelineStepStateReadyAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateReady['NameEnum'] = {
  /**
   * value: "READY"
   * @const
   */
  "READY": "READY"
};
var _default = PipelineStepStateReady;
exports["default"] = _default;