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
 * The AssociateRouteTableResult model module.
 * @module model/AssociateRouteTableResult
 * @version 1.1.0
 */
var AssociateRouteTableResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateRouteTableResult</code>.
   * @alias module:model/AssociateRouteTableResult
   */
  function AssociateRouteTableResult() {
    _classCallCheck(this, AssociateRouteTableResult);

    AssociateRouteTableResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateRouteTableResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssociateRouteTableResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateRouteTableResult} obj Optional instance to populate.
     * @return {module:model/AssociateRouteTableResult} The populated <code>AssociateRouteTableResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateRouteTableResult();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('AssociationState')) {
          obj['AssociationState'] = _RouteTableAssociationState["default"].constructFromObject(data['AssociationState']);
        }
      }

      return obj;
    }
  }]);

  return AssociateRouteTableResult;
}();
/**
 * @member {String} AssociationId
 */


AssociateRouteTableResult.prototype['AssociationId'] = undefined;
/**
 * @member {module:model/RouteTableAssociationState} AssociationState
 */

AssociateRouteTableResult.prototype['AssociationState'] = undefined;
var _default = AssociateRouteTableResult;
exports["default"] = _default;