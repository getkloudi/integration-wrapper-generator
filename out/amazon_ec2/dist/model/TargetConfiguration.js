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
 * The TargetConfiguration model module.
 * @module model/TargetConfiguration
 * @version 1.1.0
 */
var TargetConfiguration =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetConfiguration</code>.
   * Information about the Convertible Reserved Instance offering.
   * @alias module:model/TargetConfiguration
   */
  function TargetConfiguration() {
    _classCallCheck(this, TargetConfiguration);

    TargetConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TargetConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetConfiguration} obj Optional instance to populate.
     * @return {module:model/TargetConfiguration} The populated <code>TargetConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetConfiguration();

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('OfferingId')) {
          obj['OfferingId'] = _ApiClient["default"].convertToType(data['OfferingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TargetConfiguration;
}();
/**
 * @member {Number} InstanceCount
 */


TargetConfiguration.prototype['InstanceCount'] = undefined;
/**
 * @member {String} OfferingId
 */

TargetConfiguration.prototype['OfferingId'] = undefined;
var _default = TargetConfiguration;
exports["default"] = _default;