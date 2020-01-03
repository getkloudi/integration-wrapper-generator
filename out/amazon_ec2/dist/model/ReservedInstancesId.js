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
 * The ReservedInstancesId model module.
 * @module model/ReservedInstancesId
 * @version 1.0.0
 */
var ReservedInstancesId =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstancesId</code>.
   * Describes the ID of a Reserved Instance.
   * @alias module:model/ReservedInstancesId
   */
  function ReservedInstancesId() {
    _classCallCheck(this, ReservedInstancesId);

    ReservedInstancesId.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstancesId, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstancesId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesId} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesId} The populated <code>ReservedInstancesId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstancesId();

        if (data.hasOwnProperty('ReservedInstancesId')) {
          obj['ReservedInstancesId'] = _ApiClient["default"].convertToType(data['ReservedInstancesId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReservedInstancesId;
}();
/**
 * @member {String} ReservedInstancesId
 */


ReservedInstancesId.prototype['ReservedInstancesId'] = undefined;
var _default = ReservedInstancesId;
exports["default"] = _default;