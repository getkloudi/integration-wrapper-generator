"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RouteTable = _interopRequireDefault(require("./RouteTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateRouteTableResult model module.
 * @module model/CreateRouteTableResult
 * @version 1.0.0
 */
var CreateRouteTableResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateRouteTableResult</code>.
   * @alias module:model/CreateRouteTableResult
   */
  function CreateRouteTableResult() {
    _classCallCheck(this, CreateRouteTableResult);

    CreateRouteTableResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateRouteTableResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateRouteTableResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRouteTableResult} obj Optional instance to populate.
     * @return {module:model/CreateRouteTableResult} The populated <code>CreateRouteTableResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRouteTableResult();

        if (data.hasOwnProperty('RouteTable')) {
          obj['RouteTable'] = _RouteTable["default"].constructFromObject(data['RouteTable']);
        }
      }

      return obj;
    }
  }]);

  return CreateRouteTableResult;
}();
/**
 * @member {module:model/RouteTable} RouteTable
 */


CreateRouteTableResult.prototype['RouteTable'] = undefined;
var _default = CreateRouteTableResult;
exports["default"] = _default;