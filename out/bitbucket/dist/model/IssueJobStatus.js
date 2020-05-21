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
 * The IssueJobStatus model module.
 * @module model/IssueJobStatus
 * @version 1.2.0
 */
var IssueJobStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueJobStatus</code>.
   * The status of an import or export job
   * @alias module:model/IssueJobStatus
   */
  function IssueJobStatus() {
    _classCallCheck(this, IssueJobStatus);

    IssueJobStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueJobStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueJobStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueJobStatus} obj Optional instance to populate.
     * @return {module:model/IssueJobStatus} The populated <code>IssueJobStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueJobStatus();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('phase')) {
          obj['phase'] = _ApiClient["default"].convertToType(data['phase'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('pct')) {
          obj['pct'] = _ApiClient["default"].convertToType(data['pct'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IssueJobStatus;
}();
/**
 * @member {String} type
 */


IssueJobStatus.prototype['type'] = undefined;
/**
 * The status of the import/export job
 * @member {module:model/IssueJobStatus.StatusEnum} status
 */

IssueJobStatus.prototype['status'] = undefined;
/**
 * The phase of the import/export job
 * @member {String} phase
 */

IssueJobStatus.prototype['phase'] = undefined;
/**
 * The total number of issues being imported/exported
 * @member {Number} total
 */

IssueJobStatus.prototype['total'] = undefined;
/**
 * The total number of issues already imported/exported
 * @member {Number} count
 */

IssueJobStatus.prototype['count'] = undefined;
/**
 * The percentage of issues already imported/exported
 * @member {Number} pct
 */

IssueJobStatus.prototype['pct'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

IssueJobStatus['StatusEnum'] = {
  /**
   * value: "ACCEPTED"
   * @const
   */
  "ACCEPTED": "ACCEPTED",

  /**
   * value: "STARTED"
   * @const
   */
  "STARTED": "STARTED",

  /**
   * value: "RUNNING"
   * @const
   */
  "RUNNING": "RUNNING",

  /**
   * value: "FAILURE"
   * @const
   */
  "FAILURE": "FAILURE"
};
var _default = IssueJobStatus;
exports["default"] = _default;