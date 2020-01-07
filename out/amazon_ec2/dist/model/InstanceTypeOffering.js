"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _LocationType = _interopRequireDefault(require("./LocationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceTypeOffering model module.
 * @module model/InstanceTypeOffering
 * @version 1.1.0
 */
var InstanceTypeOffering =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceTypeOffering</code>.
   * The instance types offered.
   * @alias module:model/InstanceTypeOffering
   */
  function InstanceTypeOffering() {
    _classCallCheck(this, InstanceTypeOffering);

    InstanceTypeOffering.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceTypeOffering, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceTypeOffering</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceTypeOffering} obj Optional instance to populate.
     * @return {module:model/InstanceTypeOffering} The populated <code>InstanceTypeOffering</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceTypeOffering();

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Location')) {
          obj['Location'] = _ApiClient["default"].convertToType(data['Location'], 'String');
        }

        if (data.hasOwnProperty('LocationType')) {
          obj['LocationType'] = _LocationType["default"].constructFromObject(data['LocationType']);
        }
      }

      return obj;
    }
  }]);

  return InstanceTypeOffering;
}();
/**
 * @member {module:model/InstanceType} InstanceType
 */


InstanceTypeOffering.prototype['InstanceType'] = undefined;
/**
 * @member {String} Location
 */

InstanceTypeOffering.prototype['Location'] = undefined;
/**
 * @member {module:model/LocationType} LocationType
 */

InstanceTypeOffering.prototype['LocationType'] = undefined;
var _default = InstanceTypeOffering;
exports["default"] = _default;