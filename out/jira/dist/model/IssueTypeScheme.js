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
 * The IssueTypeScheme model module.
 * @module model/IssueTypeScheme
 * @version 1.4.0
 */
var IssueTypeScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeScheme</code>.
   * Details of an issue type scheme.
   * @alias module:model/IssueTypeScheme
   * @param id {String} The ID of the issue type scheme.
   * @param name {String} The name of the issue type scheme.
   */
  function IssueTypeScheme(id, name) {
    _classCallCheck(this, IssueTypeScheme);

    IssueTypeScheme.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeScheme, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>IssueTypeScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScheme} obj Optional instance to populate.
     * @return {module:model/IssueTypeScheme} The populated <code>IssueTypeScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeScheme();

        if (data.hasOwnProperty('defaultIssueTypeId')) {
          obj['defaultIssueTypeId'] = _ApiClient["default"].convertToType(data['defaultIssueTypeId'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isDefault')) {
          obj['isDefault'] = _ApiClient["default"].convertToType(data['isDefault'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeScheme;
}();
/**
 * The ID of the default issue type of the issue type scheme.
 * @member {String} defaultIssueTypeId
 */


IssueTypeScheme.prototype['defaultIssueTypeId'] = undefined;
/**
 * The description of the issue type scheme.
 * @member {String} description
 */

IssueTypeScheme.prototype['description'] = undefined;
/**
 * The ID of the issue type scheme.
 * @member {String} id
 */

IssueTypeScheme.prototype['id'] = undefined;
/**
 * Whether the issue type scheme is the default.
 * @member {Boolean} isDefault
 */

IssueTypeScheme.prototype['isDefault'] = undefined;
/**
 * The name of the issue type scheme.
 * @member {String} name
 */

IssueTypeScheme.prototype['name'] = undefined;
var _default = IssueTypeScheme;
exports["default"] = _default;