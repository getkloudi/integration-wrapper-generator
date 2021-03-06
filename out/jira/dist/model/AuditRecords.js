"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuditRecordBean = _interopRequireDefault(require("./AuditRecordBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuditRecords model module.
 * @module model/AuditRecords
 * @version 1.4.0
 */
var AuditRecords = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuditRecords</code>.
   * Container for a list of audit records.
   * @alias module:model/AuditRecords
   */
  function AuditRecords() {
    _classCallCheck(this, AuditRecords);

    AuditRecords.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuditRecords, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuditRecords</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditRecords} obj Optional instance to populate.
     * @return {module:model/AuditRecords} The populated <code>AuditRecords</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuditRecords();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('records')) {
          obj['records'] = _ApiClient["default"].convertToType(data['records'], [_AuditRecordBean["default"]]);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AuditRecords;
}();
/**
 * The requested or default limit on the number of audit items to be returned.
 * @member {Number} limit
 */


AuditRecords.prototype['limit'] = undefined;
/**
 * The number of audit items skipped before the first item in this list.
 * @member {Number} offset
 */

AuditRecords.prototype['offset'] = undefined;
/**
 * The list of audit items.
 * @member {Array.<module:model/AuditRecordBean>} records
 */

AuditRecords.prototype['records'] = undefined;
/**
 * The total number of audit items returned.
 * @member {Number} total
 */

AuditRecords.prototype['total'] = undefined;
var _default = AuditRecords;
exports["default"] = _default;