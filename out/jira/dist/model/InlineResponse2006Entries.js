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
 * The InlineResponse2006Entries model module.
 * @module model/InlineResponse2006Entries
 * @version 1.3.1
 */
var InlineResponse2006Entries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2006Entries</code>.
   * @alias module:model/InlineResponse2006Entries
   * @param entryIndex {Number} 
   * @param mediaType {String} 
   * @param name {String} 
   * @param size {Number} 
   */
  function InlineResponse2006Entries(entryIndex, mediaType, name, size) {
    _classCallCheck(this, InlineResponse2006Entries);

    InlineResponse2006Entries.initialize(this, entryIndex, mediaType, name, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2006Entries, null, [{
    key: "initialize",
    value: function initialize(obj, entryIndex, mediaType, name, size) {
      obj['entryIndex'] = entryIndex;
      obj['mediaType'] = mediaType;
      obj['name'] = name;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>InlineResponse2006Entries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006Entries} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006Entries} The populated <code>InlineResponse2006Entries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006Entries();

        if (data.hasOwnProperty('entryIndex')) {
          obj['entryIndex'] = _ApiClient["default"].convertToType(data['entryIndex'], 'Number');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2006Entries;
}();
/**
 * @member {Number} entryIndex
 */


InlineResponse2006Entries.prototype['entryIndex'] = undefined;
/**
 * @member {String} mediaType
 */

InlineResponse2006Entries.prototype['mediaType'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2006Entries.prototype['name'] = undefined;
/**
 * @member {Number} size
 */

InlineResponse2006Entries.prototype['size'] = undefined;
var _default = InlineResponse2006Entries;
exports["default"] = _default;