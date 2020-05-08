"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2005Entries = _interopRequireDefault(require("./InlineResponse2005Entries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 1.3.1
 */
var InlineResponse2005 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * 
   * @alias module:model/InlineResponse2005
   * @param entries {Array.<module:model/InlineResponse2005Entries>} 
   * @param id {Number} 
   * @param mediaType {String} 
   * @param name {String} 
   * @param totalEntryCount {Number} 
   */
  function InlineResponse2005(entries, id, mediaType, name, totalEntryCount) {
    _classCallCheck(this, InlineResponse2005);

    InlineResponse2005.initialize(this, entries, id, mediaType, name, totalEntryCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2005, null, [{
    key: "initialize",
    value: function initialize(obj, entries, id, mediaType, name, totalEntryCount) {
      obj['entries'] = entries;
      obj['id'] = id;
      obj['mediaType'] = mediaType;
      obj['name'] = name;
      obj['totalEntryCount'] = totalEntryCount;
    }
    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005();

        if (data.hasOwnProperty('entries')) {
          obj['entries'] = _ApiClient["default"].convertToType(data['entries'], [_InlineResponse2005Entries["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('totalEntryCount')) {
          obj['totalEntryCount'] = _ApiClient["default"].convertToType(data['totalEntryCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2005;
}();
/**
 * @member {Array.<module:model/InlineResponse2005Entries>} entries
 */


InlineResponse2005.prototype['entries'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse2005.prototype['id'] = undefined;
/**
 * @member {String} mediaType
 */

InlineResponse2005.prototype['mediaType'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2005.prototype['name'] = undefined;
/**
 * @member {Number} totalEntryCount
 */

InlineResponse2005.prototype['totalEntryCount'] = undefined;
var _default = InlineResponse2005;
exports["default"] = _default;