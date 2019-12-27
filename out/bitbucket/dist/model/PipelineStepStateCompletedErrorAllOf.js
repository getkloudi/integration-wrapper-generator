"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepError = _interopRequireDefault(require("./PipelineStepError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompletedErrorAllOf model module.
 * @module model/PipelineStepStateCompletedErrorAllOf
 * @version 1.1.0
 */
var PipelineStepStateCompletedErrorAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedErrorAllOf</code>.
   * A Bitbucket Pipelines ERROR pipeline step result.
   * @alias module:model/PipelineStepStateCompletedErrorAllOf
   */
  function PipelineStepStateCompletedErrorAllOf() {
    _classCallCheck(this, PipelineStepStateCompletedErrorAllOf);

    PipelineStepStateCompletedErrorAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedErrorAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStepStateCompletedErrorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedErrorAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedErrorAllOf} The populated <code>PipelineStepStateCompletedErrorAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedErrorAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PipelineStepError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return PipelineStepStateCompletedErrorAllOf;
}();
/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStepStateCompletedErrorAllOf.NameEnum} name
 */


PipelineStepStateCompletedErrorAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStepError} error
 */

PipelineStepStateCompletedErrorAllOf.prototype['error'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedErrorAllOf['NameEnum'] = {
  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR"
};
var _default = PipelineStepStateCompletedErrorAllOf;
exports["default"] = _default;