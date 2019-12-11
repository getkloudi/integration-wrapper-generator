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
 * The SSHKey model module.
 * @module model/SSHKey
 * @version 1.1.0
 */
var SSHKey =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SSHKey</code>.
   * Delete an SSH key from the currently authenticated user
   * @alias module:model/SSHKey
   */
  function SSHKey() {
    _classCallCheck(this, SSHKey);

    SSHKey.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SSHKey, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SSHKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SSHKey} obj Optional instance to populate.
     * @return {module:model/SSHKey} The populated <code>SSHKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SSHKey();

        if (data.hasOwnProperty('can_push')) {
          obj['can_push'] = _ApiClient["default"].convertToType(data['can_push'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SSHKey;
}();
/**
 * @member {String} can_push
 */


SSHKey.prototype['can_push'] = undefined;
/**
 * @member {String} created_at
 */

SSHKey.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

SSHKey.prototype['id'] = undefined;
/**
 * @member {String} key
 */

SSHKey.prototype['key'] = undefined;
/**
 * @member {String} title
 */

SSHKey.prototype['title'] = undefined;
var _default = SSHKey;
exports["default"] = _default;