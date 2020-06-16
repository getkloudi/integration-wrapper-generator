"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityProperty = _interopRequireDefault(require("./EntityProperty"));

var _FieldUpdateOperation = _interopRequireDefault(require("./FieldUpdateOperation"));

var _HistoryMetadata = _interopRequireDefault(require("./HistoryMetadata"));

var _IssueTransition = _interopRequireDefault(require("./IssueTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueUpdateDetails model module.
 * @module model/IssueUpdateDetails
 * @version 1.4.0
 */
var IssueUpdateDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueUpdateDetails</code>.
   * Details of an issue update request.
   * @alias module:model/IssueUpdateDetails
   */
  function IssueUpdateDetails() {
    _classCallCheck(this, IssueUpdateDetails);

    IssueUpdateDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueUpdateDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueUpdateDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueUpdateDetails} obj Optional instance to populate.
     * @return {module:model/IssueUpdateDetails} The populated <code>IssueUpdateDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueUpdateDetails();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('historyMetadata')) {
          obj['historyMetadata'] = _ApiClient["default"].convertToType(data['historyMetadata'], _HistoryMetadata["default"]);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_EntityProperty["default"]]);
        }

        if (data.hasOwnProperty('transition')) {
          obj['transition'] = _ApiClient["default"].convertToType(data['transition'], _IssueTransition["default"]);
        }

        if (data.hasOwnProperty('update')) {
          obj['update'] = _ApiClient["default"].convertToType(data['update'], {
            'String': [_FieldUpdateOperation["default"]]
          });
        }
      }

      return obj;
    }
  }]);

  return IssueUpdateDetails;
}();
/**
 * List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.
 * @member {Object.<String, Object>} fields
 */


IssueUpdateDetails.prototype['fields'] = undefined;
/**
 * Additional issue history details.
 * @member {module:model/HistoryMetadata} historyMetadata
 */

IssueUpdateDetails.prototype['historyMetadata'] = undefined;
/**
 * Details of issue properties to be add or update.
 * @member {Array.<module:model/EntityProperty>} properties
 */

IssueUpdateDetails.prototype['properties'] = undefined;
/**
 * Details of a transition. Required when performing a transition, optional when creating or editing an issue.
 * @member {module:model/IssueTransition} transition
 */

IssueUpdateDetails.prototype['transition'] = undefined;
/**
 * List of operations to perform on issue screen fields. Note that fields included in here cannot be included in `fields`.
 * @member {Object.<String, Array.<module:model/FieldUpdateOperation>>} update
 */

IssueUpdateDetails.prototype['update'] = undefined;
var _default = IssueUpdateDetails;
exports["default"] = _default;