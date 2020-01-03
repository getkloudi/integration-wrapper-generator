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
 * The PortRange model module.
 * @module model/PortRange
 * @version 1.0.0
 */
var PortRange =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PortRange</code>.
   * Describes a range of ports.
   * @alias module:model/PortRange
   */
  function PortRange() {
    _classCallCheck(this, PortRange);

    PortRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PortRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PortRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortRange} obj Optional instance to populate.
     * @return {module:model/PortRange} The populated <code>PortRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PortRange();

        if (data.hasOwnProperty('From')) {
          obj['From'] = _ApiClient["default"].convertToType(data['From'], 'Number');
        }

        if (data.hasOwnProperty('To')) {
          obj['To'] = _ApiClient["default"].convertToType(data['To'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PortRange;
}();
/**
 * @member {Number} From
 */


PortRange.prototype['From'] = undefined;
/**
 * @member {Number} To
 */

PortRange.prototype['To'] = undefined;
var _default = PortRange;
exports["default"] = _default;