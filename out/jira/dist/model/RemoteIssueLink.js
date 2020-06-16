"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Application = _interopRequireDefault(require("./Application"));

var _RemoteObject = _interopRequireDefault(require("./RemoteObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RemoteIssueLink model module.
 * @module model/RemoteIssueLink
 * @version 1.4.0
 */
var RemoteIssueLink = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteIssueLink</code>.
   * Details of an issue remote link.
   * @alias module:model/RemoteIssueLink
   */
  function RemoteIssueLink() {
    _classCallCheck(this, RemoteIssueLink);

    RemoteIssueLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteIssueLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoteIssueLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteIssueLink} obj Optional instance to populate.
     * @return {module:model/RemoteIssueLink} The populated <code>RemoteIssueLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteIssueLink();

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], _Application["default"]);
        }

        if (data.hasOwnProperty('globalId')) {
          obj['globalId'] = _ApiClient["default"].convertToType(data['globalId'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _ApiClient["default"].convertToType(data['object'], _RemoteObject["default"]);
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoteIssueLink;
}();
/**
 * Details of the remote application the linked item is in.
 * @member {module:model/Application} application
 */


RemoteIssueLink.prototype['application'] = undefined;
/**
 * The global ID of the link, such as the ID of the item on the remote system.
 * @member {String} globalId
 */

RemoteIssueLink.prototype['globalId'] = undefined;
/**
 * The ID of the link.
 * @member {Number} id
 */

RemoteIssueLink.prototype['id'] = undefined;
/**
 * Details of the item linked to.
 * @member {module:model/RemoteObject} object
 */

RemoteIssueLink.prototype['object'] = undefined;
/**
 * Description of the relationship between the issue and the linked item.
 * @member {String} relationship
 */

RemoteIssueLink.prototype['relationship'] = undefined;
/**
 * The URL of the link.
 * @member {String} self
 */

RemoteIssueLink.prototype['self'] = undefined;
var _default = RemoteIssueLink;
exports["default"] = _default;