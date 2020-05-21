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
 * The PipelineStepStateCompletedExpiredAllOf model module.
 * @module model/PipelineStepStateCompletedExpiredAllOf
 * @version 1.2.0
 */
var PipelineStepStateCompletedExpiredAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedExpiredAllOf</code>.
   * A Bitbucket Pipelines EXPIRED pipeline step result.
   * @alias module:model/PipelineStepStateCompletedExpiredAllOf
   */
  function PipelineStepStateCompletedExpiredAllOf() {
    _classCallCheck(this, PipelineStepStateCompletedExpiredAllOf);

    PipelineStepStateCompletedExpiredAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedExpiredAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStepStateCompletedExpiredAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedExpiredAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedExpiredAllOf} The populated <code>PipelineStepStateCompletedExpiredAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedExpiredAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStepStateCompletedExpiredAllOf;
}();
/**
 * The name of the result (EXPIRED)
 * @member {module:model/PipelineStepStateCompletedExpiredAllOf.NameEnum} name
 */


PipelineStepStateCompletedExpiredAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedExpiredAllOf['NameEnum'] = {
  /**
   * value: "EXPIRED"
   * @const
   */
  "EXPIRED": "EXPIRED"
};
var _default = PipelineStepStateCompletedExpiredAllOf;
exports["default"] = _default;