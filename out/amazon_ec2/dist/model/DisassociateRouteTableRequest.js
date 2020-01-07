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
 * The DisassociateRouteTableRequest model module.
 * @module model/DisassociateRouteTableRequest
 * @version 1.1.0
 */
var DisassociateRouteTableRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisassociateRouteTableRequest</code>.
   * @alias module:model/DisassociateRouteTableRequest
   * @param associationId {String} 
   */
  function DisassociateRouteTableRequest(associationId) {
    _classCallCheck(this, DisassociateRouteTableRequest);

    DisassociateRouteTableRequest.initialize(this, associationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisassociateRouteTableRequest, null, [{
    key: "initialize",
    value: function initialize(obj, associationId) {
      obj['AssociationId'] = associationId;
    }
    /**
     * Constructs a <code>DisassociateRouteTableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateRouteTableRequest} obj Optional instance to populate.
     * @return {module:model/DisassociateRouteTableRequest} The populated <code>DisassociateRouteTableRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisassociateRouteTableRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DisassociateRouteTableRequest;
}();
/**
 * @member {String} AssociationId
 */


DisassociateRouteTableRequest.prototype['AssociationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DisassociateRouteTableRequest.prototype['DryRun'] = undefined;
var _default = DisassociateRouteTableRequest;
exports["default"] = _default;