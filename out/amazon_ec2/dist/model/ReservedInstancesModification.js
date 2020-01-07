"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstancesId = _interopRequireDefault(require("./ReservedInstancesId"));

var _ReservedInstancesModificationResult = _interopRequireDefault(require("./ReservedInstancesModificationResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReservedInstancesModification model module.
 * @module model/ReservedInstancesModification
 * @version 1.1.0
 */
var ReservedInstancesModification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstancesModification</code>.
   * Describes a Reserved Instance modification.
   * @alias module:model/ReservedInstancesModification
   */
  function ReservedInstancesModification() {
    _classCallCheck(this, ReservedInstancesModification);

    ReservedInstancesModification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstancesModification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstancesModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesModification} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesModification} The populated <code>ReservedInstancesModification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstancesModification();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CreateDate')) {
          obj['CreateDate'] = _ApiClient["default"].convertToType(data['CreateDate'], 'Date');
        }

        if (data.hasOwnProperty('EffectiveDate')) {
          obj['EffectiveDate'] = _ApiClient["default"].convertToType(data['EffectiveDate'], 'Date');
        }

        if (data.hasOwnProperty('ModificationResults')) {
          obj['ModificationResults'] = _ApiClient["default"].convertToType(data['ModificationResults'], [_ReservedInstancesModificationResult["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesIds')) {
          obj['ReservedInstancesIds'] = _ApiClient["default"].convertToType(data['ReservedInstancesIds'], [_ReservedInstancesId["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesModificationId')) {
          obj['ReservedInstancesModificationId'] = _ApiClient["default"].convertToType(data['ReservedInstancesModificationId'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('UpdateDate')) {
          obj['UpdateDate'] = _ApiClient["default"].convertToType(data['UpdateDate'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ReservedInstancesModification;
}();
/**
 * @member {String} ClientToken
 */


ReservedInstancesModification.prototype['ClientToken'] = undefined;
/**
 * @member {Date} CreateDate
 */

ReservedInstancesModification.prototype['CreateDate'] = undefined;
/**
 * @member {Date} EffectiveDate
 */

ReservedInstancesModification.prototype['EffectiveDate'] = undefined;
/**
 * @member {Array.<module:model/ReservedInstancesModificationResult>} ModificationResults
 */

ReservedInstancesModification.prototype['ModificationResults'] = undefined;
/**
 * @member {Array.<module:model/ReservedInstancesId>} ReservedInstancesIds
 */

ReservedInstancesModification.prototype['ReservedInstancesIds'] = undefined;
/**
 * @member {String} ReservedInstancesModificationId
 */

ReservedInstancesModification.prototype['ReservedInstancesModificationId'] = undefined;
/**
 * @member {String} Status
 */

ReservedInstancesModification.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

ReservedInstancesModification.prototype['StatusMessage'] = undefined;
/**
 * @member {Date} UpdateDate
 */

ReservedInstancesModification.prototype['UpdateDate'] = undefined;
var _default = ReservedInstancesModification;
exports["default"] = _default;