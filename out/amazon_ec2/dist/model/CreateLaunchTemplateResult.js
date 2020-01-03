"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LaunchTemplate = _interopRequireDefault(require("./LaunchTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateLaunchTemplateResult model module.
 * @module model/CreateLaunchTemplateResult
 * @version 1.0.0
 */
var CreateLaunchTemplateResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateLaunchTemplateResult</code>.
   * @alias module:model/CreateLaunchTemplateResult
   */
  function CreateLaunchTemplateResult() {
    _classCallCheck(this, CreateLaunchTemplateResult);

    CreateLaunchTemplateResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLaunchTemplateResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateLaunchTemplateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLaunchTemplateResult} obj Optional instance to populate.
     * @return {module:model/CreateLaunchTemplateResult} The populated <code>CreateLaunchTemplateResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLaunchTemplateResult();

        if (data.hasOwnProperty('LaunchTemplate')) {
          obj['LaunchTemplate'] = _LaunchTemplate["default"].constructFromObject(data['LaunchTemplate']);
        }
      }

      return obj;
    }
  }]);

  return CreateLaunchTemplateResult;
}();
/**
 * @member {module:model/LaunchTemplate} LaunchTemplate
 */


CreateLaunchTemplateResult.prototype['LaunchTemplate'] = undefined;
var _default = CreateLaunchTemplateResult;
exports["default"] = _default;