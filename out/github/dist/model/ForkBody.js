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
 * The ForkBody model module.
 * @module model/ForkBody
 * @version 1.4.1
 */
var ForkBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ForkBody</code>.
   * @alias module:model/ForkBody
   */
  function ForkBody() {
    _classCallCheck(this, ForkBody);

    ForkBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ForkBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ForkBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ForkBody} obj Optional instance to populate.
     * @return {module:model/ForkBody} The populated <code>ForkBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ForkBody();

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _ApiClient["default"].convertToType(data['organization'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ForkBody;
}();
/**
 * @member {String} organization
 */


ForkBody.prototype['organization'] = undefined;
var _default = ForkBody;
exports["default"] = _default;