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
 * The RemoteIssueLinkIdentifies model module.
 * @module model/RemoteIssueLinkIdentifies
 * @version 1.4.0
 */
var RemoteIssueLinkIdentifies = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteIssueLinkIdentifies</code>.
   * Details of the identifiers for a created or updated remote issue link.
   * @alias module:model/RemoteIssueLinkIdentifies
   */
  function RemoteIssueLinkIdentifies() {
    _classCallCheck(this, RemoteIssueLinkIdentifies);

    RemoteIssueLinkIdentifies.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteIssueLinkIdentifies, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoteIssueLinkIdentifies</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteIssueLinkIdentifies} obj Optional instance to populate.
     * @return {module:model/RemoteIssueLinkIdentifies} The populated <code>RemoteIssueLinkIdentifies</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteIssueLinkIdentifies();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoteIssueLinkIdentifies;
}();
/**
 * The ID of the remote issue link, such as the ID of the item on the remote system.
 * @member {Number} id
 */


RemoteIssueLinkIdentifies.prototype['id'] = undefined;
/**
 * The URL of the remote issue link.
 * @member {String} self
 */

RemoteIssueLinkIdentifies.prototype['self'] = undefined;
var _default = RemoteIssueLinkIdentifies;
exports["default"] = _default;