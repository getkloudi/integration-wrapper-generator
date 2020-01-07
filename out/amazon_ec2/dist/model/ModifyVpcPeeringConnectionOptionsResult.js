"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PeeringConnectionOptions = _interopRequireDefault(require("./PeeringConnectionOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVpcPeeringConnectionOptionsResult model module.
 * @module model/ModifyVpcPeeringConnectionOptionsResult
 * @version 1.1.0
 */
var ModifyVpcPeeringConnectionOptionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcPeeringConnectionOptionsResult</code>.
   * @alias module:model/ModifyVpcPeeringConnectionOptionsResult
   */
  function ModifyVpcPeeringConnectionOptionsResult() {
    _classCallCheck(this, ModifyVpcPeeringConnectionOptionsResult);

    ModifyVpcPeeringConnectionOptionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcPeeringConnectionOptionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyVpcPeeringConnectionOptionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcPeeringConnectionOptionsResult} obj Optional instance to populate.
     * @return {module:model/ModifyVpcPeeringConnectionOptionsResult} The populated <code>ModifyVpcPeeringConnectionOptionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcPeeringConnectionOptionsResult();

        if (data.hasOwnProperty('AccepterPeeringConnectionOptions')) {
          obj['AccepterPeeringConnectionOptions'] = _PeeringConnectionOptions["default"].constructFromObject(data['AccepterPeeringConnectionOptions']);
        }

        if (data.hasOwnProperty('RequesterPeeringConnectionOptions')) {
          obj['RequesterPeeringConnectionOptions'] = _PeeringConnectionOptions["default"].constructFromObject(data['RequesterPeeringConnectionOptions']);
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcPeeringConnectionOptionsResult;
}();
/**
 * @member {module:model/PeeringConnectionOptions} AccepterPeeringConnectionOptions
 */


ModifyVpcPeeringConnectionOptionsResult.prototype['AccepterPeeringConnectionOptions'] = undefined;
/**
 * @member {module:model/PeeringConnectionOptions} RequesterPeeringConnectionOptions
 */

ModifyVpcPeeringConnectionOptionsResult.prototype['RequesterPeeringConnectionOptions'] = undefined;
var _default = ModifyVpcPeeringConnectionOptionsResult;
exports["default"] = _default;