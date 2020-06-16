"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueTypeDetails model module.
 * @module model/IssueTypeDetails
 * @version 1.4.0
 */
var IssueTypeDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeDetails</code>.
   * Details about an issue type.
   * @alias module:model/IssueTypeDetails
   */
  function IssueTypeDetails() {
    _classCallCheck(this, IssueTypeDetails);

    IssueTypeDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueTypeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeDetails} obj Optional instance to populate.
     * @return {module:model/IssueTypeDetails} The populated <code>IssueTypeDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeDetails();

        if (data.hasOwnProperty('avatarId')) {
          obj['avatarId'] = _ApiClient["default"].convertToType(data['avatarId'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('entityId')) {
          obj['entityId'] = _ApiClient["default"].convertToType(data['entityId'], 'String');
        }

        if (data.hasOwnProperty('iconUrl')) {
          obj['iconUrl'] = _ApiClient["default"].convertToType(data['iconUrl'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('subtask')) {
          obj['subtask'] = _ApiClient["default"].convertToType(data['subtask'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeDetails;
}();
/**
 * The ID of the issue type's avatar.
 * @member {Number} avatarId
 */


IssueTypeDetails.prototype['avatarId'] = undefined;
/**
 * The description of the issue type.
 * @member {String} description
 */

IssueTypeDetails.prototype['description'] = undefined;
/**
 * Unique ID for next-gen projects.
 * @member {String} entityId
 */

IssueTypeDetails.prototype['entityId'] = undefined;
/**
 * The URL of the issue type's avatar.
 * @member {String} iconUrl
 */

IssueTypeDetails.prototype['iconUrl'] = undefined;
/**
 * The ID of the issue type.
 * @member {String} id
 */

IssueTypeDetails.prototype['id'] = undefined;
/**
 * The name of the issue type.
 * @member {String} name
 */

IssueTypeDetails.prototype['name'] = undefined;
/**
 * Details of the next-gen projects the issue type is available in.
 * @member {module:model/Scope} scope
 */

IssueTypeDetails.prototype['scope'] = undefined;
/**
 * The URL of these issue type details.
 * @member {String} self
 */

IssueTypeDetails.prototype['self'] = undefined;
/**
 * Whether this issue type is used to create subtasks.
 * @member {Boolean} subtask
 */

IssueTypeDetails.prototype['subtask'] = undefined;
var _default = IssueTypeDetails;
exports["default"] = _default;