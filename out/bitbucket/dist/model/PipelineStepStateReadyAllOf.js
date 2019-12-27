"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateReadyAllOf model module.
 * @module model/PipelineStepStateReadyAllOf
 * @version 1.1.2
 */
var PipelineStepStateReadyAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateReadyAllOf</code>.
   * A Bitbucket Pipelines READY pipeline step state.
   * @alias module:model/PipelineStepStateReadyAllOf
   */
  function PipelineStepStateReadyAllOf() {
    _classCallCheck(this, PipelineStepStateReadyAllOf);

    PipelineStepStateReadyAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateReadyAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStepStateReadyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateReadyAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateReadyAllOf} The populated <code>PipelineStepStateReadyAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateReadyAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStepStateReadyAllOf;
}();
/**
 * The name of pipeline step state (READY).
 * @member {module:model/PipelineStepStateReadyAllOf.NameEnum} name
 */


PipelineStepStateReadyAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateReadyAllOf['NameEnum'] = {
  /**
   * value: "READY"
   * @const
   */
  "READY": "READY"
};
var _default = PipelineStepStateReadyAllOf;
exports["default"] = _default;