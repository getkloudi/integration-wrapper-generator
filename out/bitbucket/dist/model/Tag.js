"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _Ref = _interopRequireDefault(require("./Ref"));

var _RefLinks = _interopRequireDefault(require("./RefLinks"));

var _TagAllOf = _interopRequireDefault(require("./TagAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Tag model module.
 * @module model/Tag
 * @version 1.2.0
 */
var Tag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @implements module:model/Ref
   * @implements module:model/TagAllOf
   * @param type {String} 
   */
  function Tag(type) {
    _classCallCheck(this, Tag);

    _Ref["default"].initialize(this, type);

    _TagAllOf["default"].initialize(this);

    Tag.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tag, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tag} obj Optional instance to populate.
     * @return {module:model/Tag} The populated <code>Tag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tag();

        _Ref["default"].constructFromObject(data, obj);

        _TagAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _RefLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = _Commit["default"].constructFromObject(data['target']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('tagger')) {
          obj['tagger'] = _Author["default"].constructFromObject(data['tagger']);
        }
      }

      return obj;
    }
  }]);

  return Tag;
}();
/**
 * @member {String} type
 */


Tag.prototype['type'] = undefined;
/**
 * @member {module:model/RefLinks} links
 */

Tag.prototype['links'] = undefined;
/**
 * The name of the ref.
 * @member {String} name
 */

Tag.prototype['name'] = undefined;
/**
 * @member {module:model/Commit} target
 */

Tag.prototype['target'] = undefined;
/**
 * The message associated with the tag, if available.
 * @member {String} message
 */

Tag.prototype['message'] = undefined;
/**
 * The date that the tag was created, if available
 * @member {Date} date
 */

Tag.prototype['date'] = undefined;
/**
 * @member {module:model/Author} tagger
 */

Tag.prototype['tagger'] = undefined; // Implement Ref interface:

/**
 * @member {String} type
 */

_Ref["default"].prototype['type'] = undefined;
/**
 * @member {module:model/RefLinks} links
 */

_Ref["default"].prototype['links'] = undefined;
/**
 * The name of the ref.
 * @member {String} name
 */

_Ref["default"].prototype['name'] = undefined;
/**
 * @member {module:model/Commit} target
 */

_Ref["default"].prototype['target'] = undefined; // Implement TagAllOf interface:

/**
 * The message associated with the tag, if available.
 * @member {String} message
 */

_TagAllOf["default"].prototype['message'] = undefined;
/**
 * The date that the tag was created, if available
 * @member {Date} date
 */

_TagAllOf["default"].prototype['date'] = undefined;
/**
 * @member {module:model/Author} tagger
 */

_TagAllOf["default"].prototype['tagger'] = undefined;
var _default = Tag;
exports["default"] = _default;