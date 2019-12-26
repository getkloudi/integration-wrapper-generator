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
 * The TagObject model module.
 * @module model/TagObject
 * @version 1.4.2
 */
var TagObject =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TagObject</code>.
   * @alias module:model/TagObject
   */
  function TagObject() {
    _classCallCheck(this, TagObject);

    TagObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TagObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TagObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagObject} obj Optional instance to populate.
     * @return {module:model/TagObject} The populated <code>TagObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagObject();

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], Object);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TagObject;
}();
/**
 * @member {String} sha
 */


TagObject.prototype['sha'] = undefined;
/**
 * String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
 * @member {Object} type
 */

TagObject.prototype['type'] = undefined;
/**
 * @member {String} url
 */

TagObject.prototype['url'] = undefined;
var _default = TagObject;
exports["default"] = _default;