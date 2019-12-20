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
 * The TagTagger model module.
 * @module model/TagTagger
 * @version 1.3.1
 */
var TagTagger =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TagTagger</code>.
   * @alias module:model/TagTagger
   */
  function TagTagger() {
    _classCallCheck(this, TagTagger);

    TagTagger.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TagTagger, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TagTagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagTagger} obj Optional instance to populate.
     * @return {module:model/TagTagger} The populated <code>TagTagger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagTagger();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TagTagger;
}();
/**
 * Timestamp of when this object was tagged, in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} date
 */


TagTagger.prototype['date'] = undefined;
/**
 * String of the email of the author of the tag.
 * @member {String} email
 */

TagTagger.prototype['email'] = undefined;
/**
 * String of the name of the author of the tag.
 * @member {String} name
 */

TagTagger.prototype['name'] = undefined;
var _default = TagTagger;
exports["default"] = _default;