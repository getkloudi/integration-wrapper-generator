"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnRouteStatus = _interopRequireDefault(require("./ClientVpnRouteStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteClientVpnRouteResult model module.
 * @module model/DeleteClientVpnRouteResult
 * @version 1.1.0
 */
var DeleteClientVpnRouteResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteClientVpnRouteResult</code>.
   * @alias module:model/DeleteClientVpnRouteResult
   */
  function DeleteClientVpnRouteResult() {
    _classCallCheck(this, DeleteClientVpnRouteResult);

    DeleteClientVpnRouteResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteClientVpnRouteResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteClientVpnRouteResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteClientVpnRouteResult} obj Optional instance to populate.
     * @return {module:model/DeleteClientVpnRouteResult} The populated <code>DeleteClientVpnRouteResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteClientVpnRouteResult();

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientVpnRouteStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return DeleteClientVpnRouteResult;
}();
/**
 * @member {module:model/ClientVpnRouteStatus} Status
 */


DeleteClientVpnRouteResult.prototype['Status'] = undefined;
var _default = DeleteClientVpnRouteResult;
exports["default"] = _default;