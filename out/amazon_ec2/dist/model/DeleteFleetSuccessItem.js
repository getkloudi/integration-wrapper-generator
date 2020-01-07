"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetStateCode = _interopRequireDefault(require("./FleetStateCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFleetSuccessItem model module.
 * @module model/DeleteFleetSuccessItem
 * @version 1.1.0
 */
var DeleteFleetSuccessItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFleetSuccessItem</code>.
   * Describes an EC2 Fleet that was successfully deleted.
   * @alias module:model/DeleteFleetSuccessItem
   */
  function DeleteFleetSuccessItem() {
    _classCallCheck(this, DeleteFleetSuccessItem);

    DeleteFleetSuccessItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFleetSuccessItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFleetSuccessItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFleetSuccessItem} obj Optional instance to populate.
     * @return {module:model/DeleteFleetSuccessItem} The populated <code>DeleteFleetSuccessItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFleetSuccessItem();

        if (data.hasOwnProperty('CurrentFleetState')) {
          obj['CurrentFleetState'] = _FleetStateCode["default"].constructFromObject(data['CurrentFleetState']);
        }

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
        }

        if (data.hasOwnProperty('PreviousFleetState')) {
          obj['PreviousFleetState'] = _FleetStateCode["default"].constructFromObject(data['PreviousFleetState']);
        }
      }

      return obj;
    }
  }]);

  return DeleteFleetSuccessItem;
}();
/**
 * @member {module:model/FleetStateCode} CurrentFleetState
 */


DeleteFleetSuccessItem.prototype['CurrentFleetState'] = undefined;
/**
 * @member {String} FleetId
 */

DeleteFleetSuccessItem.prototype['FleetId'] = undefined;
/**
 * @member {module:model/FleetStateCode} PreviousFleetState
 */

DeleteFleetSuccessItem.prototype['PreviousFleetState'] = undefined;
var _default = DeleteFleetSuccessItem;
exports["default"] = _default;