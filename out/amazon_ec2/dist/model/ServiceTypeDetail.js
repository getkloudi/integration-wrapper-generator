"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceType = _interopRequireDefault(require("./ServiceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceTypeDetail model module.
 * @module model/ServiceTypeDetail
 * @version 1.0.0
 */
var ServiceTypeDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ServiceTypeDetail</code>.
   * Describes the type of service for a VPC endpoint.
   * @alias module:model/ServiceTypeDetail
   */
  function ServiceTypeDetail() {
    _classCallCheck(this, ServiceTypeDetail);

    ServiceTypeDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceTypeDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceTypeDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceTypeDetail} obj Optional instance to populate.
     * @return {module:model/ServiceTypeDetail} The populated <code>ServiceTypeDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceTypeDetail();

        if (data.hasOwnProperty('ServiceType')) {
          obj['ServiceType'] = _ServiceType["default"].constructFromObject(data['ServiceType']);
        }
      }

      return obj;
    }
  }]);

  return ServiceTypeDetail;
}();
/**
 * @member {module:model/ServiceType} ServiceType
 */


ServiceTypeDetail.prototype['ServiceType'] = undefined;
var _default = ServiceTypeDetail;
exports["default"] = _default;