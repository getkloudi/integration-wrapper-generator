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
 * The ModifyIdentityIdFormatRequest model module.
 * @module model/ModifyIdentityIdFormatRequest
 * @version 1.0.0
 */
var ModifyIdentityIdFormatRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyIdentityIdFormatRequest</code>.
   * @alias module:model/ModifyIdentityIdFormatRequest
   * @param principalArn {String} 
   * @param resource {String} 
   * @param useLongIds {Boolean} 
   */
  function ModifyIdentityIdFormatRequest(principalArn, resource, useLongIds) {
    _classCallCheck(this, ModifyIdentityIdFormatRequest);

    ModifyIdentityIdFormatRequest.initialize(this, principalArn, resource, useLongIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyIdentityIdFormatRequest, null, [{
    key: "initialize",
    value: function initialize(obj, principalArn, resource, useLongIds) {
      obj['PrincipalArn'] = principalArn;
      obj['Resource'] = resource;
      obj['UseLongIds'] = useLongIds;
    }
    /**
     * Constructs a <code>ModifyIdentityIdFormatRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyIdentityIdFormatRequest} obj Optional instance to populate.
     * @return {module:model/ModifyIdentityIdFormatRequest} The populated <code>ModifyIdentityIdFormatRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyIdentityIdFormatRequest();

        if (data.hasOwnProperty('PrincipalArn')) {
          obj['PrincipalArn'] = _ApiClient["default"].convertToType(data['PrincipalArn'], 'String');
        }

        if (data.hasOwnProperty('Resource')) {
          obj['Resource'] = _ApiClient["default"].convertToType(data['Resource'], 'String');
        }

        if (data.hasOwnProperty('UseLongIds')) {
          obj['UseLongIds'] = _ApiClient["default"].convertToType(data['UseLongIds'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ModifyIdentityIdFormatRequest;
}();
/**
 * @member {String} PrincipalArn
 */


ModifyIdentityIdFormatRequest.prototype['PrincipalArn'] = undefined;
/**
 * @member {String} Resource
 */

ModifyIdentityIdFormatRequest.prototype['Resource'] = undefined;
/**
 * @member {Boolean} UseLongIds
 */

ModifyIdentityIdFormatRequest.prototype['UseLongIds'] = undefined;
var _default = ModifyIdentityIdFormatRequest;
exports["default"] = _default;