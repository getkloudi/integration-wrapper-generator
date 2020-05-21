"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SshAccountKeyAllOf model module.
 * @module model/SshAccountKeyAllOf
 * @version 1.2.0
 */
var SshAccountKeyAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SshAccountKeyAllOf</code>.
   * Represents an SSH public key for a user.
   * @alias module:model/SshAccountKeyAllOf
   */
  function SshAccountKeyAllOf() {
    _classCallCheck(this, SshAccountKeyAllOf);

    SshAccountKeyAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SshAccountKeyAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SshAccountKeyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshAccountKeyAllOf} obj Optional instance to populate.
     * @return {module:model/SshAccountKeyAllOf} The populated <code>SshAccountKeyAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SshAccountKeyAllOf();

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Account["default"].constructFromObject(data['owner']);
        }
      }

      return obj;
    }
  }]);

  return SshAccountKeyAllOf;
}();
/**
 * @member {module:model/Account} owner
 */


SshAccountKeyAllOf.prototype['owner'] = undefined;
var _default = SshAccountKeyAllOf;
exports["default"] = _default;