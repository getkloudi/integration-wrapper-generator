"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeModification = _interopRequireDefault(require("./VolumeModification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVolumeResult model module.
 * @module model/ModifyVolumeResult
 * @version 1.1.0
 */
var ModifyVolumeResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVolumeResult</code>.
   * @alias module:model/ModifyVolumeResult
   */
  function ModifyVolumeResult() {
    _classCallCheck(this, ModifyVolumeResult);

    ModifyVolumeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVolumeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyVolumeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVolumeResult} obj Optional instance to populate.
     * @return {module:model/ModifyVolumeResult} The populated <code>ModifyVolumeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVolumeResult();

        if (data.hasOwnProperty('VolumeModification')) {
          obj['VolumeModification'] = _VolumeModification["default"].constructFromObject(data['VolumeModification']);
        }
      }

      return obj;
    }
  }]);

  return ModifyVolumeResult;
}();
/**
 * @member {module:model/VolumeModification} VolumeModification
 */


ModifyVolumeResult.prototype['VolumeModification'] = undefined;
var _default = ModifyVolumeResult;
exports["default"] = _default;