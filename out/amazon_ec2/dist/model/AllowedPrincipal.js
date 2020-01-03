"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrincipalType = _interopRequireDefault(require("./PrincipalType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AllowedPrincipal model module.
 * @module model/AllowedPrincipal
 * @version 1.0.0
 */
var AllowedPrincipal =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AllowedPrincipal</code>.
   * Describes a principal.
   * @alias module:model/AllowedPrincipal
   */
  function AllowedPrincipal() {
    _classCallCheck(this, AllowedPrincipal);

    AllowedPrincipal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AllowedPrincipal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AllowedPrincipal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllowedPrincipal} obj Optional instance to populate.
     * @return {module:model/AllowedPrincipal} The populated <code>AllowedPrincipal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllowedPrincipal();

        if (data.hasOwnProperty('Principal')) {
          obj['Principal'] = _ApiClient["default"].convertToType(data['Principal'], 'String');
        }

        if (data.hasOwnProperty('PrincipalType')) {
          obj['PrincipalType'] = _PrincipalType["default"].constructFromObject(data['PrincipalType']);
        }
      }

      return obj;
    }
  }]);

  return AllowedPrincipal;
}();
/**
 * @member {String} Principal
 */


AllowedPrincipal.prototype['Principal'] = undefined;
/**
 * @member {module:model/PrincipalType} PrincipalType
 */

AllowedPrincipal.prototype['PrincipalType'] = undefined;
var _default = AllowedPrincipal;
exports["default"] = _default;