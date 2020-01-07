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
 * The DeleteTrafficMirrorFilterResult model module.
 * @module model/DeleteTrafficMirrorFilterResult
 * @version 1.1.0
 */
var DeleteTrafficMirrorFilterResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTrafficMirrorFilterResult</code>.
   * @alias module:model/DeleteTrafficMirrorFilterResult
   */
  function DeleteTrafficMirrorFilterResult() {
    _classCallCheck(this, DeleteTrafficMirrorFilterResult);

    DeleteTrafficMirrorFilterResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTrafficMirrorFilterResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteTrafficMirrorFilterResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTrafficMirrorFilterResult} obj Optional instance to populate.
     * @return {module:model/DeleteTrafficMirrorFilterResult} The populated <code>DeleteTrafficMirrorFilterResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTrafficMirrorFilterResult();

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteTrafficMirrorFilterResult;
}();
/**
 * @member {String} TrafficMirrorFilterId
 */


DeleteTrafficMirrorFilterResult.prototype['TrafficMirrorFilterId'] = undefined;
var _default = DeleteTrafficMirrorFilterResult;
exports["default"] = _default;