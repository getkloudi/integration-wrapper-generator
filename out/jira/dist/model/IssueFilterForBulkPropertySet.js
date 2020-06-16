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
 * The IssueFilterForBulkPropertySet model module.
 * @module model/IssueFilterForBulkPropertySet
 * @version 1.4.0
 */
var IssueFilterForBulkPropertySet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueFilterForBulkPropertySet</code>.
   * Bulk operation filter details.
   * @alias module:model/IssueFilterForBulkPropertySet
   */
  function IssueFilterForBulkPropertySet() {
    _classCallCheck(this, IssueFilterForBulkPropertySet);

    IssueFilterForBulkPropertySet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueFilterForBulkPropertySet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueFilterForBulkPropertySet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueFilterForBulkPropertySet} obj Optional instance to populate.
     * @return {module:model/IssueFilterForBulkPropertySet} The populated <code>IssueFilterForBulkPropertySet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueFilterForBulkPropertySet();

        if (data.hasOwnProperty('currentValue')) {
          obj['currentValue'] = _ApiClient["default"].convertToType(data['currentValue'], Object);
        }

        if (data.hasOwnProperty('entityIds')) {
          obj['entityIds'] = _ApiClient["default"].convertToType(data['entityIds'], ['Number']);
        }

        if (data.hasOwnProperty('hasProperty')) {
          obj['hasProperty'] = _ApiClient["default"].convertToType(data['hasProperty'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IssueFilterForBulkPropertySet;
}();
/**
 * The value of properties to perform the bulk operation on.
 * @member {Object} currentValue
 */


IssueFilterForBulkPropertySet.prototype['currentValue'] = undefined;
/**
 * List of issues to perform the bulk operation on.
 * @member {Array.<Number>} entityIds
 */

IssueFilterForBulkPropertySet.prototype['entityIds'] = undefined;
/**
 * Whether the bulk operation occurs only when the property is present on or absent from an issue.
 * @member {Boolean} hasProperty
 */

IssueFilterForBulkPropertySet.prototype['hasProperty'] = undefined;
var _default = IssueFilterForBulkPropertySet;
exports["default"] = _default;