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
 * The VersionIssuesStatus model module.
 * @module model/VersionIssuesStatus
 * @version 1.4.0
 */
var VersionIssuesStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionIssuesStatus</code>.
   * Counts of the number of issues in various statuses.
   * @alias module:model/VersionIssuesStatus
   */
  function VersionIssuesStatus() {
    _classCallCheck(this, VersionIssuesStatus);

    VersionIssuesStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionIssuesStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionIssuesStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionIssuesStatus} obj Optional instance to populate.
     * @return {module:model/VersionIssuesStatus} The populated <code>VersionIssuesStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionIssuesStatus();

        if (data.hasOwnProperty('done')) {
          obj['done'] = _ApiClient["default"].convertToType(data['done'], 'Number');
        }

        if (data.hasOwnProperty('inProgress')) {
          obj['inProgress'] = _ApiClient["default"].convertToType(data['inProgress'], 'Number');
        }

        if (data.hasOwnProperty('toDo')) {
          obj['toDo'] = _ApiClient["default"].convertToType(data['toDo'], 'Number');
        }

        if (data.hasOwnProperty('unmapped')) {
          obj['unmapped'] = _ApiClient["default"].convertToType(data['unmapped'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return VersionIssuesStatus;
}();
/**
 * Count of issues with status *done*.
 * @member {Number} done
 */


VersionIssuesStatus.prototype['done'] = undefined;
/**
 * Count of issues with status *in progress*.
 * @member {Number} inProgress
 */

VersionIssuesStatus.prototype['inProgress'] = undefined;
/**
 * Count of issues with status *to do*.
 * @member {Number} toDo
 */

VersionIssuesStatus.prototype['toDo'] = undefined;
/**
 * Count of issues with a status other than *to do*, *in progress*, and *done*.
 * @member {Number} unmapped
 */

VersionIssuesStatus.prototype['unmapped'] = undefined;
var _default = VersionIssuesStatus;
exports["default"] = _default;