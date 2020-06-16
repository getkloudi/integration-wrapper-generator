"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RemoteObject model module.
 * @module model/RemoteObject
 * @version 1.4.0
 */
var RemoteObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteObject</code>.
   * The linked item.
   * @alias module:model/RemoteObject
   * @param title {String} The title of the item.
   * @param url {String} The URL of the item.
   */
  function RemoteObject(title, url) {
    _classCallCheck(this, RemoteObject);

    RemoteObject.initialize(this, title, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteObject, null, [{
    key: "initialize",
    value: function initialize(obj, title, url) {
      obj['title'] = title;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>RemoteObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteObject} obj Optional instance to populate.
     * @return {module:model/RemoteObject} The populated <code>RemoteObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteObject();

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], _Icon["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _Status["default"]);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoteObject;
}();
/**
 * Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
 * @member {module:model/Icon} icon
 */


RemoteObject.prototype['icon'] = undefined;
/**
 * The status of the item.
 * @member {module:model/Status} status
 */

RemoteObject.prototype['status'] = undefined;
/**
 * The summary details of the item.
 * @member {String} summary
 */

RemoteObject.prototype['summary'] = undefined;
/**
 * The title of the item.
 * @member {String} title
 */

RemoteObject.prototype['title'] = undefined;
/**
 * The URL of the item.
 * @member {String} url
 */

RemoteObject.prototype['url'] = undefined;
var _default = RemoteObject;
exports["default"] = _default;