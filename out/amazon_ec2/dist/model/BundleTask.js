"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BundleTaskError = _interopRequireDefault(require("./BundleTaskError"));

var _BundleTaskState = _interopRequireDefault(require("./BundleTaskState"));

var _Storage = _interopRequireDefault(require("./Storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BundleTask model module.
 * @module model/BundleTask
 * @version 1.0.0
 */
var BundleTask =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BundleTask</code>.
   * Describes a bundle task.
   * @alias module:model/BundleTask
   */
  function BundleTask() {
    _classCallCheck(this, BundleTask);

    BundleTask.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BundleTask, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BundleTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleTask} obj Optional instance to populate.
     * @return {module:model/BundleTask} The populated <code>BundleTask</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BundleTask();

        if (data.hasOwnProperty('BundleId')) {
          obj['BundleId'] = _ApiClient["default"].convertToType(data['BundleId'], 'String');
        }

        if (data.hasOwnProperty('BundleTaskError')) {
          obj['BundleTaskError'] = _BundleTaskError["default"].constructFromObject(data['BundleTaskError']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'String');
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Date');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _BundleTaskState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Storage')) {
          obj['Storage'] = _Storage["default"].constructFromObject(data['Storage']);
        }

        if (data.hasOwnProperty('UpdateTime')) {
          obj['UpdateTime'] = _ApiClient["default"].convertToType(data['UpdateTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return BundleTask;
}();
/**
 * @member {String} BundleId
 */


BundleTask.prototype['BundleId'] = undefined;
/**
 * @member {module:model/BundleTaskError} BundleTaskError
 */

BundleTask.prototype['BundleTaskError'] = undefined;
/**
 * @member {String} InstanceId
 */

BundleTask.prototype['InstanceId'] = undefined;
/**
 * @member {String} Progress
 */

BundleTask.prototype['Progress'] = undefined;
/**
 * @member {Date} StartTime
 */

BundleTask.prototype['StartTime'] = undefined;
/**
 * @member {module:model/BundleTaskState} State
 */

BundleTask.prototype['State'] = undefined;
/**
 * @member {module:model/Storage} Storage
 */

BundleTask.prototype['Storage'] = undefined;
/**
 * @member {Date} UpdateTime
 */

BundleTask.prototype['UpdateTime'] = undefined;
var _default = BundleTask;
exports["default"] = _default;