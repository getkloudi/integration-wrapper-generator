"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Subnet = _interopRequireDefault(require("./Subnet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateSubnetResult model module.
 * @module model/CreateSubnetResult
 * @version 1.0.0
 */
var CreateSubnetResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateSubnetResult</code>.
   * @alias module:model/CreateSubnetResult
   */
  function CreateSubnetResult() {
    _classCallCheck(this, CreateSubnetResult);

    CreateSubnetResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateSubnetResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateSubnetResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSubnetResult} obj Optional instance to populate.
     * @return {module:model/CreateSubnetResult} The populated <code>CreateSubnetResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSubnetResult();

        if (data.hasOwnProperty('Subnet')) {
          obj['Subnet'] = _Subnet["default"].constructFromObject(data['Subnet']);
        }
      }

      return obj;
    }
  }]);

  return CreateSubnetResult;
}();
/**
 * @member {module:model/Subnet} Subnet
 */


CreateSubnetResult.prototype['Subnet'] = undefined;
var _default = CreateSubnetResult;
exports["default"] = _default;