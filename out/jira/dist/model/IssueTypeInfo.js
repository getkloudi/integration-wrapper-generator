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
 * The IssueTypeInfo model module.
 * @module model/IssueTypeInfo
 * @version 1.4.0
 */
var IssueTypeInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeInfo</code>.
   * Details of an issue type.
   * @alias module:model/IssueTypeInfo
   */
  function IssueTypeInfo() {
    _classCallCheck(this, IssueTypeInfo);

    IssueTypeInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueTypeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeInfo} obj Optional instance to populate.
     * @return {module:model/IssueTypeInfo} The populated <code>IssueTypeInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeInfo();

        if (data.hasOwnProperty('avatarId')) {
          obj['avatarId'] = _ApiClient["default"].convertToType(data['avatarId'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeInfo;
}();
/**
 * The avatar of the issue type.
 * @member {Number} avatarId
 */


IssueTypeInfo.prototype['avatarId'] = undefined;
/**
 * The ID of the issue type.
 * @member {Number} id
 */

IssueTypeInfo.prototype['id'] = undefined;
/**
 * The name of the issue type.
 * @member {String} name
 */

IssueTypeInfo.prototype['name'] = undefined;
var _default = IssueTypeInfo;
exports["default"] = _default;