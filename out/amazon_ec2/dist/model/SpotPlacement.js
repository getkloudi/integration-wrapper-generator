"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotPlacement model module.
 * @module model/SpotPlacement
 * @version 1.0.0
 */
var SpotPlacement =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotPlacement</code>.
   * Describes Spot Instance placement.
   * @alias module:model/SpotPlacement
   */
  function SpotPlacement() {
    _classCallCheck(this, SpotPlacement);

    SpotPlacement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotPlacement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotPlacement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotPlacement} obj Optional instance to populate.
     * @return {module:model/SpotPlacement} The populated <code>SpotPlacement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotPlacement();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('Tenancy')) {
          obj['Tenancy'] = _Tenancy["default"].constructFromObject(data['Tenancy']);
        }
      }

      return obj;
    }
  }]);

  return SpotPlacement;
}();
/**
 * @member {String} AvailabilityZone
 */


SpotPlacement.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} GroupName
 */

SpotPlacement.prototype['GroupName'] = undefined;
/**
 * @member {module:model/Tenancy} Tenancy
 */

SpotPlacement.prototype['Tenancy'] = undefined;
var _default = SpotPlacement;
exports["default"] = _default;