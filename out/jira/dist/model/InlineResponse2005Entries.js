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
 * The InlineResponse2005Entries model module.
 * @module model/InlineResponse2005Entries
 * @version 1.2.0
 */
var InlineResponse2005Entries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2005Entries</code>.
   * @alias module:model/InlineResponse2005Entries
   * @param index {Number} 
   * @param label {String} 
   * @param mediaType {String} 
   * @param path {String} 
   * @param size {String} 
   */
  function InlineResponse2005Entries(index, label, mediaType, path, size) {
    _classCallCheck(this, InlineResponse2005Entries);

    InlineResponse2005Entries.initialize(this, index, label, mediaType, path, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2005Entries, null, [{
    key: "initialize",
    value: function initialize(obj, index, label, mediaType, path, size) {
      obj['index'] = index;
      obj['label'] = label;
      obj['mediaType'] = mediaType;
      obj['path'] = path;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>InlineResponse2005Entries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005Entries} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005Entries} The populated <code>InlineResponse2005Entries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2005Entries();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2005Entries;
}();
/**
 * @member {Number} index
 */


InlineResponse2005Entries.prototype['index'] = undefined;
/**
 * @member {String} label
 */

InlineResponse2005Entries.prototype['label'] = undefined;
/**
 * @member {String} mediaType
 */

InlineResponse2005Entries.prototype['mediaType'] = undefined;
/**
 * @member {String} path
 */

InlineResponse2005Entries.prototype['path'] = undefined;
/**
 * @member {String} size
 */

InlineResponse2005Entries.prototype['size'] = undefined;
var _default = InlineResponse2005Entries;
exports["default"] = _default;