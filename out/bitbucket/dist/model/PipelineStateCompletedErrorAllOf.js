"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineError = _interopRequireDefault(require("./PipelineError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompletedErrorAllOf model module.
 * @module model/PipelineStateCompletedErrorAllOf
 * @version 1.1.0
 */
var PipelineStateCompletedErrorAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompletedErrorAllOf</code>.
   * A Bitbucket Pipelines ERROR pipeline result.
   * @alias module:model/PipelineStateCompletedErrorAllOf
   */
  function PipelineStateCompletedErrorAllOf() {
    _classCallCheck(this, PipelineStateCompletedErrorAllOf);

    PipelineStateCompletedErrorAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedErrorAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStateCompletedErrorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedErrorAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedErrorAllOf} The populated <code>PipelineStateCompletedErrorAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedErrorAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PipelineError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return PipelineStateCompletedErrorAllOf;
}();
/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStateCompletedErrorAllOf.NameEnum} name
 */


PipelineStateCompletedErrorAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineError} error
 */

PipelineStateCompletedErrorAllOf.prototype['error'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedErrorAllOf['NameEnum'] = {
  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR"
};
var _default = PipelineStateCompletedErrorAllOf;
exports["default"] = _default;