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
 * The RemoteIssueLinkRequest model module.
 * @module model/RemoteIssueLinkRequest
 * @version 1.4.0
 */
var RemoteIssueLinkRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteIssueLinkRequest</code>.
   * Details of a remote issue link.
   * @alias module:model/RemoteIssueLinkRequest
   */
  function RemoteIssueLinkRequest() {
    _classCallCheck(this, RemoteIssueLinkRequest);

    RemoteIssueLinkRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteIssueLinkRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoteIssueLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteIssueLinkRequest} obj Optional instance to populate.
     * @return {module:model/RemoteIssueLinkRequest} The populated <code>RemoteIssueLinkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteIssueLinkRequest();

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], _Application["default"]);
        }

        if (data.hasOwnProperty('globalId')) {
          obj['globalId'] = _ApiClient["default"].convertToType(data['globalId'], 'String');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _ApiClient["default"].convertToType(data['object'], _RemoteObject["default"]);
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoteIssueLinkRequest;
}();
/**
 * Details of the remote application the linked item is in. For example, trello.
 * @member {module:model/Application} application
 */


RemoteIssueLinkRequest.prototype['application'] = undefined;
/**
 * An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.  Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.  The maximum length is 255 characters.
 * @member {String} globalId
 */

RemoteIssueLinkRequest.prototype['globalId'] = undefined;
/**
 * Details of the item linked to.
 * @member {module:model/RemoteObject} object
 */

RemoteIssueLinkRequest.prototype['object'] = undefined;
/**
 * Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.
 * @member {String} relationship
 */

RemoteIssueLinkRequest.prototype['relationship'] = undefined;
var _default = RemoteIssueLinkRequest;
exports["default"] = _default;