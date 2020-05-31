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
 * The Api1DeployRequest1 model module.
 * @module model/Api1DeployRequest1
 * @version 1.1.0
 */
var Api1DeployRequest1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1DeployRequest1</code>.
   * @alias module:model/Api1DeployRequest1
   * @param status {String} New status of build - `started`, `succeeded`, `failed`, or `timed_out`.  This value can only be changed if the current status of the build is `started`.
   */
  function Api1DeployRequest1(status) {
    _classCallCheck(this, Api1DeployRequest1);

    Api1DeployRequest1.initialize(this, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1DeployRequest1, null, [{
    key: "initialize",
    value: function initialize(obj, status) {
      obj['status'] = status;
    }
    /**
     * Constructs a <code>Api1DeployRequest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1DeployRequest1} obj Optional instance to populate.
     * @return {module:model/Api1DeployRequest1} The populated <code>Api1DeployRequest1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1DeployRequest1();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Api1DeployRequest1;
}();
/**
 * New status of build - `started`, `succeeded`, `failed`, or `timed_out`.  This value can only be changed if the current status of the build is `started`.
 * @member {String} status
 */


Api1DeployRequest1.prototype['status'] = undefined;
/**
 * Optional comment to describe the deploy
 * @member {String} comment
 */

Api1DeployRequest1.prototype['comment'] = undefined;
var _default = Api1DeployRequest1;
exports["default"] = _default;