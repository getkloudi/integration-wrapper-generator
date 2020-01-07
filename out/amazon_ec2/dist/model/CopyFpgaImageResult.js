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
 * The CopyFpgaImageResult model module.
 * @module model/CopyFpgaImageResult
 * @version 1.1.0
 */
var CopyFpgaImageResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CopyFpgaImageResult</code>.
   * @alias module:model/CopyFpgaImageResult
   */
  function CopyFpgaImageResult() {
    _classCallCheck(this, CopyFpgaImageResult);

    CopyFpgaImageResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CopyFpgaImageResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CopyFpgaImageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopyFpgaImageResult} obj Optional instance to populate.
     * @return {module:model/CopyFpgaImageResult} The populated <code>CopyFpgaImageResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CopyFpgaImageResult();

        if (data.hasOwnProperty('FpgaImageId')) {
          obj['FpgaImageId'] = _ApiClient["default"].convertToType(data['FpgaImageId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CopyFpgaImageResult;
}();
/**
 * @member {String} FpgaImageId
 */


CopyFpgaImageResult.prototype['FpgaImageId'] = undefined;
var _default = CopyFpgaImageResult;
exports["default"] = _default;