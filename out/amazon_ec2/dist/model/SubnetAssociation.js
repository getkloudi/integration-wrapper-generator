"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayMulitcastDomainAssociationState = _interopRequireDefault(require("./TransitGatewayMulitcastDomainAssociationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SubnetAssociation model module.
 * @module model/SubnetAssociation
 * @version 1.0.0
 */
var SubnetAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SubnetAssociation</code>.
   * Describes the subnet association with the transit gateway multicast domain.
   * @alias module:model/SubnetAssociation
   */
  function SubnetAssociation() {
    _classCallCheck(this, SubnetAssociation);

    SubnetAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubnetAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubnetAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubnetAssociation} obj Optional instance to populate.
     * @return {module:model/SubnetAssociation} The populated <code>SubnetAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubnetAssociation();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayMulitcastDomainAssociationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SubnetAssociation;
}();
/**
 * @member {module:model/TransitGatewayMulitcastDomainAssociationState} State
 */


SubnetAssociation.prototype['State'] = undefined;
/**
 * @member {String} SubnetId
 */

SubnetAssociation.prototype['SubnetId'] = undefined;
var _default = SubnetAssociation;
exports["default"] = _default;