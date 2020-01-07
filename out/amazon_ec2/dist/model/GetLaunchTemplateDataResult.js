"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseLaunchTemplateData = _interopRequireDefault(require("./ResponseLaunchTemplateData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetLaunchTemplateDataResult model module.
 * @module model/GetLaunchTemplateDataResult
 * @version 1.1.0
 */
var GetLaunchTemplateDataResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetLaunchTemplateDataResult</code>.
   * @alias module:model/GetLaunchTemplateDataResult
   */
  function GetLaunchTemplateDataResult() {
    _classCallCheck(this, GetLaunchTemplateDataResult);

    GetLaunchTemplateDataResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLaunchTemplateDataResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetLaunchTemplateDataResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLaunchTemplateDataResult} obj Optional instance to populate.
     * @return {module:model/GetLaunchTemplateDataResult} The populated <code>GetLaunchTemplateDataResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLaunchTemplateDataResult();

        if (data.hasOwnProperty('LaunchTemplateData')) {
          obj['LaunchTemplateData'] = _ResponseLaunchTemplateData["default"].constructFromObject(data['LaunchTemplateData']);
        }
      }

      return obj;
    }
  }]);

  return GetLaunchTemplateDataResult;
}();
/**
 * @member {module:model/ResponseLaunchTemplateData} LaunchTemplateData
 */


GetLaunchTemplateDataResult.prototype['LaunchTemplateData'] = undefined;
var _default = GetLaunchTemplateDataResult;
exports["default"] = _default;