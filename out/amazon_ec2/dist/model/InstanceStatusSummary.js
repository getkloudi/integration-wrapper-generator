"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceStatusDetails = _interopRequireDefault(require("./InstanceStatusDetails"));

var _SummaryStatus = _interopRequireDefault(require("./SummaryStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceStatusSummary model module.
 * @module model/InstanceStatusSummary
 * @version 1.0.0
 */
var InstanceStatusSummary =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceStatusSummary</code>.
   * Describes the status of an instance.
   * @alias module:model/InstanceStatusSummary
   */
  function InstanceStatusSummary() {
    _classCallCheck(this, InstanceStatusSummary);

    InstanceStatusSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceStatusSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceStatusSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStatusSummary} obj Optional instance to populate.
     * @return {module:model/InstanceStatusSummary} The populated <code>InstanceStatusSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceStatusSummary();

        if (data.hasOwnProperty('Details')) {
          obj['Details'] = _ApiClient["default"].convertToType(data['Details'], [_InstanceStatusDetails["default"]]);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _SummaryStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return InstanceStatusSummary;
}();
/**
 * @member {Array.<module:model/InstanceStatusDetails>} Details
 */


InstanceStatusSummary.prototype['Details'] = undefined;
/**
 * @member {module:model/SummaryStatus} Status
 */

InstanceStatusSummary.prototype['Status'] = undefined;
var _default = InstanceStatusSummary;
exports["default"] = _default;