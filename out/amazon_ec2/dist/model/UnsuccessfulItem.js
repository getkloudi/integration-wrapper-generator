"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UnsuccessfulItemError = _interopRequireDefault(require("./UnsuccessfulItemError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UnsuccessfulItem model module.
 * @module model/UnsuccessfulItem
 * @version 1.0.0
 */
var UnsuccessfulItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnsuccessfulItem</code>.
   * Information about items that were not successfully processed in a batch call.
   * @alias module:model/UnsuccessfulItem
   */
  function UnsuccessfulItem() {
    _classCallCheck(this, UnsuccessfulItem);

    UnsuccessfulItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnsuccessfulItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UnsuccessfulItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnsuccessfulItem} obj Optional instance to populate.
     * @return {module:model/UnsuccessfulItem} The populated <code>UnsuccessfulItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsuccessfulItem();

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _UnsuccessfulItemError["default"].constructFromObject(data['Error']);
        }

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnsuccessfulItem;
}();
/**
 * @member {module:model/UnsuccessfulItemError} Error
 */


UnsuccessfulItem.prototype['Error'] = undefined;
/**
 * @member {String} ResourceId
 */

UnsuccessfulItem.prototype['ResourceId'] = undefined;
var _default = UnsuccessfulItem;
exports["default"] = _default;