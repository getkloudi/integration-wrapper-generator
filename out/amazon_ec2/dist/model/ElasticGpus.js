"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ElasticGpuHealth = _interopRequireDefault(require("./ElasticGpuHealth"));

var _ElasticGpuState = _interopRequireDefault(require("./ElasticGpuState"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ElasticGpus model module.
 * @module model/ElasticGpus
 * @version 1.0.0
 */
var ElasticGpus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ElasticGpus</code>.
   * Describes an Elastic Graphics accelerator.
   * @alias module:model/ElasticGpus
   */
  function ElasticGpus() {
    _classCallCheck(this, ElasticGpus);

    ElasticGpus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ElasticGpus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ElasticGpus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElasticGpus} obj Optional instance to populate.
     * @return {module:model/ElasticGpus} The populated <code>ElasticGpus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ElasticGpus();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('ElasticGpuHealth')) {
          obj['ElasticGpuHealth'] = _ElasticGpuHealth["default"].constructFromObject(data['ElasticGpuHealth']);
        }

        if (data.hasOwnProperty('ElasticGpuId')) {
          obj['ElasticGpuId'] = _ApiClient["default"].convertToType(data['ElasticGpuId'], 'String');
        }

        if (data.hasOwnProperty('ElasticGpuState')) {
          obj['ElasticGpuState'] = _ElasticGpuState["default"].constructFromObject(data['ElasticGpuState']);
        }

        if (data.hasOwnProperty('ElasticGpuType')) {
          obj['ElasticGpuType'] = _ApiClient["default"].convertToType(data['ElasticGpuType'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ElasticGpus;
}();
/**
 * @member {String} AvailabilityZone
 */


ElasticGpus.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/ElasticGpuHealth} ElasticGpuHealth
 */

ElasticGpus.prototype['ElasticGpuHealth'] = undefined;
/**
 * @member {String} ElasticGpuId
 */

ElasticGpus.prototype['ElasticGpuId'] = undefined;
/**
 * @member {module:model/ElasticGpuState} ElasticGpuState
 */

ElasticGpus.prototype['ElasticGpuState'] = undefined;
/**
 * @member {String} ElasticGpuType
 */

ElasticGpus.prototype['ElasticGpuType'] = undefined;
/**
 * @member {String} InstanceId
 */

ElasticGpus.prototype['InstanceId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ElasticGpus.prototype['Tags'] = undefined;
var _default = ElasticGpus;
exports["default"] = _default;