"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcPeeringConnection = _interopRequireDefault(require("./VpcPeeringConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AcceptVpcPeeringConnectionResult model module.
 * @module model/AcceptVpcPeeringConnectionResult
 * @version 1.1.0
 */
var AcceptVpcPeeringConnectionResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AcceptVpcPeeringConnectionResult</code>.
   * @alias module:model/AcceptVpcPeeringConnectionResult
   */
  function AcceptVpcPeeringConnectionResult() {
    _classCallCheck(this, AcceptVpcPeeringConnectionResult);

    AcceptVpcPeeringConnectionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptVpcPeeringConnectionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AcceptVpcPeeringConnectionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptVpcPeeringConnectionResult} obj Optional instance to populate.
     * @return {module:model/AcceptVpcPeeringConnectionResult} The populated <code>AcceptVpcPeeringConnectionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptVpcPeeringConnectionResult();

        if (data.hasOwnProperty('VpcPeeringConnection')) {
          obj['VpcPeeringConnection'] = _VpcPeeringConnection["default"].constructFromObject(data['VpcPeeringConnection']);
        }
      }

      return obj;
    }
  }]);

  return AcceptVpcPeeringConnectionResult;
}();
/**
 * @member {module:model/VpcPeeringConnection} VpcPeeringConnection
 */


AcceptVpcPeeringConnectionResult.prototype['VpcPeeringConnection'] = undefined;
var _default = AcceptVpcPeeringConnectionResult;
exports["default"] = _default;