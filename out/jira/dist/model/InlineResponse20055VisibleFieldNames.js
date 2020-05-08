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
 * The InlineResponse20055VisibleFieldNames model module.
 * @module model/InlineResponse20055VisibleFieldNames
 * @version 1.2.0
 */
var InlineResponse20055VisibleFieldNames = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20055VisibleFieldNames</code>.
   * @alias module:model/InlineResponse20055VisibleFieldNames
   * @param auto {String} 
   * @param cfid {String} 
   * @param displayName {String} 
   * @param orderable {String} 
   * @param searchable {String} 
   * @param value {String} 
   */
  function InlineResponse20055VisibleFieldNames(auto, cfid, displayName, orderable, searchable, value) {
    _classCallCheck(this, InlineResponse20055VisibleFieldNames);

    InlineResponse20055VisibleFieldNames.initialize(this, auto, cfid, displayName, orderable, searchable, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20055VisibleFieldNames, null, [{
    key: "initialize",
    value: function initialize(obj, auto, cfid, displayName, orderable, searchable, value) {
      obj['auto'] = auto;
      obj['cfid'] = cfid;
      obj['displayName'] = displayName;
      obj['orderable'] = orderable;
      obj['searchable'] = searchable;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20055VisibleFieldNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20055VisibleFieldNames} obj Optional instance to populate.
     * @return {module:model/InlineResponse20055VisibleFieldNames} The populated <code>InlineResponse20055VisibleFieldNames</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20055VisibleFieldNames();

        if (data.hasOwnProperty('auto')) {
          obj['auto'] = _ApiClient["default"].convertToType(data['auto'], 'String');
        }

        if (data.hasOwnProperty('cfid')) {
          obj['cfid'] = _ApiClient["default"].convertToType(data['cfid'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('operators')) {
          obj['operators'] = _ApiClient["default"].convertToType(data['operators'], [Object]);
        }

        if (data.hasOwnProperty('orderable')) {
          obj['orderable'] = _ApiClient["default"].convertToType(data['orderable'], 'String');
        }

        if (data.hasOwnProperty('searchable')) {
          obj['searchable'] = _ApiClient["default"].convertToType(data['searchable'], 'String');
        }

        if (data.hasOwnProperty('types')) {
          obj['types'] = _ApiClient["default"].convertToType(data['types'], [Object]);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20055VisibleFieldNames;
}();
/**
 * @member {String} auto
 */


InlineResponse20055VisibleFieldNames.prototype['auto'] = undefined;
/**
 * @member {String} cfid
 */

InlineResponse20055VisibleFieldNames.prototype['cfid'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse20055VisibleFieldNames.prototype['displayName'] = undefined;
/**
 * @member {Array.<Object>} operators
 */

InlineResponse20055VisibleFieldNames.prototype['operators'] = undefined;
/**
 * @member {String} orderable
 */

InlineResponse20055VisibleFieldNames.prototype['orderable'] = undefined;
/**
 * @member {String} searchable
 */

InlineResponse20055VisibleFieldNames.prototype['searchable'] = undefined;
/**
 * @member {Array.<Object>} types
 */

InlineResponse20055VisibleFieldNames.prototype['types'] = undefined;
/**
 * @member {String} value
 */

InlineResponse20055VisibleFieldNames.prototype['value'] = undefined;
var _default = InlineResponse20055VisibleFieldNames;
exports["default"] = _default;