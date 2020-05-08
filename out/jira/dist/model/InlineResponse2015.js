"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2009Author = _interopRequireDefault(require("./InlineResponse2009Author"));

var _InlineResponse2009Body = _interopRequireDefault(require("./InlineResponse2009Body"));

var _InlineResponse2009Visibility = _interopRequireDefault(require("./InlineResponse2009Visibility"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2015 model module.
 * @module model/InlineResponse2015
 * @version 1.3.1
 */
var InlineResponse2015 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2015</code>.
   * 
   * @alias module:model/InlineResponse2015
   * @param author {module:model/InlineResponse2009Author} 
   * @param body {module:model/InlineResponse2009Body} 
   * @param created {String} 
   * @param id {String} 
   * @param self {String} 
   * @param updateAuthor {module:model/InlineResponse2009Author} 
   * @param updated {String} 
   * @param visibility {module:model/InlineResponse2009Visibility} 
   */
  function InlineResponse2015(author, body, created, id, self, updateAuthor, updated, visibility) {
    _classCallCheck(this, InlineResponse2015);

    InlineResponse2015.initialize(this, author, body, created, id, self, updateAuthor, updated, visibility);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2015, null, [{
    key: "initialize",
    value: function initialize(obj, author, body, created, id, self, updateAuthor, updated, visibility) {
      obj['author'] = author;
      obj['body'] = body;
      obj['created'] = created;
      obj['id'] = id;
      obj['self'] = self;
      obj['updateAuthor'] = updateAuthor;
      obj['updated'] = updated;
      obj['visibility'] = visibility;
    }
    /**
     * Constructs a <code>InlineResponse2015</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2015} obj Optional instance to populate.
     * @return {module:model/InlineResponse2015} The populated <code>InlineResponse2015</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2015();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _InlineResponse2009Author["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _InlineResponse2009Body["default"].constructFromObject(data['body']);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('updateAuthor')) {
          obj['updateAuthor'] = _InlineResponse2009Author["default"].constructFromObject(data['updateAuthor']);
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'String');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _InlineResponse2009Visibility["default"].constructFromObject(data['visibility']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2015;
}();
/**
 * @member {module:model/InlineResponse2009Author} author
 */


InlineResponse2015.prototype['author'] = undefined;
/**
 * @member {module:model/InlineResponse2009Body} body
 */

InlineResponse2015.prototype['body'] = undefined;
/**
 * @member {String} created
 */

InlineResponse2015.prototype['created'] = undefined;
/**
 * @member {String} id
 */

InlineResponse2015.prototype['id'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2015.prototype['self'] = undefined;
/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */

InlineResponse2015.prototype['updateAuthor'] = undefined;
/**
 * @member {String} updated
 */

InlineResponse2015.prototype['updated'] = undefined;
/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */

InlineResponse2015.prototype['visibility'] = undefined;
var _default = InlineResponse2015;
exports["default"] = _default;