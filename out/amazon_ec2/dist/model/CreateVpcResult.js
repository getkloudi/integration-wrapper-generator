"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Vpc = _interopRequireDefault(require("./Vpc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpcResult model module.
 * @module model/CreateVpcResult
 * @version 1.0.0
 */
var CreateVpcResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcResult</code>.
   * @alias module:model/CreateVpcResult
   */
  function CreateVpcResult() {
    _classCallCheck(this, CreateVpcResult);

    CreateVpcResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVpcResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcResult} obj Optional instance to populate.
     * @return {module:model/CreateVpcResult} The populated <code>CreateVpcResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcResult();

        if (data.hasOwnProperty('Vpc')) {
          obj['Vpc'] = _Vpc["default"].constructFromObject(data['Vpc']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpcResult;
}();
/**
 * @member {module:model/Vpc} Vpc
 */


CreateVpcResult.prototype['Vpc'] = undefined;
var _default = CreateVpcResult;
exports["default"] = _default;