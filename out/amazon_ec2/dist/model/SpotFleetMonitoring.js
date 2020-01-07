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
 * The SpotFleetMonitoring model module.
 * @module model/SpotFleetMonitoring
 * @version 1.1.0
 */
var SpotFleetMonitoring =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotFleetMonitoring</code>.
   * Describes whether monitoring is enabled.
   * @alias module:model/SpotFleetMonitoring
   */
  function SpotFleetMonitoring() {
    _classCallCheck(this, SpotFleetMonitoring);

    SpotFleetMonitoring.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotFleetMonitoring, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotFleetMonitoring</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotFleetMonitoring} obj Optional instance to populate.
     * @return {module:model/SpotFleetMonitoring} The populated <code>SpotFleetMonitoring</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotFleetMonitoring();

        if (data.hasOwnProperty('Enabled')) {
          obj['Enabled'] = _ApiClient["default"].convertToType(data['Enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SpotFleetMonitoring;
}();
/**
 * @member {Boolean} Enabled
 */


SpotFleetMonitoring.prototype['Enabled'] = undefined;
var _default = SpotFleetMonitoring;
exports["default"] = _default;