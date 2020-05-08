"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20058PermissionsEDITISSUE = _interopRequireDefault(require("./InlineResponse20058PermissionsEDITISSUE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20058Permissions model module.
 * @module model/InlineResponse20058Permissions
 * @version 1.1.0
 */
var InlineResponse20058Permissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20058Permissions</code>.
   * @alias module:model/InlineResponse20058Permissions
   * @param EDIT_ISSUE {module:model/InlineResponse20058PermissionsEDITISSUE} 
   */
  function InlineResponse20058Permissions(EDIT_ISSUE) {
    _classCallCheck(this, InlineResponse20058Permissions);

    InlineResponse20058Permissions.initialize(this, EDIT_ISSUE);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20058Permissions, null, [{
    key: "initialize",
    value: function initialize(obj, EDIT_ISSUE) {
      obj['EDIT_ISSUE'] = EDIT_ISSUE;
    }
    /**
     * Constructs a <code>InlineResponse20058Permissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20058Permissions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20058Permissions} The populated <code>InlineResponse20058Permissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20058Permissions();

        if (data.hasOwnProperty('EDIT_ISSUE')) {
          obj['EDIT_ISSUE'] = _InlineResponse20058PermissionsEDITISSUE["default"].constructFromObject(data['EDIT_ISSUE']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20058Permissions;
}();
/**
 * @member {module:model/InlineResponse20058PermissionsEDITISSUE} EDIT_ISSUE
 */


InlineResponse20058Permissions.prototype['EDIT_ISSUE'] = undefined;
var _default = InlineResponse20058Permissions;
exports["default"] = _default;