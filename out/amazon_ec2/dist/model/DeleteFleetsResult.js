"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteFleetErrorItem = _interopRequireDefault(require("./DeleteFleetErrorItem"));

var _DeleteFleetSuccessItem = _interopRequireDefault(require("./DeleteFleetSuccessItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFleetsResult model module.
 * @module model/DeleteFleetsResult
 * @version 1.1.0
 */
var DeleteFleetsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFleetsResult</code>.
   * @alias module:model/DeleteFleetsResult
   */
  function DeleteFleetsResult() {
    _classCallCheck(this, DeleteFleetsResult);

    DeleteFleetsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFleetsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFleetsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFleetsResult} obj Optional instance to populate.
     * @return {module:model/DeleteFleetsResult} The populated <code>DeleteFleetsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFleetsResult();

        if (data.hasOwnProperty('SuccessfulFleetDeletions')) {
          obj['SuccessfulFleetDeletions'] = _ApiClient["default"].convertToType(data['SuccessfulFleetDeletions'], [_DeleteFleetSuccessItem["default"]]);
        }

        if (data.hasOwnProperty('UnsuccessfulFleetDeletions')) {
          obj['UnsuccessfulFleetDeletions'] = _ApiClient["default"].convertToType(data['UnsuccessfulFleetDeletions'], [_DeleteFleetErrorItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DeleteFleetsResult;
}();
/**
 * @member {Array.<module:model/DeleteFleetSuccessItem>} SuccessfulFleetDeletions
 */


DeleteFleetsResult.prototype['SuccessfulFleetDeletions'] = undefined;
/**
 * @member {Array.<module:model/DeleteFleetErrorItem>} UnsuccessfulFleetDeletions
 */

DeleteFleetsResult.prototype['UnsuccessfulFleetDeletions'] = undefined;
var _default = DeleteFleetsResult;
exports["default"] = _default;