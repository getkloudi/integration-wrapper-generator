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
 * The PrefixList model module.
 * @module model/PrefixList
 * @version 1.0.0
 */
var PrefixList =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PrefixList</code>.
   * Describes prefixes for AWS services.
   * @alias module:model/PrefixList
   */
  function PrefixList() {
    _classCallCheck(this, PrefixList);

    PrefixList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrefixList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PrefixList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrefixList} obj Optional instance to populate.
     * @return {module:model/PrefixList} The populated <code>PrefixList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrefixList();

        if (data.hasOwnProperty('Cidrs')) {
          obj['Cidrs'] = _ApiClient["default"].convertToType(data['Cidrs'], ['String']);
        }

        if (data.hasOwnProperty('PrefixListId')) {
          obj['PrefixListId'] = _ApiClient["default"].convertToType(data['PrefixListId'], 'String');
        }

        if (data.hasOwnProperty('PrefixListName')) {
          obj['PrefixListName'] = _ApiClient["default"].convertToType(data['PrefixListName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrefixList;
}();
/**
 * @member {Array.<String>} Cidrs
 */


PrefixList.prototype['Cidrs'] = undefined;
/**
 * @member {String} PrefixListId
 */

PrefixList.prototype['PrefixListId'] = undefined;
/**
 * @member {String} PrefixListName
 */

PrefixList.prototype['PrefixListName'] = undefined;
var _default = PrefixList;
exports["default"] = _default;