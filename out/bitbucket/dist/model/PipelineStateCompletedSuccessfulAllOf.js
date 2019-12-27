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
 * The PipelineStateCompletedSuccessfulAllOf model module.
 * @module model/PipelineStateCompletedSuccessfulAllOf
 * @version 1.1.2
 */
var PipelineStateCompletedSuccessfulAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompletedSuccessfulAllOf</code>.
   * A Bitbucket Pipelines SUCCESSFUL pipeline result.
   * @alias module:model/PipelineStateCompletedSuccessfulAllOf
   */
  function PipelineStateCompletedSuccessfulAllOf() {
    _classCallCheck(this, PipelineStateCompletedSuccessfulAllOf);

    PipelineStateCompletedSuccessfulAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedSuccessfulAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStateCompletedSuccessfulAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedSuccessfulAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedSuccessfulAllOf} The populated <code>PipelineStateCompletedSuccessfulAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedSuccessfulAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStateCompletedSuccessfulAllOf;
}();
/**
 * The name of the successful result (SUCCESSFUL).
 * @member {module:model/PipelineStateCompletedSuccessfulAllOf.NameEnum} name
 */


PipelineStateCompletedSuccessfulAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedSuccessfulAllOf['NameEnum'] = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  "SUCCESSFUL": "SUCCESSFUL"
};
var _default = PipelineStateCompletedSuccessfulAllOf;
exports["default"] = _default;