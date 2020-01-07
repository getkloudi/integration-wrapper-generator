"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteFleetError = _interopRequireDefault(require("./DeleteFleetError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFleetErrorItem model module.
 * @module model/DeleteFleetErrorItem
 * @version 1.1.0
 */
var DeleteFleetErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFleetErrorItem</code>.
   * Describes an EC2 Fleet that was not successfully deleted.
   * @alias module:model/DeleteFleetErrorItem
   */
  function DeleteFleetErrorItem() {
    _classCallCheck(this, DeleteFleetErrorItem);

    DeleteFleetErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFleetErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFleetErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFleetErrorItem} obj Optional instance to populate.
     * @return {module:model/DeleteFleetErrorItem} The populated <code>DeleteFleetErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFleetErrorItem();

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _DeleteFleetError["default"].constructFromObject(data['Error']);
        }

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteFleetErrorItem;
}();
/**
 * @member {module:model/DeleteFleetError} Error
 */


DeleteFleetErrorItem.prototype['Error'] = undefined;
/**
 * @member {String} FleetId
 */

DeleteFleetErrorItem.prototype['FleetId'] = undefined;
var _default = DeleteFleetErrorItem;
exports["default"] = _default;