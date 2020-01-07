"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteFleetErrorCode = _interopRequireDefault(require("./DeleteFleetErrorCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFleetError model module.
 * @module model/DeleteFleetError
 * @version 1.1.0
 */
var DeleteFleetError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFleetError</code>.
   * Describes an EC2 Fleet error.
   * @alias module:model/DeleteFleetError
   */
  function DeleteFleetError() {
    _classCallCheck(this, DeleteFleetError);

    DeleteFleetError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFleetError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFleetError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFleetError} obj Optional instance to populate.
     * @return {module:model/DeleteFleetError} The populated <code>DeleteFleetError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFleetError();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _DeleteFleetErrorCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteFleetError;
}();
/**
 * @member {module:model/DeleteFleetErrorCode} Code
 */


DeleteFleetError.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

DeleteFleetError.prototype['Message'] = undefined;
var _default = DeleteFleetError;
exports["default"] = _default;