"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FpgaImageAttribute = _interopRequireDefault(require("./FpgaImageAttribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyFpgaImageAttributeResult model module.
 * @module model/ModifyFpgaImageAttributeResult
 * @version 1.1.0
 */
var ModifyFpgaImageAttributeResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyFpgaImageAttributeResult</code>.
   * @alias module:model/ModifyFpgaImageAttributeResult
   */
  function ModifyFpgaImageAttributeResult() {
    _classCallCheck(this, ModifyFpgaImageAttributeResult);

    ModifyFpgaImageAttributeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyFpgaImageAttributeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyFpgaImageAttributeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyFpgaImageAttributeResult} obj Optional instance to populate.
     * @return {module:model/ModifyFpgaImageAttributeResult} The populated <code>ModifyFpgaImageAttributeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyFpgaImageAttributeResult();

        if (data.hasOwnProperty('FpgaImageAttribute')) {
          obj['FpgaImageAttribute'] = _FpgaImageAttribute["default"].constructFromObject(data['FpgaImageAttribute']);
        }
      }

      return obj;
    }
  }]);

  return ModifyFpgaImageAttributeResult;
}();
/**
 * @member {module:model/FpgaImageAttribute} FpgaImageAttribute
 */


ModifyFpgaImageAttributeResult.prototype['FpgaImageAttribute'] = undefined;
var _default = ModifyFpgaImageAttributeResult;
exports["default"] = _default;