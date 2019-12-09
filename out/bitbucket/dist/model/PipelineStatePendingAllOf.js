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
 * The PipelineStatePendingAllOf model module.
 * @module model/PipelineStatePendingAllOf
 * @version 1.0.0
 */
var PipelineStatePendingAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStatePendingAllOf</code>.
   * A Bitbucket Pipelines PENDING pipeline state.
   * @alias module:model/PipelineStatePendingAllOf
   */
  function PipelineStatePendingAllOf() {
    _classCallCheck(this, PipelineStatePendingAllOf);

    PipelineStatePendingAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStatePendingAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStatePendingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStatePendingAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStatePendingAllOf} The populated <code>PipelineStatePendingAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStatePendingAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStatePendingAllOf;
}();
/**
 * The name of pipeline state (PENDING).
 * @member {module:model/PipelineStatePendingAllOf.NameEnum} name
 */


PipelineStatePendingAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStatePendingAllOf['NameEnum'] = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING"
};
var _default = PipelineStatePendingAllOf;
exports["default"] = _default;