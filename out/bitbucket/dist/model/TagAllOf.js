"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TagAllOf model module.
 * @module model/TagAllOf
 * @version 1.2.0
 */
var TagAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TagAllOf</code>.
   * A tag object, representing a tag in a repository.
   * @alias module:model/TagAllOf
   */
  function TagAllOf() {
    _classCallCheck(this, TagAllOf);

    TagAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TagAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TagAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagAllOf} obj Optional instance to populate.
     * @return {module:model/TagAllOf} The populated <code>TagAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagAllOf();

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

  return TagAllOf;
}();
/**
 * The message associated with the tag, if available.
 * @member {String} message
 */


TagAllOf.prototype['message'] = undefined;
/**
 * The date that the tag was created, if available
 * @member {Date} date
 */

TagAllOf.prototype['date'] = undefined;
/**
 * @member {module:model/Author} tagger
 */

TagAllOf.prototype['tagger'] = undefined;
var _default = TagAllOf;
exports["default"] = _default;