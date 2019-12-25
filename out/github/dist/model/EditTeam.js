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
 * The EditTeam model module.
 * @module model/EditTeam
 * @version 1.4.0
 */
var EditTeam =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EditTeam</code>.
   * @alias module:model/EditTeam
   * @param name {String} 
   */
  function EditTeam(name) {
    _classCallCheck(this, EditTeam);

    EditTeam.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EditTeam, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>EditTeam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditTeam} obj Optional instance to populate.
     * @return {module:model/EditTeam} The populated <code>EditTeam</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EditTeam();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EditTeam;
}();
/**
 * @member {String} name
 */


EditTeam.prototype['name'] = undefined;
/**
 * @member {module:model/EditTeam.PermissionEnum} permission
 */

EditTeam.prototype['permission'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

EditTeam['PermissionEnum'] = {
  /**
   * value: "pull"
   * @const
   */
  "pull": "pull",

  /**
   * value: "push"
   * @const
   */
  "push": "push",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin"
};
var _default = EditTeam;
exports["default"] = _default;