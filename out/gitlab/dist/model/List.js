"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LabelBasic = _interopRequireDefault(require("./LabelBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The List model module.
 * @module model/List
 * @version 1.0.0
 */
var List =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>List</code>.
   * This feature was introduced in 8.13
   * @alias module:model/List
   */
  function List() {
    _classCallCheck(this, List);

    List.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(List, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/List} obj Optional instance to populate.
     * @return {module:model/List} The populated <code>List</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new List();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _LabelBasic["default"].constructFromObject(data['label']);
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }
      }

      return obj;
    }
  }]);

  return List;
}();
/**
 * @member {String} id
 */


List.prototype['id'] = undefined;
/**
 * @member {module:model/LabelBasic} label
 */

List.prototype['label'] = undefined;
/**
 * @member {String} position
 */

List.prototype['position'] = undefined;
var _default = List;
exports["default"] = _default;