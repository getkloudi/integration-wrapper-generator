"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RouteTableAssociationState = _interopRequireDefault(require("./RouteTableAssociationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReplaceRouteTableAssociationResult model module.
 * @module model/ReplaceRouteTableAssociationResult
 * @version 1.0.0
 */
var ReplaceRouteTableAssociationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceRouteTableAssociationResult</code>.
   * @alias module:model/ReplaceRouteTableAssociationResult
   */
  function ReplaceRouteTableAssociationResult() {
    _classCallCheck(this, ReplaceRouteTableAssociationResult);

    ReplaceRouteTableAssociationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceRouteTableAssociationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReplaceRouteTableAssociationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceRouteTableAssociationResult} obj Optional instance to populate.
     * @return {module:model/ReplaceRouteTableAssociationResult} The populated <code>ReplaceRouteTableAssociationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceRouteTableAssociationResult();

        if (data.hasOwnProperty('AssociationState')) {
          obj['AssociationState'] = _RouteTableAssociationState["default"].constructFromObject(data['AssociationState']);
        }

        if (data.hasOwnProperty('NewAssociationId')) {
          obj['NewAssociationId'] = _ApiClient["default"].convertToType(data['NewAssociationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReplaceRouteTableAssociationResult;
}();
/**
 * @member {module:model/RouteTableAssociationState} AssociationState
 */


ReplaceRouteTableAssociationResult.prototype['AssociationState'] = undefined;
/**
 * @member {String} NewAssociationId
 */

ReplaceRouteTableAssociationResult.prototype['NewAssociationId'] = undefined;
var _default = ReplaceRouteTableAssociationResult;
exports["default"] = _default;