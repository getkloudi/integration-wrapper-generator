"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Repository = _interopRequireDefault(require("./Repository"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepositoryPermission model module.
 * @module model/RepositoryPermission
 * @version 1.1.2
 */
var RepositoryPermission =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepositoryPermission</code>.
   * A user&#39;s permission for a given repository.
   * @alias module:model/RepositoryPermission
   * @param type {String} 
   */
  function RepositoryPermission(type) {
    _classCallCheck(this, RepositoryPermission);

    RepositoryPermission.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositoryPermission, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>RepositoryPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryPermission} obj Optional instance to populate.
     * @return {module:model/RepositoryPermission} The populated <code>RepositoryPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositoryPermission();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }
      }

      return obj;
    }
  }]);

  return RepositoryPermission;
}();
/**
 * @member {String} type
 */


RepositoryPermission.prototype['type'] = undefined;
/**
 * @member {module:model/RepositoryPermission.PermissionEnum} permission
 */

RepositoryPermission.prototype['permission'] = undefined;
/**
 * @member {module:model/User} user
 */

RepositoryPermission.prototype['user'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

RepositoryPermission.prototype['repository'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

RepositoryPermission['PermissionEnum'] = {
  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "write"
   * @const
   */
  "write": "write",

  /**
   * value: "read"
   * @const
   */
  "read": "read"
};
var _default = RepositoryPermission;
exports["default"] = _default;