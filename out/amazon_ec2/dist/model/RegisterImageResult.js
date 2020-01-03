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
 * The RegisterImageResult model module.
 * @module model/RegisterImageResult
 * @version 1.0.0
 */
var RegisterImageResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RegisterImageResult</code>.
   * Contains the output of RegisterImage.
   * @alias module:model/RegisterImageResult
   */
  function RegisterImageResult() {
    _classCallCheck(this, RegisterImageResult);

    RegisterImageResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterImageResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisterImageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterImageResult} obj Optional instance to populate.
     * @return {module:model/RegisterImageResult} The populated <code>RegisterImageResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterImageResult();

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegisterImageResult;
}();
/**
 * @member {String} ImageId
 */


RegisterImageResult.prototype['ImageId'] = undefined;
var _default = RegisterImageResult;
exports["default"] = _default;