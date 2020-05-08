"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20063PermissionsBULKCHANGE = _interopRequireDefault(require("./InlineResponse20063PermissionsBULKCHANGE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20063Permissions model module.
 * @module model/InlineResponse20063Permissions
 * @version 1.2.0
 */
var InlineResponse20063Permissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20063Permissions</code>.
   * @alias module:model/InlineResponse20063Permissions
   * @param BULK_CHANGE {module:model/InlineResponse20063PermissionsBULKCHANGE} 
   */
  function InlineResponse20063Permissions(BULK_CHANGE) {
    _classCallCheck(this, InlineResponse20063Permissions);

    InlineResponse20063Permissions.initialize(this, BULK_CHANGE);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20063Permissions, null, [{
    key: "initialize",
    value: function initialize(obj, BULK_CHANGE) {
      obj['BULK_CHANGE'] = BULK_CHANGE;
    }
    /**
     * Constructs a <code>InlineResponse20063Permissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20063Permissions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20063Permissions} The populated <code>InlineResponse20063Permissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20063Permissions();

        if (data.hasOwnProperty('BULK_CHANGE')) {
          obj['BULK_CHANGE'] = _InlineResponse20063PermissionsBULKCHANGE["default"].constructFromObject(data['BULK_CHANGE']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20063Permissions;
}();
/**
 * @member {module:model/InlineResponse20063PermissionsBULKCHANGE} BULK_CHANGE
 */


InlineResponse20063Permissions.prototype['BULK_CHANGE'] = undefined;
var _default = InlineResponse20063Permissions;
exports["default"] = _default;