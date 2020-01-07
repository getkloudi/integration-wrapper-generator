"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BundleTask = _interopRequireDefault(require("./BundleTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelBundleTaskResult model module.
 * @module model/CancelBundleTaskResult
 * @version 1.1.0
 */
var CancelBundleTaskResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelBundleTaskResult</code>.
   * Contains the output of CancelBundleTask.
   * @alias module:model/CancelBundleTaskResult
   */
  function CancelBundleTaskResult() {
    _classCallCheck(this, CancelBundleTaskResult);

    CancelBundleTaskResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelBundleTaskResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelBundleTaskResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelBundleTaskResult} obj Optional instance to populate.
     * @return {module:model/CancelBundleTaskResult} The populated <code>CancelBundleTaskResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelBundleTaskResult();

        if (data.hasOwnProperty('BundleTask')) {
          obj['BundleTask'] = _BundleTask["default"].constructFromObject(data['BundleTask']);
        }
      }

      return obj;
    }
  }]);

  return CancelBundleTaskResult;
}();
/**
 * @member {module:model/BundleTask} BundleTask
 */


CancelBundleTaskResult.prototype['BundleTask'] = undefined;
var _default = CancelBundleTaskResult;
exports["default"] = _default;