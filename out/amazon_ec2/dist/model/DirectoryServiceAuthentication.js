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
 * The DirectoryServiceAuthentication model module.
 * @module model/DirectoryServiceAuthentication
 * @version 1.1.0
 */
var DirectoryServiceAuthentication =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DirectoryServiceAuthentication</code>.
   * Describes an Active Directory.
   * @alias module:model/DirectoryServiceAuthentication
   */
  function DirectoryServiceAuthentication() {
    _classCallCheck(this, DirectoryServiceAuthentication);

    DirectoryServiceAuthentication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectoryServiceAuthentication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DirectoryServiceAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectoryServiceAuthentication} obj Optional instance to populate.
     * @return {module:model/DirectoryServiceAuthentication} The populated <code>DirectoryServiceAuthentication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectoryServiceAuthentication();

        if (data.hasOwnProperty('DirectoryId')) {
          obj['DirectoryId'] = _ApiClient["default"].convertToType(data['DirectoryId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DirectoryServiceAuthentication;
}();
/**
 * @member {String} DirectoryId
 */


DirectoryServiceAuthentication.prototype['DirectoryId'] = undefined;
var _default = DirectoryServiceAuthentication;
exports["default"] = _default;