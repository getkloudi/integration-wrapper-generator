"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AssociatedItemBean = _interopRequireDefault(require("./AssociatedItemBean"));

var _ChangedValueBean = _interopRequireDefault(require("./ChangedValueBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuditRecordBean model module.
 * @module model/AuditRecordBean
 * @version 1.4.0
 */
var AuditRecordBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuditRecordBean</code>.
   * An audit record.
   * @alias module:model/AuditRecordBean
   */
  function AuditRecordBean() {
    _classCallCheck(this, AuditRecordBean);

    AuditRecordBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuditRecordBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuditRecordBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditRecordBean} obj Optional instance to populate.
     * @return {module:model/AuditRecordBean} The populated <code>AuditRecordBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuditRecordBean();

        if (data.hasOwnProperty('associatedItems')) {
          obj['associatedItems'] = _ApiClient["default"].convertToType(data['associatedItems'], [_AssociatedItemBean["default"]]);
        }

        if (data.hasOwnProperty('authorKey')) {
          obj['authorKey'] = _ApiClient["default"].convertToType(data['authorKey'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('changedValues')) {
          obj['changedValues'] = _ApiClient["default"].convertToType(data['changedValues'], [_ChangedValueBean["default"]]);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('eventSource')) {
          obj['eventSource'] = _ApiClient["default"].convertToType(data['eventSource'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('objectItem')) {
          obj['objectItem'] = _AssociatedItemBean["default"].constructFromObject(data['objectItem']);
        }

        if (data.hasOwnProperty('remoteAddress')) {
          obj['remoteAddress'] = _ApiClient["default"].convertToType(data['remoteAddress'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuditRecordBean;
}();
/**
 * The list of items associated with the changed record.
 * @member {Array.<module:model/AssociatedItemBean>} associatedItems
 */


AuditRecordBean.prototype['associatedItems'] = undefined;
/**
 * Deprecated, use `authorAccountId` instead. The key of the user who created the audit record.
 * @member {String} authorKey
 */

AuditRecordBean.prototype['authorKey'] = undefined;
/**
 * The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM).
 * @member {String} category
 */

AuditRecordBean.prototype['category'] = undefined;
/**
 * The list of values changed in the record event.
 * @member {Array.<module:model/ChangedValueBean>} changedValues
 */

AuditRecordBean.prototype['changedValues'] = undefined;
/**
 * The date and time on which the audit record was created.
 * @member {Date} created
 */

AuditRecordBean.prototype['created'] = undefined;
/**
 * The description of the audit record.
 * @member {String} description
 */

AuditRecordBean.prototype['description'] = undefined;
/**
 * The event the audit record originated from.
 * @member {String} eventSource
 */

AuditRecordBean.prototype['eventSource'] = undefined;
/**
 * The ID of the audit record.
 * @member {Number} id
 */

AuditRecordBean.prototype['id'] = undefined;
/**
 * @member {module:model/AssociatedItemBean} objectItem
 */

AuditRecordBean.prototype['objectItem'] = undefined;
/**
 * The URL of the computer where the creation of the audit record was initiated.
 * @member {String} remoteAddress
 */

AuditRecordBean.prototype['remoteAddress'] = undefined;
/**
 * The summary of the audit record.
 * @member {String} summary
 */

AuditRecordBean.prototype['summary'] = undefined;
var _default = AuditRecordBean;
exports["default"] = _default;